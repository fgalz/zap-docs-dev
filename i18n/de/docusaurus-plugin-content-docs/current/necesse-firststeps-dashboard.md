---
id: necesse-firststeps-dashboard
title: "Necesse: Dashboard-Übersicht"
description: Informationen zum Dashboard eines Necesse-Servers von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Dashboard
services:
  - gameserver-necesse
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du interessierst dich für einen **Necesse-Server** oder besitzt bereits einen, hast aber noch keinen umfassenden Überblick über die Administration und die Auffindbarkeit aller notwendigen Optionen? Gerade am Anfang kann das eine Herausforderung sein. Aber keine Sorge, wir geben dir unten eine ausführliche Einführung in die Verwaltung deines Services, damit du die bestmögliche Übersicht erhältst.

Nach Durcharbeiten dieser Anleitung wirst du deinen Server problemlos effizient verwalten und alle notwendigen Optionen und Funktionen schnell und einfach finden können. Hier erhältst du eine strukturierte Übersicht, die dir Schritt für Schritt hilft, dich mit der Serververwaltung vertraut zu machen und dein Wissen gezielt zu erweitern. So kannst du sicherstellen, dass dein **Necesse-Server** optimal an deine Bedürfnisse angepasst ist und du das Maximum aus den verfügbaren Optionen herausholst. Test

<InlineVoucher />

## Produktverwaltung

Im Bereich **Produktverwaltung** findest du alle notwendigen Seiten zur Verwaltung deines Servers. Die Optionen zur Verwaltung deines Servers sind im Folgenden detailliert aufgelistet.



### Dashboard

Das **Dashboard** deines Servers ist das Herzstück der Administration. Hier werden alle grundlegenden und wichtigen Informationen zu deinem Service übersichtlich dargestellt. Dazu gehören beispielsweise Informationen zum Standort, Status, IP: Port, genutztem Speicher, laufendem Spiel, Servername, Karte und der Anzahl verfügbarer Slots. Zusätzlich wird auch die Auslastung von CPU, Speicher und RAM angezeigt.

![img](https://screensaver01.zap-hosting.com/index.php/s/HKWMjAMexGeHQmw/preview)

Im Dashboard hast du außerdem die Möglichkeit, deinen Service zu starten, zu stoppen oder neu zu starten, um die volle Kontrolle über den Betrieb zu haben. Zudem kannst du auf die Live-Konsole zugreifen, um Echtzeitinformationen über den Zustand des Servers zu erhalten und bei Bedarf direkt eingreifen zu können.






### DDoS-Manager



Sieh dir vergangene DDoS-Angriffe an, um potenzielle Bedrohungen und Muster besser einschätzen zu können. Aktiviere Benachrichtigungen für laufende DDoS-Angriffe auf deinen Server, um bei einem Vorfall schnell reagieren zu können.

Je nach Serverstandort und dort verfügbarer DDoS-Schutz kannst du auch aktive Angriffe in Echtzeit überwachen. Dies beinhaltet detaillierte Traffic-Einblicke, die sowohl legitimen Traffic als auch die Menge des durch die Schutzsysteme blockierten Traffics anzeigen. Dieses Maß an Transparenz hilft dir zu verstehen, wie der Schutz funktioniert, und ermöglicht es dir, potenzielle Risiken frühzeitig zu erkennen.

:::info DDoS-Manager-Zugang fehlt?
Die Nutzung des DDoS-Managers erfordert entweder eine dedizierte IP-Adresse oder die Zusatzoption „DDoS Manager Übersicht“. Wenn dein aktuelles Paket diese Komponenten nicht enthält, kannst du sie jederzeit durch ein Upgrade deines Services hinzufügen.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)





:::warning
Die Nutzung des DDoS-Managers ist nur möglich, wenn entweder eine eigene IP-Adresse oder die Option „DDoS Manager Übersicht“ als Zusatzoption gebucht wurde. Fehlen diese Komponenten in deinem aktuellen Paket, kannst du sie jederzeit durch ein Upgrade hinzufügen.
:::



### Logdateien

Tritt ein technisches Problem auf und du bist dir unsicher über die Ursache? Eine erste mögliche Lösungsstrategie ist die Überprüfung der **Logdateien**. Diese Dateien enthalten viele Informationen über den Server, wie aktuelle Ereignisse, Hinweise oder Fehlermeldungen.

Insbesondere Fehlermeldungen können helfen, die Ursache eines Problems zu identifizieren und besser zu verstehen. Oft können Schwierigkeiten durch einen gezielten Blick in die Logdateien aufgedeckt und behoben werden.

:::warning
Die dort gefundenen Informationen helfen nicht weiter oder du verstehst sie nicht? Keine Sorge! In diesem Fall sind wir auch täglich im Support erreichbar. Erstelle einfach ein **[Ticket](https://zap-hosting.com/en/customer/support/)** und schildere uns dein Problem. Wir schauen es uns so schnell wie möglich an und helfen dir entsprechend bei der Problemlösung! :)
:::


### Ereignisprotokoll

Das **Ereignisprotokoll** bietet dir eine umfassende Übersicht über alle Aktivitäten im Zusammenhang mit der Serververwaltung. Hier kannst du jederzeit nachvollziehen, wann ein Server gestartet, gestoppt oder abgestürzt ist sowie wann Updates, Backups oder Neuinstallationen durchgeführt wurden.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)



### Serviceunterbrechungen

Dein Server war vorübergehend offline und du kannst dir nicht erklären warum? Ein Blick ins Ereignisprotokoll und die Logdateien hat auch keine Informationen geliefert? Es könnte sein, dass die Ursache des Problems nicht direkt bei deinem Server liegt, sondern beim Hostsystem, auf dem dein Server betrieben wird.

Wenn unser Überwachungssystem eine allgemeine Unterbrechung erkennt, werden unsere Techniker automatisch benachrichtigt und kümmern sich so schnell wie möglich um das Problem.

In diesem Bereich findest du eine Übersicht über die Unterbrechungshistorie des Hostsystems, auf dem dein Gameserver-Service läuft. Weitere Informationen und die aktuelle Version unseres Service-Status findest du auf unserer neuen [Statusseite](https://status.zap-hosting.com/).












## Einstellungen

Im Bereich **Einstellungen** findest du alle notwendigen Seiten zur Konfiguration deines Servers. Die verfügbaren Optionen zur Konfiguration deines Servers sind im Folgenden detailliert aufgelistet.



### Einstellungen

Unter den Einstellungen findest du eine Übersicht der gängigsten Einstellungsmöglichkeiten für deinen Server. Diese beinhalten auch eine kurze Erklärung. Die Nutzung der Einstellungsseite wird besonders für Einsteiger in die Serververwaltung empfohlen.

Wenn du sicherer bist und präzisere Änderungen vornehmen möchtest, empfehlen wir stattdessen die Verwendung des Config Editors. Mehr Informationen dazu findest du in der Kategorie **Configs**.



### Configs

Der Config-Datei-Editor ermöglicht es dir, die Konfigurationsdateien direkt über die Webseite auf klassische Weise, ohne vereinfachte Ansicht, zu bearbeiten. Diese Option erlaubt es dir, die Einstellungen deines Servers individuell anzupassen und nach deinen persönlichen Vorlieben zu konfigurieren.

Durch die Nutzung des Editors erhältst du direkten Zugriff auf alle verfügbaren Optionen und kannst diese präzise anpassen. Dies ist besonders nützlich für fortgeschrittene Nutzer, die volle Kontrolle über ihre Servereinstellungen haben möchten und genau wissen, welche Änderungen sie vornehmen wollen.

:::warning
Ist dir aufgefallen, dass einige deiner Änderungen teilweise überschrieben werden? Bitte beachte, dass bestimmte Optionswerte von der Einstellungsseite übernommen werden. Wenn du diese Änderungen direkt in der Config vornehmen möchtest, musst du die entsprechenden Optionen auf der Einstellungsseite zuerst deaktivieren.
:::


### Spiele

Unter **Spiele** hast du jederzeit die Möglichkeit, die Spielvariante deines bestehenden Spiels zu ändern oder generell ein anderes Spiel zu installieren. Spiele mit dem gleichen Slot-Preis können direkt unter **Verfügbare Spiele** ausgewählt werden. Für alle anderen Spiele ist zunächst eine Anpassung des Slot-Preises erforderlich. Mehr Informationen dazu findest du im Game Change Guide.

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)



### Versionen

Unter **Versionen** hast du die Möglichkeit, die aktuelle Version deines Gameservers einzusehen und zu verwalten. Hier kannst du jederzeit auf die neueste Version updaten oder automatische Updates aktivieren, um sicherzustellen, dass dein Server stets auf dem neuesten Stand ist.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Außerdem kannst du die E-Mail-Benachrichtigungsfunktion für automatische Updates aktivieren, um über Updates informiert zu bleiben und sicherzustellen, dass du immer auf dem neuesten Stand bist.



### Geplante Aufgaben

Erstelle geplante Aufgaben, die automatisch zu definierten Zeiten ausgeführt werden, um verschiedene Prozesse auf deinem Server zu automatisieren. Du kannst einstellen, ob eine Aufgabe einmalig oder wiederholt ausgeführt werden soll. Unterstützte Aufgabentypen sind unter anderem das Starten, Stoppen oder Neustarten von Services, Neustart des Servers bei Online-Status, Erstellen von Backups oder Ausführen benutzerdefinierter Befehle. 

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Neustartplaner

Möchtest du Serverneustarts zu bestimmten Zeiten planen? Der Neustartplaner ermöglicht es dir, geplante automatische Neustarts deines Gameservers einzurichten. Mit dieser Funktion kannst du Neustarts zu bestimmten Zeiten oder in regelmäßigen Abständen festlegen.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)



## Werkzeuge

Im Bereich **Werkzeuge** deines Navigationspanels findest du eine Reihe von Unterpunkten, die dir bei der Verwaltung deines Servers helfen. Dazu gehören **FTP-Browser**, **Datenbanken** und **Backups**. Im Folgenden erhältst du eine detaillierte Einführung in diese verschiedenen Bereiche.



### FTP-Browser

Mit dem **FTP-Browser** erhältst du alle notwendigen Informationen, um eine Verbindung zum FTP-Zugang herzustellen. Der FTP-Zugang ermöglicht dir den direkten Zugriff auf die Dateien deines Gameservers. Für eine optimale Nutzung empfehlen wir die Verwendung eines externen FTP-Programms wie **Filezilla** oder **WinSCP**. Wenn du mit der Nutzung von FTP nicht vertraut bist, empfehlen wir einen Blick in unseren FTP-Zugang-Guide, der dir weiterhelfen kann.

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:**  FileZilla ist wohl der einfachste und bekannteste FTP-Client. Einfach installieren, starten und in der oberen Leiste deine Zugangsdaten eingeben, die du auf dieser Seite etwas weiter oben findest. Nach einem schnellen Klick auf „Verbinden“ bist du direkt am Server angemeldet und kannst die Dateien verwalten.

**WinSCP:**  WinSCP ist eigentlich für SCP und SFTP (die verschlüsselten Varianten des Dateiübertragungsprotokolls FTP) gedacht, kann aber genauso gut mit dem normalen FTP umgehen. Das Programm ist etwas umfangreicher als FileZilla und eignet sich eher für fortgeschrittene Nutzer.



### Datenbanken

Neben unseren Gameserver-Produkten bieten wir auch 10 inklusive Datenbanken an. Diese Datenbanken werden beispielsweise benötigt, wenn Daten in einer Datenbank gespeichert werden müssen. Unter **Datenbanken** kannst du eine Datenbank erstellen und die Zugangsdaten einsehen. Außerdem hast du die Möglichkeit, die Backup-Option zu aktivieren und bestehende Datenbank-Backups zu importieren.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)



### Backups

Unter **Backups** hast du die Möglichkeit, sowohl manuelle als auch automatische Backups für deinen Server und die zugehörige Datenbank zu erstellen. Dies erleichtert die Wiederherstellung deiner Daten im Falle von Problemen oder Datenverlust.

In den Einstellungen kannst du festlegen, ob Backups automatisch erstellt werden sollen und ob dies täglich oder wöchentlich geschehen soll. Zusätzlich kannst du entscheiden, ob bei Bedarf die ältesten Backups gelöscht werden sollen, beispielsweise wenn der verfügbare Speicherplatz knapp wird.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Für unsere Gameserver-Produkte stellen wir standardmäßig 10 GB Speicherplatz auf dem Speicher-Server für Backups zur Verfügung. Wenn du mehr Speicherplatz benötigst, kann dieser gegen Gebühr erweitert werden. So stellst du sicher, dass du immer genügend Platz für deine Backups hast und bei Bedarf auch auf ältere Backups zugreifen kannst.

## Weitere Links
Im Bereich **Weitere Links** findest du zusätzliche Links, die für dein Produkt relevant sind. 

### Häufig gestellte Fragen
Der Bereich **Häufig gestellte Fragen** bietet eine Übersicht der am häufigsten gestellten Fragen unserer Kunden. Hier findest du hilfreiche Antworten und detaillierte Informationen zu verschiedenen Themen, die dir schnell und effizient weiterhelfen.

### ZAP-Hosting Dokumentation
Wir bieten umfangreiche Dokumentationen zu unseren Produkten an, die als Wissensdatenbank für die häufigsten Fragen und Anliegen dienen. Dort findest du verschiedene Anleitungen und Hilfen zu unterschiedlichen Themen, die dich bei der Nutzung und Verwaltung deines Produkts unterstützen.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Neuigkeiten
Die **Neuigkeiten** bieten dir eine umfassende Übersicht aller Ankündigungen und News rund um deinen Service. Hier findest du wichtige Informationen zu verschiedenen Aspekten wie:

- Änderungen des Services, zum Beispiel durch Updates oder neue Features
- Ankündigungen zu möglichen Wartungen oder technischen Problemen
- Sonderangebote und Aktionen, die dir exklusive Vorteile oder Rabatte bieten
- Weitere relevante Informationen, die für die Nutzung deines Services wichtig sein können

Indem du die **Neuigkeiten** regelmäßig prüfst, bleibst du informiert und kannst deinen Service entsprechend anpassen, um das Beste aus deinem Server herauszuholen.

<InlineVoucher />