---
id: minecraft-server-optimize
title: "Minecraft: Server-Leistungsoptimierung"
description: Informationen zur Optimierung Ihres Minecraft-Servers von ZAP-Hosting für bessere Leistung - ZAP-Hosting.com Dokumentation
sidebar_label: Minecraft-Server-Optimierung
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Was passiert genau bei der Optimierung?

Optimierung ist ein wichtiger Punkt für Minecraft-Server, damit diese flüssig laufen können, und man sollte auf einem öffentlichen Server auf jeden Fall genügend Zeit dafür einplanen. Nur mit viel Zeit und Tests ist es möglich, das beste Ergebnis zu erzielen. Diese Dokumentation ist daher nicht unbedingt exakt zu befolgen, sondern eher als Hilfe gedacht, um in die richtige Richtung zu gehen.

In den meisten Fällen ändert die Optimierung eine Vielzahl von Einstellungen auf den Servern, was teilweise das Verhalten des Servers selbst deutlich verändert. Unter anderem werden einige Einstellungen heruntergeschraubt, was den Server entlastet und somit mehr Leistung bereitstellen kann. Damit das allgemeine Spielerlebnis jedoch nicht zu stark beeinflusst wird, sollte man hier immer das richtige Mittelmaß finden.

## Vanilla

Die Möglichkeiten zur Optimierung eines Vanilla-Servers sind leider sehr begrenzt, da nur wenige Einstellungsmöglichkeiten zur Verfügung stehen. Wir versuchen, dem Vanilla-Server durch folgende Maßnahmen etwas mehr Leistung zu geben:

### Sichtweite

Eine Maßnahme, die sehr oft ergriffen wird, ist die Reduzierung der Sichtweite. Die Standard-Sichtweite beträgt 10 Chunks, aber viele Spieler spielen mit deutlich weniger, z.B. 6-8. Manche Spieler übertreiben es mit den Chunks und setzen diese manchmal auf 32 Chunks, was bedeutet, dass der Server dann all diese Chunks laden und verarbeiten muss, was viel Leistung kostet.

Bei einem Vanilla-Server kann die Sichtweite in der "server.properties"-Konfiguration angepasst werden, hierfür muss der Wert "view-distance" angepasst werden. Um das Spielerlebnis nicht zu stark einzuschränken, wird empfohlen, diesen Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.
Wir haben hierzu bereits einen Eintrag in unserer Dokumentation, der hier zu finden ist.

### Datenkompression

Auf einem Server findet ein permanenter Austausch zwischen dem Server und den verbundenen Spielern statt. Die Bewegungen der Spieler selbst werden an den Server übertragen und der Server sendet diese wiederum an alle anderen Spieler. Aber auch Spieleraktionen oder Ereignisse in der Welt, wie z.B. Explosionen, sind Teil der Daten, die immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austauschs etwas eleganter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, was bedeutet, dass der Server nur noch 50% des Aufwands betreiben muss, um dieselben Daten mit den Spielern auszutauschen wie zuvor. Dazu muss der Wert "network-compression-threshold" ebenfalls in der "server.properties"-Konfiguration angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hierzu haben wir bereits einen Eintrag in unserer Dokumentation, der hier zu finden ist.

## Forge

Ähnlich wie bei Vanilla sind die Möglichkeiten, die direkt auf dem Server selbst vorgenommen werden können, leider etwas begrenzt, da nur sehr kleine Konfigurationsdateien zur Verfügung stehen. Allerdings ist die Installation zusätzlicher Mods möglich, wodurch der Server auch etwas entlastet werden kann.

### Vorladen der Chunks

Eine Möglichkeit, den Server zu entlasten, ist das Vorladen von Chunks. Der Server muss dann während des späteren Betriebs mit Spielern nur noch die gespeicherten Chunk-Daten laden und nicht die gesamten Chunks erstellen und generieren. Dieser Prozess kann am besten über Nacht laufen, den man abends vorher startet.

Dafür muss ein zusätzlicher Mod installiert werden. Ein sehr geeigneter Mod kann [hier](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator) heruntergeladen werden.
Der Mod kann dann wie in unserer Anleitung beschrieben normal auf dem Server installiert werden.

Bevor der Server neu gestartet wird, sollte sichergestellt werden, dass "max-tick-time" in der "server.properties" auf "-1" gesetzt ist. Andernfalls könnte der Server abstürzen. Es ist außerdem ratsam, dass mindestens 8-10 GB RAM verfügbar sind, da dieser Prozess leider viel RAM benötigt. Zu diesem Zweck kann der RAM über Nacht kurzzeitig aufgestockt und nach Abschluss des Prozesses wieder reduziert werden.

:::info
Beachten Sie, dass der oben genannte Mod möglicherweise nicht mit der von Ihnen verwendeten Forge-Version kompatibel ist und der Prozess bei Verwendung eines anderen Mods von der hier beschriebenen Vorgehensweise abweichen kann.
:::

Sobald der Server mit dem Mod gestartet ist, muss die Konsole geöffnet werden. Wir empfehlen, eine Grenze für die Welt mit einem Radius von 16.000 Blöcken zu erstellen. Dazu müssen folgende Befehle nacheinander ausgeführt werden:

- worldborder center 0 0
- worldborder set 16000

:::info
Gegebenenfalls sollten die Koordinaten mit dem center-Befehl auf das eigene Zentrum der Welt angepasst werden, um die Welt nicht "abzuschneiden" (die möglicherweise bereits gebaut wurde).
:::

Sobald die Grenze gesetzt ist, kann das eigentliche Vorladen gestartet werden. Dazu muss folgender Befehl ausgeführt werden:

- pregen gen startWorldBorder

Nun werden alle Chunks innerhalb der Grenze nacheinander vorgeladen. Dieser Prozess kann je nach Anzahl der installierten Mods bis zu 8 Stunden dauern. Der Fortschritt dieses Prozesses wird regelmäßig über Info-Meldungen in der Konsole ausgegeben. Sobald der Prozess abgeschlossen ist, wird dies ebenfalls in der Konsole angezeigt!

:::info
Der Mod kann auch nach Abschluss dieses Prozesses weiterhin auf dem Server installiert bleiben. Er optimiert weiterhin Chunks während des Betriebs und funktioniert auch, wenn kein Spieler auf dem Server ist.
:::

### Sichtweite

Eine Maßnahme, die sehr oft ergriffen wird, ist die Reduzierung der Sichtweite. Die Standard-Sichtweite beträgt 10 Chunks, aber viele Spieler spielen mit deutlich weniger, z.B. 6-8. Manche Spieler übertreiben es mit den Chunks und setzen diese manchmal auf 32 Chunks, was bedeutet, dass der Server dann all diese Chunks laden und verarbeiten muss, was viel Leistung kostet.

Die Sichtweite eines Forge-Servers kann in der "server.properties"-Konfiguration angepasst werden, hierfür muss der Wert "view-distance" angepasst werden. Um das Spielerlebnis nicht zu stark einzuschränken, wird empfohlen, diesen Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.
Wir haben hierzu bereits einen Eintrag in unserer Dokumentation, der hier zu finden ist.

### Datenkompression

Auf einem Server findet ein permanenter Austausch zwischen dem Server und den verbundenen Spielern statt. Die Bewegungen der Spieler selbst werden an den Server übertragen und der Server sendet diese wiederum an alle anderen Spieler. Aber auch Spieleraktionen oder Ereignisse in der Welt, wie z.B. Explosionen, sind Teil der Daten, die immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austauschs etwas eleganter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, was bedeutet, dass der Server nur noch 50% des Aufwands betreiben muss, um dieselben Daten mit den Spielern auszutauschen wie zuvor. Dazu muss der Wert "network-compression-threshold" ebenfalls in der "server.properties"-Konfiguration angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hierzu haben wir bereits einen Eintrag in unserer Dokumentation, der hier zu finden ist.

## Bukkit

### Sichtweite

Eine Maßnahme, die sehr oft ergriffen wird, ist die Reduzierung der Sichtweite. Die Standard-Sichtweite beträgt 10 Chunks, aber viele Spieler spielen mit deutlich weniger, z.B. 6-8. Manche Spieler übertreiben es mit den Chunks und setzen diese manchmal auf 32 Chunks, was bedeutet, dass der Server dann all diese Chunks laden und verarbeiten muss, was viel Leistung kostet.

Die Sichtweite eines Forge-Servers kann in der "server.properties"-Konfiguration angepasst werden, hierfür muss der Wert "view-distance" angepasst werden. Um das Spielerlebnis nicht zu stark einzuschränken, wird empfohlen, diesen Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.
Wir haben hierzu bereits einen Eintrag in unserer Dokumentation, der hier zu finden ist.

### Datenkompression

Auf einem Server findet ein permanenter Austausch zwischen dem Server und den verbundenen Spielern statt. Die Bewegungen der Spieler selbst werden an den Server übertragen und der Server sendet diese wiederum an alle anderen Spieler. Aber auch Spieleraktionen oder Ereignisse in der Welt, wie z.B. Explosionen, sind Teil der Daten, die immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austauschs etwas eleganter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, was bedeutet, dass der Server nur noch 50% des Aufwands betreiben muss, um dieselben Daten mit den Spielern auszutauschen wie zuvor. Dazu muss der Wert "network-compression-threshold" ebenfalls in der "server.properties"-Konfiguration angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hierzu haben wir bereits einen Eintrag in unserer Dokumentation, der hier zu finden ist.

### Spawn-Limits

In diesem Schritt werden die allgemeinen Spawnraten von Mobs auf dem Server etwas reduziert. Es gibt fast keinen spürbaren Unterschied zu den normalen Werten. Dennoch kann es an manchen Stellen, z.B. bei Mob-Farmen, vorkommen, dass die Mob-Farm nicht wie geplant funktioniert.

Um die Einstellungen dafür anzupassen, muss die Konfiguration "bukkit.yml" bearbeitet werden. Die folgenden Werte müssen dann an der Stelle "spawn-limits" angepasst werden:
- monsters: 50 #Standard: 70
- animals: 10 #Standard: 15
- water-animals: 3 #Standard: 5
- ambient: 4 #Standard: 15

:::info
Sie können die Werte natürlich gerne selbst anpassen, wenn Sie möchten, ansonsten sind die oben genannten Werte ein sehr guter Durchschnitt.
:::

Um das Spawnen weiter zu verbessern, sollte auch der Wert "monster-spawns" im Eintrag "ticks-per" in der "bukkit.yml"-Konfiguration geändert werden:
- monster-spawns: 2 #Standard: 1

Wenn es z.B. ein generelles Problem mit Monstern gibt (wie z.B. im Timing-Bericht feststellbar), kann der Wert bis auf 5 gesetzt werden. Das Verhalten des Servers sollte dann bei jedem Wert beobachtet werden, um den besten Wert für den eigenen Server zu finden.

### Chunk-Verarbeitung

Minecraft arbeitet mit sogenannten Chunks. Ein Chunk besteht immer aus 16x16 Blöcken, die dann aneinandergereiht werden und visuell die Welt für den Client darstellen. Der Server arbeitet daher nur mit Chunks und lädt dann die benötigten Chunks in den RAM. Je mehr Chunks geladen und dauerhaft vom Server verarbeitet werden, desto mehr Leistung muss der Server dafür bereitstellen, was den Server an manchen Stellen in die Knie zwingen kann.

Server mit den Standardeinstellungen entladen geladene Chunks nie, was bedeutet, dass der RAM an manchen Stellen sehr stark genutzt wird und eine enorme Menge davon benötigt wird. Natürlich wird die Leistung des Servers hier leider sehr stark reduziert, da immer mehr verarbeitet werden muss.

Damit der Server nur die Chunks lädt, die aktuell benötigt werden, müssen folgende Optionen in der "bukkit.yml"-Konfiguration unter "chunk-gc" angepasst werden:
- period-in-ticks: 300 #Standard: 600
- load-threshold: 300 #Standard: 0

Die Option "period-in-ticks" bestimmt, in welchen Intervallen in Sekunden die Chunks entladen werden sollen. Falls gewünscht, kann dieser Wert auch weiter reduziert werden, aber man sollte beachten, dass dann ein unerwünschter Effekt auftreten kann: eine Schleife.

Im Falle einer Schleife würde der Chunk entladen werden, woraufhin der Chunk kurz darauf wieder benötigt wird, was bedeutet, dass der Server dann erneut Leistung und Zeit investieren muss, um diesen Chunk wieder zu laden. Dies würde sich dann immer wiederholen, was den Server stärker belastet, als wenn die Chunks z.B. eine Minute länger geladen bleiben.

## Spigot

### Sichtweite

Eine Maßnahme, die sehr oft ergriffen wird, ist die Reduzierung der Sichtweite. Die Standard-Sichtweite beträgt 10 Chunks, aber viele Spieler spielen mit deutlich weniger, z.B. 6-8. Manche Spieler übertreiben es mit den Chunks und setzen diese manchmal auf 32 Chunks, was bedeutet, dass der Server dann all diese Chunks laden und verarbeiten muss, was viel Leistung kostet.

Bei einem Spigot-Server kann die Sichtweite in der "spigot.yml"-Konfiguration angepasst werden, hierfür muss der Wert "view-distance" angepasst werden. Um das Spielerlebnis nicht zu stark einzuschränken, wird empfohlen, diesen Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.

:::info
Je nach Vorliebe kann der Wert auch auf 4 gesetzt werden, was z.B. sehr gut gegen Laggs hilft, wenn man Farmwelt-Server betreibt, die auf Version 1.13+ laufen.
:::

### Datenkompression

Auf einem Server findet ein permanenter Austausch zwischen dem Server und den verbundenen Spielern statt. Die Bewegungen der Spieler selbst werden an den Server übertragen und der Server sendet diese wiederum an alle anderen Spieler. Aber auch Spieleraktionen oder Ereignisse in der Welt, wie z.B. Explosionen, sind Teil der Daten, die immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austauschs etwas eleganter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, was bedeutet, dass der Server nur noch 50% des Aufwands betreiben muss, um dieselben Daten mit den Spielern auszutauschen wie zuvor. Dazu muss der Wert "network-compression-threshold" ebenfalls in der "server.properties"-Konfiguration angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hierzu haben wir bereits einen Eintrag in unserer Dokumentation, der hier zu finden ist.

### Spawn-Limits

In diesem Schritt werden die allgemeinen Spawnraten von Mobs auf dem Server etwas reduziert. Es gibt fast keinen spürbaren Unterschied zu den normalen Werten. Dennoch kann es an manchen Stellen, z.B. bei Mob-Farmen, vorkommen, dass die Mob-Farm nicht wie geplant funktioniert.

Um die Einstellungen dafür anzupassen, muss die Konfiguration "bukkit.yml" bearbeitet werden. Die folgenden Werte müssen dann an der Stelle "spawn-limits" angepasst werden:
- monsters: 50 #Standard: 70
- animals: 10 #Standard: 15
- water-animals: 3 #Standard: 5
- ambient: 4 #Standard: 15

:::info
Sie können die Werte natürlich gerne selbst anpassen, wenn Sie möchten, ansonsten sind die oben genannten Werte ein sehr guter Durchschnitt.
:::

Um das Spawnen weiter zu verbessern, sollte auch der Wert "monster-spawns" im Eintrag "ticks-per" in der "bukkit.yml"-Konfiguration geändert werden:
- monster-spawns: 2 #Standard: 1

Wenn es z.B. ein generelles Problem mit Monstern gibt (wie z.B. im Timing-Bericht feststellbar), kann der Wert bis auf 5 gesetzt werden. Das Verhalten des Servers sollte dann bei jedem Wert beobachtet werden, um den besten Wert für den eigenen Server zu finden.

### Chunk-Verarbeitung

Minecraft arbeitet mit sogenannten Chunks. Ein Chunk besteht immer aus 16x16 Blöcken, die dann aneinandergereiht werden und visuell die Welt für den Client darstellen. Der Server arbeitet daher nur mit Chunks und lädt dann die benötigten Chunks in den RAM. Je mehr Chunks geladen und dauerhaft vom Server verarbeitet werden, desto mehr Leistung muss der Server dafür bereitstellen, was den Server an manchen Stellen in die Knie zwingen kann.

Server mit den Standardeinstellungen entladen geladene Chunks nie, was bedeutet, dass der RAM an manchen Stellen sehr stark genutzt wird und eine enorme Menge davon benötigt wird. Natürlich wird die Leistung des Servers hier leider sehr stark reduziert, da immer mehr verarbeitet werden muss.

Damit der Server nur die Chunks lädt, die aktuell benötigt werden, müssen folgende Optionen in der "bukkit.yml"-Konfiguration unter "chunk-gc" angepasst werden:
- period-in-ticks: 300 #Standard: 600
- load-threshold: 300 #Standard: 0

Die Option "period-in-ticks" bestimmt, in welchen Intervallen in Sekunden die Chunks entladen werden sollen. Falls gewünscht, kann dieser Wert auch weiter reduziert werden, aber man sollte beachten, dass dann ein unerwünschter Effekt auftreten kann: eine Schleife.

Im Falle einer Schleife würde der Chunk entladen werden, woraufhin der Chunk kurz darauf wieder benötigt wird, was bedeutet, dass der Server dann erneut Leistung und Zeit investieren muss, um diesen Chunk wieder zu laden. Dies würde sich dann immer wiederholen, was den Server stärker belastet, als wenn die Chunks z.B. eine Minute länger geladen bleiben.

### Spawn-Reichweite

Mobs können immer in bestimmten Abständen von Spielern spawnen. Hier reduzieren wir diese Rate etwas, damit es keine Probleme mit dem Mob-Spawning gibt. Diese Einstellung ist sehr wichtig, da einige der Spawn-Einstellungen bereits angepasst wurden, wie oben erklärt.

Wir ändern folgende Einstellungen in der "spigot.yml"-Konfiguration unter "world-settings":
- mob-spawn-range: 3 #Standard: 4

### Entity-Reichweiten

An dieser Stelle legen wir fest, wann Entitäten – also Tiere und Monster – aktiviert werden. Das bedeutet, dass sich die Tiere z.B. bewegen können oder Monster Spieler erkennen können. Grundsätzlich ist dies für alle Mobs aktiviert, aber in einer Art Standby-Modus. Im Standby-Modus können sich die Mobs weiterhin bewegen und Spieler erkennen, aber z.B. bewegen sich die Mobs nur sehr langsam, was bedeutet, dass der Server nicht viel Leistung bereitstellen muss.

Auch hier müssen die Änderungen in der "spigot.yml"-Konfiguration unter dem Eintrag "entity-activation-range" vorgenommen werden. Wir empfehlen folgende Werte:
- animals: 6 #Standard: 32
- monsters: 16 #Standard: 32
- misc: 2 #Standard: 16
- water: 6 #Standard: 6
- tick-inactive-villagers: true #Standard: true

### Trichter-Optimierungen

Trichter sind ein sehr wichtiger Bestandteil des Spiels in Minecraft. Aber für Server sind diese echter Gift! Für jeden gesetzten Trichter muss der Server 20 Mal pro Sekunde prüfen, ob ein Item zum Aufnehmen bereitsteht. Das Bewegen der Items von Trichter zu Trichter oder in eine Kiste kostet ebenfalls wertvolle Arbeit!

Um das Ganze etwas zu verbessern, erhöhen wir die Zeitintervalle, in denen der Server solche Aktionen ausführen soll. Mit den hier verwendeten Werten wird eine solche Aktion alle 3 Sekunden ausgeführt und geprüft. Die Transfer-Raten ändern sich hier nicht. Es kann jedoch passieren, dass Redstone-Uhren, die mit Trichtern erstellt wurden, nicht mehr korrekt funktionieren.

Zur Anpassung der Einstellungen müssen folgende Werte in der "spigot.yml"-Konfiguration angepasst werden:
- hopper-transfer: 24 #Standard: 8
- hopper-check: 24 #Standard: 8
- hopper-amount: 3 #Standard: 1

### Kollisionen

Seit Minecraft Version 1.9 gibt es Kollisionen, wodurch z.B. kein Spieler mehr in einem anderen Spieler stehen kann. Hier legen wir fest, wie oft Entitäten generell kollidieren können. Besonders in Mob-Farmen, wo viele Mobs auf engem Raum zusammenkommen, kann dies den Server manchmal stark belasten.

Zur Anpassung der Einstellung muss folgender Wert in "spigot.yml" angepasst werden:
- max-entity-collisions: 1 #Standard: 8

Da Kollisionen keine wirkliche Auswirkung auf Mobs haben, kann die Einstellung hier heruntergesetzt werden. Dieser Wert gilt nicht für Spieler, sondern nur für Mobs!

### Merge-Radius

Der Merge-Radius bestimmt, welche Items und XP zusammengeführt werden, was bedeutet, dass der Server weniger Entitäten verarbeiten muss. Besonders bei Servern, auf denen viele Items auf dem Boden liegen, kann dies für Spieler einen positiven Effekt haben, wenn dieser Radius erhöht wird. Auch hier gilt die Regel, dass man einen guten Mittelwert finden sollte, sonst entsteht wieder eine Art Lag-Effekt, da der Server einen größeren Bereich prüfen muss, was dann zu viel Leistung erfordert!

Zur Anpassung der Einstellung müssen folgende Werte unter dem Eintrag "merge-radius" in der "spigot.yml" angepasst werden:
- item: 4.0 #Standard 2.5
- exp: 6.0 #Standard: 3.0

:::info
Die Werte sollten hier nicht höher als 8 gesetzt werden, da sonst der oben erwähnte Lag-Effekt entstehen kann!
:::

## Paper Spigot

### Sichtweite

Eine Maßnahme, die sehr oft ergriffen wird, ist die Reduzierung der Sichtweite. Die Standard-Sichtweite beträgt 10 Chunks, aber viele Spieler spielen mit deutlich weniger, z.B. 6-8. Manche Spieler übertreiben es mit den Chunks und setzen diese manchmal auf 32 Chunks, was bedeutet, dass der Server dann all diese Chunks laden und verarbeiten muss, was viel Leistung kostet.

Bei einem (Paper) Spigot-Server kann die Sichtweite in der "spigot.yml"-Konfiguration angepasst werden, hierfür muss der Wert "view-distance" angepasst werden. Um das Spielerlebnis nicht zu stark einzuschränken, wird empfohlen, diesen Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.

:::info
Je nach Vorliebe kann der Wert auch auf 4 gesetzt werden, was z.B. sehr gut gegen Laggs hilft, wenn man Farmwelt-Server betreibt, die auf Version 1.13+ laufen.
:::

### Datenkompression

Auf einem Server findet ein permanenter Austausch zwischen dem Server und den verbundenen Spielern statt. Die Bewegungen der Spieler selbst werden an den Server übertragen und der Server sendet diese wiederum an alle anderen Spieler. Aber auch Spieleraktionen oder Ereignisse in der Welt, wie z.B. Explosionen, sind Teil der Daten, die immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austauschs etwas eleganter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, was bedeutet, dass der Server nur noch 50% des Aufwands betreiben muss, um dieselben Daten mit den Spielern auszutauschen wie zuvor. Dazu muss der Wert "network-compression-threshold" ebenfalls in der "server.properties"-Konfiguration angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hierzu haben wir bereits einen Eintrag in unserer Dokumentation, der hier zu finden ist.

### Spawn-Limits

In diesem Schritt werden die allgemeinen Spawnraten von Mobs auf dem Server etwas reduziert. Es gibt fast keinen spürbaren Unterschied zu den normalen Werten. Dennoch kann es an manchen Stellen, z.B. bei Mob-Farmen, vorkommen, dass die Mob-Farm nicht wie geplant funktioniert.

Um die Einstellungen dafür anzupassen, muss die Konfiguration "bukkit.yml" bearbeitet werden. Die folgenden Werte müssen dann an der Stelle "spawn-limits" angepasst werden:
- monsters: 50 #Standard: 70
- animals: 10 #Standard: 15
- water-animals: 3 #Standard: 5
- ambient: 4 #Standard: 15

:::info
Sie können die Werte natürlich gerne selbst anpassen, wenn Sie möchten, ansonsten sind die oben genannten Werte ein sehr guter Durchschnitt.
:::

Um das Spawnen weiter zu verbessern, sollte auch der Wert "monster-spawns" im Eintrag "ticks-per" in der "bukkit.yml"-Konfiguration geändert werden:
- monster-spawns: 2 #Standard: 1

Wenn es z.B. ein generelles Problem mit Monstern gibt (wie z.B. im Timing-Bericht feststellbar), kann der Wert bis auf 5 gesetzt werden. Das Verhalten des Servers sollte dann bei jedem Wert beobachtet werden, um den besten Wert für den eigenen Server zu finden.

### Chunk-Verarbeitung

Minecraft arbeitet mit sogenannten Chunks. Ein Chunk besteht immer aus 16x16 Blöcken, die dann aneinandergereiht werden und visuell die Welt für den Client darstellen. Der Server arbeitet daher nur mit Chunks und lädt dann die benötigten Chunks in den RAM. Je mehr Chunks geladen und dauerhaft vom Server verarbeitet werden, desto mehr Leistung muss der Server dafür bereitstellen, was den Server an manchen Stellen in die Knie zwingen kann.

Server mit den Standardeinstellungen entladen geladene Chunks nie, was bedeutet, dass der RAM an manchen Stellen sehr stark genutzt wird und eine enorme Menge davon benötigt wird. Natürlich wird die Leistung des Servers hier leider sehr stark reduziert, da immer mehr verarbeitet werden muss.

Damit der Server nur die Chunks lädt, die aktuell benötigt werden, müssen folgende Optionen in der "bukkit.yml"-Konfiguration unter "chunk-gc" angepasst werden:
- period-in-ticks: 300 #Standard: 600
- load-threshold: 300 #Standard: 0

Die Option "period-in-ticks" bestimmt, in welchen Intervallen in Sekunden die Chunks entladen werden sollen. Falls gewünscht, kann dieser Wert auch weiter reduziert werden, aber man sollte beachten, dass dann ein unerwünschter Effekt auftreten kann: eine Schleife.

Im Falle einer Schleife würde der Chunk entladen werden, woraufhin der Chunk kurz darauf wieder benötigt wird, was bedeutet, dass der Server dann erneut Leistung und Zeit investieren muss, um diesen Chunk wieder zu laden. Dies würde sich dann immer wiederholen, was den Server stärker belastet, als wenn die Chunks z.B. eine Minute länger geladen bleiben.

### Spawn-Reichweite

Mobs können immer in bestimmten Abständen von Spielern spawnen. Hier reduzieren wir diese Rate etwas, damit es keine Probleme mit dem Mob-Spawning gibt. Diese Einstellung ist sehr wichtig, da einige der Spawn-Einstellungen bereits angepasst wurden, wie oben erklärt.

Wir ändern folgende Einstellungen in der "spigot.yml"-Konfiguration unter "world-settings":
- mob-spawn-range: 3 #Standard: 4

### Mob-Spawner

Besonders auf City-Build-Servern werden Spawner sehr oft und manchmal in großer Anzahl verwendet. Spawner erzeugen dann immer mehr Mobs auf dem Server, was zu vielen Problemen führen kann.

Diese Option passt das Spawn-Verhalten des Spawners etwas an, sodass der Server den Spawner in kurzen Abständen aktiviert. Dazu muss folgender Wert in "paper.yml" angepasst werden:
- mob-spawner-tick-rate: 3 #Standard: 1

:::info
Der oben verwendete Wert ändert das Verhalten nicht zu stark und beeinflusst das Spielverhalten kaum.
:::

### Entity-Reichweiten

An dieser Stelle legen wir fest, wann Entitäten – also Tiere und Monster – aktiviert werden. Das bedeutet, dass sich die Tiere z.B. bewegen können oder Monster Spieler erkennen können. Grundsätzlich ist dies für alle Mobs aktiviert, aber in einer Art Standby-Modus. Im Standby-Modus können sich die Mobs weiterhin bewegen und Spieler erkennen, aber z.B. bewegen sich die Mobs nur sehr langsam, was bedeutet, dass der Server nicht viel Leistung bereitstellen muss.

Auch hier müssen die Änderungen in der "spigot.yml"-Konfiguration unter dem Eintrag "entity-activation-range" vorgenommen werden. Wir empfehlen folgende Werte:
- animals: 6 #Standard: 32
- monsters: 16 #Standard: 32
- misc: 2 #Standard: 16
- water: 6 #Standard: 6
- tick-inactive-villagers: true #Standard: true

### Trichter-Optimierung

Trichter sind ein sehr wichtiger Bestandteil des Spiels in Minecraft. Aber für Server sind diese echter Gift! Für jeden gesetzten Trichter muss der Server 20 Mal pro Sekunde prüfen, ob ein Item zum Aufnehmen bereitsteht. Das Bewegen der Items von Trichter zu Trichter oder in eine Kiste kostet ebenfalls wertvolle Arbeit!

Um das Ganze etwas zu verbessern, erhöhen wir die Zeitintervalle, in denen der Server solche Aktionen ausführen soll. Mit den hier verwendeten Werten wird eine solche Aktion alle 3 Sekunden ausgeführt und geprüft. Die Transfer-Raten ändern sich hier nicht. Es kann jedoch passieren, dass Redstone-Uhren, die mit Trichtern erstellt wurden, nicht mehr korrekt funktionieren.

Zur Anpassung der Einstellungen müssen folgende Werte in der "spigot.yml"-Konfiguration angepasst werden:
- hopper-transfer: 24 #Standard: 8
- hopper-check: 24 #Standard: 8
- hopper-amount: 3 #Standard: 1

:::info
Stellen Sie sicher, dass der Wert "use-hopper-check" in der "paper.yml"-Konfiguration auf "true" gesetzt ist!
:::

### Kollisionen

Seit Minecraft Version 1.9 gibt es Kollisionen, wodurch z.B. kein Spieler mehr in einem anderen Spieler stehen kann. Hier legen wir fest, wie oft Entitäten generell kollidieren können. Besonders in Mob-Farmen, wo viele Mobs auf engem Raum zusammenkommen, kann dies den Server manchmal stark belasten.

Zur Anpassung der Einstellung muss folgender Wert in "spigot.yml" angepasst werden:
- max-entity-collisions: 1 #Standard: 8

Da Kollisionen keine wirkliche Auswirkung auf Mobs haben, kann die Einstellung hier heruntergesetzt werden. Dieser Wert gilt nicht für Spieler, sondern nur für Mobs!

### Merge-Radius

Der Merge-Radius bestimmt, welche Items und XP zusammengeführt werden, was bedeutet, dass der Server weniger Entitäten verarbeiten muss. Besonders bei Servern, auf denen viele Items auf dem Boden liegen, kann dies für Spieler einen positiven Effekt haben, wenn dieser Radius erhöht wird. Auch hier gilt die Regel, dass man einen guten Mittelwert finden sollte, sonst entsteht wieder eine Art Lag-Effekt, da der Server einen größeren Bereich prüfen muss, was dann zu viel Leistung erfordert!

Zur Anpassung der Einstellung müssen folgende Werte unter dem Eintrag "merge-radius" in der "spigot.yml" angepasst werden:
- item: 4.0 #Standard 2.5
- exp: 6.0 #Standard: 3.0

:::info
Die Werte sollten hier nicht höher als 8 gesetzt werden, da sonst der oben erwähnte Lag-Effekt entstehen kann!
:::

### Explosionen

Bei Paper Spigot wurden viele Teile von Minecraft-Servern neu programmiert, um den Server besser laufen zu lassen. Dies gilt auch für Explosionen! Hier wird die Software explosionsbedingte Prozesse besser handhaben, sodass größere Laggs auf dem Server vermieden werden.

Dazu muss folgender Wert in der "paper.yml"-Konfiguration angepasst werden:
- optimize-explosions: true #Standard: false

### Kisten

Auch bei Kisten gibt es eine kleine Optimierungsmöglichkeit! Wenn eine Katze auf der Kiste sitzt, kann diese nicht geöffnet werden. Damit der Server dies prüfen kann, muss er alle Mobs in einem bestimmten Radius durchgehen und prüfen, ob einer dieser Mobs auf der Kiste sitzt, was leider sehr zeitaufwendig ist und jedes Mal passiert, wenn eine Kiste geöffnet wird!

Die Option kann mit folgender Änderung einfach deaktiviert werden:
- disable-chest-cat-detection: true #Standard: false

### Inventare

Das Inventar wird viel genutzt, aber Inventar ist nicht gleich Inventar. Zum Beispiel ist eine Kiste oder Werkbank auch ein Inventar. Mit dieser Änderung kann man dem Server eine kleine Entlastung geben, ohne dass es jemand merkt! Hier wird grundsätzlich nur die Anzahl der Ticks gesetzt, nach denen der Server jedes Inventar aktualisieren soll.

Dazu muss folgender Wert in der "paper.yml"-Konfiguration angepasst werden:
- container-update-tick-rate: 3 #Standard: 1

:::info
Der Wert sollte nicht höher als 5 gesetzt werden, da das Inventar sonst etwas fehlerhaft sein kann! In Spielmodi wie SurvivalGames, in denen alle Spieler auf die Kisten in der Mitte zugreifen und die besten Items bekommen wollen, sollte der Wert nicht geändert und auf "1" belassen werden.
:::

### Licht-Updates

Auch hier bietet Paper Spigot eine alternative Möglichkeit, damit die Licht-Updates in der Welt besser durchgeführt werden. Bei dieser Methode werden die Licht-Updates nicht innerhalb eines Ticks durchgeführt, was je nach Größe des Updates manchmal den Server zum Stillstand bringen kann, sondern außerhalb des Ticks. Das Ganze nennt sich async threads in Minecraft.

Dazu muss folgende Änderung ebenfalls in der "paper.yml"-Konfiguration vorgenommen werden:
- queue-light-updates: true #Standard: false

### Speichern von Chunk-Daten

Sobald Änderungen in einem Chunk vorgenommen wurden, werden diese nicht direkt auf die Festplatte geschrieben, sondern zunächst in den RAM geladen. Dennoch werden alle Änderungen sehr oft gespeichert, was manchmal zu extremen Laggs führen kann, besonders wenn der Server massive Änderungen speichern möchte.

Mit dieser Änderung reduzieren wir die maximale Anzahl an Chunks, die in einem Speicherprozess gespeichert werden können. Durch die Änderung dieser Option wird der RAM an manchen Stellen stärker genutzt, da die Änderungen länger im RAM verbleiben!

Änderungen an folgender Einstellung müssen in der "paper.yml"-Konfiguration vorgenommen werden:
- max-auto-save-chunks-per-tick: 10 #Standard: 24

### Redstone

Redstone wird sehr oft mit teilweise extrem großen Schaltungen verwendet. Auf öffentlichen Servern ist dies manchmal sogar der schwächste Punkt bei fast 90% der Server, da massive Laggs durch Redstone verursacht werden können. Hier verwenden wir eine alternative Verarbeitung von Redstone aus Paper Spigot, die Redstone fast harmlos macht und die gleiche Funktionalität wie in Vanilla hat!

Dazu muss folgende Einstellung in "paper.yml" vorgenommen werden:
- use-faster-eigencraft-redstone: true #Standard: false

:::info
**Achtung! In manchen Situationen kann dies das Verhalten von Redstone stark verändern!**
:::

<InlineVoucher />