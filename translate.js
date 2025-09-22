const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const SOURCE_DIR = 'docs';
const TARGET_LANGUAGES = ['de', 'fr', 'es', 'ar']; // anpassen nach Bedarf

// ---------------- Token Counter ----------------
let totalPromptTokens = 0;
let totalCompletionTokens = 0;
let totalTokens = 0;

// ---------------- Geänderte Markdown-Dateien finden ----------------

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

function getAllMarkdownFiles() {
  const output = execSync(
    `find ${SOURCE_DIR} -name "*.md" -not -path "./node_modules/*" -not -path "./.git/*"`,
    { encoding: 'utf8' }
  );
  return output.split('\n').filter(file => file.trim() !== '');
}

// ---------------- Übersetzung ----------------

async function translateContent(content, targetLang) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [
      {
        role: 'system',
        content: `You are a professional translator. Translate the following markdown content to ${targetLang}. Keep all markdown formatting, code blocks, and links intact. Only translate visible text. Do not translate metadata ids.`
      },
      {
        role: 'user',
        content: content
      }
    ],
    temperature: 0.1
  });

  // Token usage erfassen
  if (response.usage) {
    totalPromptTokens += response.usage.prompt_tokens || 0;
    totalCompletionTokens += response.usage.completion_tokens || 0;
    totalTokens += response.usage.total_tokens || 0;
  }

  return response.choices[0].message.content;
}

// ---------------- Hauptprozess ----------------

async function main() {
  const changedFiles = getChangedMarkdownFiles();
  console.log(`Found ${changedFiles.length} changed markdown files`);

  for (const file of changedFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relPath = path.relative(SOURCE_DIR, file); // relativer Pfad von docs/

    for (const lang of TARGET_LANGUAGES) {
      console.log(`Translating ${file} to ${lang}...`);

      try {
        const translatedContent = await translateContent(content, lang);

        const outputFile = path.join(
          'i18n',
          lang,
          'docusaurus-plugin-content-docs/current',
          relPath
        );

        fs.mkdirSync(path.dirname(outputFile), { recursive: true });
        fs.writeFileSync(outputFile, translatedContent);

        // kleine Pause gegen Rate Limits
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`Error translating ${file} to ${lang}:`, error);
      }
    }
  }

  // Zusammenfassung der Token-Nutzung
  console.log('\n--- Translation Token Usage ---');
  console.log(`Prompt tokens:     ${totalPromptTokens}`);
  console.log(`Completion tokens: ${totalCompletionTokens}`);
  console.log(`Total tokens:      ${totalTokens}`);
}

main().catch(console.error);
