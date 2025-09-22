const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const CACHE_DIR = '.translation-cache';
const SOURCE_DIR = 'docs';
const TARGET_LANGUAGES = ['de', 'fr', 'es', 'ar']; // adjust as needed

// ---------------- Cache System ----------------

/**
 * Generate a unique cache key for given content and target language.
 * Uses MD5 hash to create a consistent identifier.
 */
function getCacheKey(content, targetLang) {
  return crypto.createHash('md5').update(content + targetLang).digest('hex');
}

/**
 * Load translations from cache file if it exists.
 * If no cache exists, create the cache directory and return an empty object.
 */
function loadCache() {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    return {};
  }
  const cacheFile = path.join(CACHE_DIR, 'translations.json');
  if (fs.existsSync(cacheFile)) {
    return JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
  }
  return {};
}

/**
 * Save updated cache data back into the cache file.
 */
function saveCache(cache) {
  const cacheFile = path.join(CACHE_DIR, 'translations.json');
  fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2));
}

// ---------------- Find Changed Markdown Files ----------------

/**
 * Get markdown files changed in the last Git commit.
 * Falls back to scanning all files if Git command fails.
 */
function getChangedMarkdownFiles() {
  try {
    const output = execSync('git diff --name-only HEAD~1 HEAD', { encoding: 'utf8' });
    return output
      .split('\n')
      .filter(file => file.startsWith(SOURCE_DIR) && file.endsWith('.md') && fs.existsSync(file));
  } catch (error) {
    return getAllMarkdownFiles();
  }
}

/**
 * Get all markdown files in the docs folder using `find`.
 * Excludes node_modules and .git directories.
 */
function getAllMarkdownFiles() {
  const output = execSync(
    `find ${SOURCE_DIR} -name "*.md" -not -path "./node_modules/*" -not -path "./.git/*"`,
    { encoding: 'utf8' }
  );
  return output.split('\n').filter(file => file.trim() !== '');
}

// ---------------- Translation ----------------

/**
 * Translate a markdown document into the target language using OpenAI API.
 * Keeps formatting, code blocks, and links intact.
 * Only translates visible text, not metadata IDs.
 */
async function translateContent(content, targetLang) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [
      {
        role: 'system',
        content: `You are a professional translator. Translate the following markdown content to ${targetLang}. Keep all markdown formatting, code blocks, and links intact. Only translate the actual text content. Do not translate the sidebar id of the metadata`
      },
      {
        role: 'user',
        content: content
      }
    ],
    temperature: 0.1
  });

  return response.choices[0].message.content;
}

// ---------------- Main Process ----------------

/**
 * Main function:
 * - Load cache
 * - Detect changed markdown files
 * - For each file, translate into all target languages
 * - Save translations into i18n folder
 * - Update cache
 */
async function main() {
  const cache = loadCache();
  const changedFiles = getChangedMarkdownFiles();

  console.log(`Found ${changedFiles.length} changed markdown files`);

  for (const file of changedFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relPath = path.relative(SOURCE_DIR, file); // relative path from docs/

    for (const lang of TARGET_LANGUAGES) {
      const cacheKey = getCacheKey(content, lang);

      if (cache[cacheKey]) {
        console.log(`Using cached translation for ${file} -> ${lang}`);
        continue;
      }

      console.log(`Translating ${file} to ${lang}...`);

      try {
        const translatedContent = await translateContent(content, lang);
        cache[cacheKey] = translatedContent;

        // Build target file path inside i18n structure
        const outputFile = path.join(
          'i18n',
          lang,
          'docusaurus-plugin-content-docs/current',
          relPath
        );

        fs.mkdirSync(path.dirname(outputFile), { recursive: true });
        fs.writeFileSync(outputFile, translatedContent);

        // Delay to avoid hitting rate limits
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`Error translating ${file} to ${lang}:`, error);
      }
    }
  }

  saveCache(cache);
}

// Run the main function and catch fatal errors
main().catch(console.error);
