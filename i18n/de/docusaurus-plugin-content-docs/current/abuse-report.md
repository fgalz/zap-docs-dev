---
id: abuse-report
title: "Missbrauch und illegale Inhalte melden – Alles, was Sie wissen müssen!"
description: "Wie man Missbrauch und illegale Inhalte bei ZAP-Hosting meldet – ZAP-Hosting.com Dokumentation"
sidebar_label: Missbrauch melden
---

## Einführung

Das Internet ermöglicht Wertschöpfung. Missbrauch schadet Nutzern und Diensten. Unser Ziel ist es, Vorfälle schnell zu erkennen und zu stoppen. Sie können vermuteten Missbrauch unserem Abuse-Team melden. Wir prüfen jeden Bericht, sichern Beweise, handeln nach geltendem Recht und unseren Richtlinien und benachrichtigen bei Bedarf die zuständigen Behörden. Noch ein Test lol.

## Arten von Missbrauchsfällen

Hallo, mein Name ist! Missbrauch kann sich auf verschiedene Weise zeigen. Melden Sie jeden Fall, der in die folgenden Kategorien passt oder diesen nahekommt:

<details>
  <summary>Spam</summary>

Unaufgeforderte oder massenhafte Nachrichten, die über unsere Systeme oder gehostete Inhalte gesendet werden und Spam-Filter auslösen. Varianten umfassen E-Mail-Spam, Kommentar-Spam, SEO-Link-Spam und automatisierte Kontoerstellung. Bitte stellen Sie Beispielnachrichten, Header, Absender-IP-Adressen und Versandmuster bereit.

</details>

<details>
  <summary>Angriffe und DDoS</summary>

Feindlicher Datenverkehr, der darauf abzielt, Dienste zu stören oder Systeme auszuspähen. Häufige Formen sind volumetrische L3/L4-Floods, HTTP Layer-7-Floods, Amplification, Brute-Force-Logins und aggressive Portscans. Indikatoren sind Spitzen bei PPS oder Mbps, erhöhte 4xx/5xx-Raten und wiederholte Authentifizierungsfehler von wechselnden Quellen.

</details>

<details>
  <summary>Urheberrechts- und Markenrechtsverletzungen</summary>

Unbefugte Verbreitung geschützter Werke oder missbräuchliche Verwendung eingetragener Marken. Varianten umfassen Piraterie-Spiegel, geknackte Downloads, Marken-Imitation und irreführende Domains. Bitte geben Sie das Werk, den Rechteinhaber, den genauen Ort und den Autorisierungsstatus an.

</details>

<details>
  <summary>Phishing</summary>

Inhalte, die darauf ausgelegt sind, Zugangsdaten oder Zahlungsinformationen durch Nachahmung vertrauenswürdiger Marken zu erlangen. Varianten umfassen gefälschte Login-Portale, Rechnungstricks, QR- oder Anhangs-Lockmittel und MFA-Erschöpfung. Geben Sie die Zielmarke, Erfassungspunkte und Unterschiede zur legitimen Seite an.

</details>

<details>
  <summary>DSGVO</summary>

Unbefugte Verarbeitung, Offenlegung oder Leckage personenbezogener Daten. Typische Fälle sind offene Indizes, falsch konfigurierte Buckets, Scraping ohne rechtliche Grundlage und öffentliche Protokolle. Beschreiben Sie Datenkategorien, Umfang, betroffene Personen und Ursache der Offenlegung.

</details>

<details>
  <summary>CSAM/SAM</summary>

Jegliches Material, das sexuelle Ausbeutung von Menschen darstellt. Null Toleranz.

</details>

<details>
  <summary>Illegale Inhalte</summary>

Inhalte, die geltendes Recht verletzen, wie extremistische Propaganda, Drohungen, Hassrede, Aufstachelung zu Gewalt oder Verleumdung. Varianten umfassen Doxxing, explizite Drohungen und von der Rechtsordnung verbotene Materialien. Bitte geben Sie den genauen Ort und, falls bekannt, die rechtliche Grundlage an.

</details>

<details>
  <summary>Sonstiges</summary>

Missbrauch, der nicht in die oben genannten Kategorien passt, aber dennoch Nutzern oder Systemen schadet. Beispiele sind Malware-Hosting, Botnet-C2, Betrug und unautorisierte Kryptomining-Aktivitäten. Teilen Sie Hashes, URLs, C2-Muster und Auffälligkeiten bei der Ressourcennutzung mit.

</details>

## Erforderliche Informationen

Um einen vollständigen und verwertbaren Bericht sicherzustellen, geben Sie bitte umfassende Details an, die es uns ermöglichen, die Ressource zu identifizieren, den Vorfall zu verifizieren und die richtigen Maßnahmen zu ergreifen, einschließlich folgender Angaben:
- Ort: URL, IP, Port, Hostname, Dateipfad, Hash
- Zeitstempel in UTC im Format JJJJ-MM-TTTHH:MM:SSZ
- Beschreibung: Was ist passiert, wie entdeckt, beobachtete Auswirkungen
- Beweise: Screenshots, Textprotokolle, vollständige E-Mails mit Headern als EML, kurze PCAPs, NetFlow, HTTP-Header

## Akzeptierte Dateien und Bereitstellung

Stellen Sie Beweise in klaren Formaten und so bereit, dass wir zuverlässig darauf zugreifen können. Fügen Sie kleinere Dateien Ihrer E-Mail bei oder hosten Sie große Dateien extern. Kleine bis mittelgroße Dateien bitte direkt anhängen. Bevorzugen Sie offene, unveränderte Formate. Rohtext ist besser als Screenshots von Text.

Für große Dateien teilen Sie bitte einen stabilen Download-Link. Dieser sollte ohne Interaktion abrufbar sein oder klare Zugangsdaten enthalten. Geben Sie die Gültigkeitsdauer des Links an. Fügen Sie Prüfsummen zur Integritätsprüfung hinzu.

Verwenden Sie Standardformate wie TXT, PDF, PNG, JPG, PCAP oder PCAPNG, EML, HAR, CSV und JSON. Fügen Sie keine Passwörter, privaten Schlüssel oder vollständige persönliche Daten bei, sofern nicht unbedingt erforderlich.

Für Qualität reichen Sie E-Mails als EML mit vollständigen Headern ein, Protokolle als Klartext, Netzwerkaufzeichnungen als kurze und relevante PCAP- oder PCAPNG-Captures und Screenshots in Originalauflösung ein.

Zur Sicherheit schwärzen Sie alle Geheimnisse; falls nötig, legen Sie Dateien in ein passwortgeschütztes Archiv und teilen das Passwort separat mit. Bei CSAM/SAM senden Sie keine Dateien, sondern nur Links.

## Kontaktieren Sie uns

Senden Sie Ihren Bericht an `abuse@zap-hosting.com`. Es ist wichtig, einen klaren Betreff wie `Abuse Report Phishing` oder `Abuse Report DDoS` zu verwenden. Senden Sie pro Vorfall eine E-Mail. Das folgende Beispiel zeigt eine vollständige Anfrage:

```
To: abuse@zap-hosting.com
Subject: Abuse Report Brute Force (SSH)

Location:
- Target IP: XXX.XX.XXX.XX
- Service: SSH
- Port: 22
- Hostname: v12345.zap-hosting.com

Timestamps (UTC):
- First seen: 2025-08-23T09:12:04Z
- Last seen: 2025-08-23T10:03:31Z

Description:
Repeated SSH login attempts with rotating usernames and source IPs. Detected via anomalies in auth.log and elevated connection rate. Password authentication disabled after detection. No successful login observed.

Evidence:
- auth.log excerpt with multiple "Failed password" and "Invalid user" entries
- fail2ban log snippet showing bans and source addresses
- 60-second PCAP capturing TCP attempts to port 22
- Aggregate counts: 12,438 attempts from 352 source IPs
- Top sources with ASN information

Sample log excerpt:
2025-08-23T09:55:17Z sshd[2173]: Failed password for invalid user admin from XXX.X.XXX.XX port XXXX ssh2
2025-08-23T09:55:18Z sshd[2173]: Failed password for root from XXX.X.XX
```

## Was passiert danach

Unser Abuse-Team bearbeitet Ihren Bericht so schnell wie möglich und antwortet zeitnah. Wir prüfen den Vorfall und priorisieren ihn nach Schweregrad.

Basierend auf der Prüfung ergreifen wir Maßnahmen, darunter Kundenbenachrichtigung, vorübergehende oder dauerhafte Sperrung, Entfernung der gemeldeten Inhalte, Sicherung von Beweisen und Benachrichtigung der zuständigen Behörden, wenn erforderlich.