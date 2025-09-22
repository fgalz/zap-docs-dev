---
id: minecraft-server-optimize2
title: "Minecraft: Serverleistungsoptimierung2"
description: Informationen zur Optimierung Ihres Minecraft-Servers von ZAP-Hosting für bessere Leistung - ZAP-Hosting.com Dokumentation
sidebar_label: Minecraft-Server-Optimierung
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Was passiert genau während der Optimierung?

Die Optimierung ist ein wichtiger Punkt für Minecraft-Server, damit sie reibungslos laufen, und Sie sollten sich auf einem öffentlichen Server definitiv genug Zeit dafür nehmen. Nur mit viel Zeit und Tests ist es möglich, das beste Ergebnis zu erzielen. Diese Dokumentation ist daher nicht unbedingt genau zu befolgen, sondern soll vielmehr als Hilfe dienen, um in die richtige Richtung zu gehen.

In den meisten Fällen verändert die Optimierung eine große Anzahl von Einstellungen auf den Servern, was in einigen Fällen das Verhalten des Servers selbst erheblich verändert. Unter anderem werden einige Einstellungen heruntergeschraubt, was den Server entlastet und somit mehr Leistung bieten kann. Damit das allgemeine Spielerlebnis jedoch nicht zu sehr beeinflusst wird, sollten Sie hier immer die goldene Mitte finden.

## Vanilla

Die Möglichkeiten zur Optimierung eines Vanilla-Servers sind leider sehr begrenzt, da nur wenige Einstellungsmöglichkeiten zur Verfügung stehen. Wir versuchen, dem Vanilla-Server mit den folgenden Maßnahmen etwas mehr Leistung zu geben:

### Sichtweite

Eine Maßnahme, die sehr oft ergriffen wird, ist die Reduzierung der Sichtweite. Der Standard-Sichtbereich beträgt 10 Chunks, aber viele Spieler spielen mit deutlich weniger, wie 6-8. Einige Spieler übertreiben es mit den Chunks und setzen diesen manchmal auf 32 Chunks, was bedeutet, dass der Server dann alle diese Chunks laden und verarbeiten muss, was viel Leistung kostet.

Bei einem Vanilla-Server kann der Sichtbereich in der "server.properties"-Konfiguration angepasst werden, dafür muss der Wert "view-distance" angepasst werden. Um das Spielerlebnis nicht zu sehr einzuschränken, wird empfohlen, diesen Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.
Wir haben bereits einen Eintrag in unserer Dokumentation dafür, der hier zu finden ist.

### Datenkompression

Auf einem Server gibt es einen ständigen Austausch zwischen dem Server und den verbundenen Spielern. Die Bewegungen der Spieler selbst werden an den Server übertragen und der Server sendet dies dann wiederum an alle anderen Spieler. Aber auch Spieleraktionen oder Ereignisse in der Welt, wie Explosionen als Beispiel, sind Teil der Daten, die immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austauschs etwas eleganter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, was bedeutet, dass der Server nur 50% des Aufwands betreiben muss, um die gleichen Daten mit den Spielern auszutauschen im Vergleich zu vorher. Dafür muss auch der Wert "network-compression-threshold" in der "server.properties"-Konfiguration angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hier haben wir bereits einen Eintrag in unserer Dokumentation, der hier zu finden ist.

## Forge

Ähnlich wie bei Vanilla sind die Möglichkeiten, die auf dem Server selbst vorgenommen werden können, leider etwas begrenzt, da nur sehr kleine Konfigurationsdateien zur Verfügung stehen. Die Installation zusätzlicher Mods ist jedoch möglich, was bedeutet, dass der Server auch etwas entlastet werden kann.

### Vorladen der Chunks

Eine Möglichkeit, den Server zu entlasten, besteht darin, Chunks vorzuladen. Der Server muss dann nur die gespeicherten Chunk-Daten während des späteren Betriebs mit Spielern laden und nicht die gesamten Chunks erstellen und generieren. Dieser Prozess kann am besten über Nacht laufen gelassen werden, den Sie am Abend zuvor starten.

Ein zusätzlicher Mod muss dafür installiert werden. Ein sehr geeigneter Mod kann [hier](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator) installiert werden.
Der Mod kann dann wie in unseren Anweisungen beschrieben normal auf dem Server installiert werden.

Bevor der Server neu gestartet wird, sollten Sie sicherstellen, dass der "max-tick-time" in der "server.properties" auf "-1" gesetzt ist. Andernfalls könnte der Server abstürzen. Es ist auch ratsam, dass mindestens 8-10 GB RAM verfügbar sind, da dieser Prozess leider viel RAM benötigt. Zu diesem Zweck kann der RAM über Nacht kurz aufgerüstet werden, der dann nach Abschluss dieses Prozesses wieder heruntergestuft werden kann.

:::info
Bitte beachten Sie, dass der oben genannte Mod möglicherweise nicht mit der von Ihnen verwendeten Version von Forge kompatibel ist und der Prozess von dem hier beschriebenen abweichen kann, wenn Sie einen anderen Mod verwenden.
:::

Sobald der Server mit dem Mod gestartet ist, muss die Konsole geöffnet werden. Wir würden empfehlen, eine Grenze für die Welt mit einem Radius von 16.000 Blöcken zu erstellen. Dazu müssen die folgenden Befehle in der Reihenfolge ausgeführt werden:

- worldborder center 0 0
- worldborder set 16000

:::info
Falls erforderlich, ersetzen Sie die Koordinaten durch Ihr eigenes Weltzentrum mit dem Zentrum-Befehl, um Ihre Welt nicht "abzuschneiden" (die möglicherweise bereits gebaut wurde).
:::

Sobald die Grenze gesetzt ist, kann das eigentliche Vorladen gestartet werden. Dazu muss der folgende Befehl ausgeführt werden:

- pregen gen startWorldBorder

Jetzt werden alle Chunks innerhalb der Grenze nacheinander vorab geladen. Dieser Prozess kann je nach Anzahl der installierten Mods bis zu 8 Stunden dauern. Der Fortschritt dieses Prozesses wird in der Konsole durch Informationsnachrichten in regelmäßigen Abständen ausgegeben. Sobald der Prozess abgeschlossen ist, wird dies ebenfalls in der Konsole ausgegeben!

:::info
Der Mod kann auch nach Abschluss dieses Prozesses weiterhin auf dem Server installiert werden. Er wird weiterhin Chunks während des Betriebs optimieren und funktioniert auch, wenn kein Spieler auf dem Server ist.
:::

### Sichtweite

Eine Maßnahme, die sehr oft ergriffen wird, ist die Reduzierung der Sichtweite. Der Standard-Sichtbereich beträgt 10 Chunks, aber viele Spieler spielen mit deutlich weniger, wie 6-8. Einige Spieler übertreiben es mit den Chunks und setzen diesen manchmal auf 32 Chunks, was bedeutet, dass der Server dann alle diese Chunks laden und verarbeiten muss, was viel Leistung kostet.

Die Sichtweite eines Forge-Servers kann in der "server.properties"-Konfiguration angepasst werden, dafür muss der Wert "view-distance" angepasst werden. Um das Spielerlebnis nicht zu sehr einzuschränken, wird empfohlen, diesen Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.
Wir haben bereits einen Eintrag in unserer Dokumentation dafür, der hier zu finden ist.

### Datenkompression

Auf einem Server gibt es einen ständigen Austausch zwischen dem Server und den verbundenen Spielern. Die Bewegungen der Spieler selbst werden an den Server übertragen und der Server sendet dies dann wiederum an alle anderen Spieler. Aber auch Spieleraktionen oder Ereignisse in der Welt, wie Explosionen als Beispiel, sind Teil der Daten, die immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austauschs etwas eleganter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, was bedeutet, dass der Server nur 50% des Aufwands betreiben muss, um die gleichen Daten mit den Spielern auszutauschen im Vergleich zu vorher. Dafür muss auch der Wert "network-compression-threshold" in der "server.properties"-Konfiguration angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hier haben wir bereits einen Eintrag in unserer Dokumentation, der hier zu finden ist.

## Bukkit

### Sichtweite

Eine Maßnahme, die sehr oft ergriffen wird, ist die Reduzierung der Sichtweite. Der Standard-Sichtbereich beträgt 10 Chunks, aber viele Spieler spielen mit deutlich weniger, wie 6-8. Einige Spieler übertreiben es mit den Chunks und setzen diesen manchmal auf 32 Chunks, was bedeutet, dass der Server dann alle diese Chunks laden und verarbeiten muss, was viel Leistung kostet.

Die Sichtweite eines Bukkit-Servers kann in der "server.properties"-Konfiguration angepasst werden, dafür muss der Wert "view-distance" angepasst werden. Um das Spielerlebnis nicht zu sehr einzuschränken, wird empfohlen, diesen Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.
Wir haben bereits einen Eintrag in unserer Dokumentation dafür, der hier zu finden ist.

### Datenkompression

Auf einem Server gibt es einen ständigen Austausch zwischen dem Server und den verbundenen Spielern. Die Bewegungen der Spieler selbst werden an den Server übertragen und der Server sendet dies dann wiederum an alle anderen Spieler. Aber auch Spieleraktionen oder Ereignisse in der Welt, wie Explosionen als Beispiel, sind Teil der Daten, die immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austauschs etwas eleganter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, was bedeutet, dass der Server nur 50% des Aufwands betreiben muss, um die gleichen Daten mit den Spielern auszutauschen im Vergleich zu vorher. Dafür muss auch der Wert "network-compression-threshold" in der "server.properties"-Konfiguration angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hier haben wir bereits einen Eintrag in unserer Dokumentation, der hier zu finden ist.

### Spawn-Limits

In diesem Schritt werden die allgemeinen Spawn-Raten von Mobs auf dem Server etwas reduziert. Es gibt fast keinen merklichen Unterschied zu den normalen Werten. Dennoch kann es an einigen Stellen mit Mob-Farmen als Beispiel passieren, dass die Mob-Farm nicht wie geplant funktioniert.

Um die Einstellungen dafür anzupassen, muss die Konfiguration "bukkit.yml" bearbeitet werden. Die folgenden Werte müssen dann am Punkt "spawn-limits" angepasst werden:
- monsters: 50 #Standard: 70
- animals: 10 #Standard: 15
- water-animals: 3 #Standard: 5
- ambient: 4 #Standard: 15

:::info
Sie sind natürlich herzlich eingeladen, die Werte selbst anzupassen, wenn Sie möchten, andernfalls sind die oben genannten Werte ein sehr guter Durchschnitt.
:::

Um das Spawnen weiter zu verbessern, sollte der Wert "monster-spawns" im "tickes-per"-Element ebenfalls in der "bukkit.yml"-Konfiguration geändert werden:
- monster-spawns: 2 #Standard: 1

Wenn es ein allgemeines Problem mit Monstern gibt (wie im Timing-Bericht festgestellt werden kann), kann der Wert auf bis zu 5 gesetzt werden. Das Verhalten des Servers sollte dann mit jedem Wert betrachtet werden, um den besten Wert für Ihren eigenen Server zu finden.

### Chunk-Verarbeitung

Minecraft arbeitet mit sogenannten Chunks. Ein Chunk besteht immer aus 16x16 Blöcken, die dann zusammengefügt werden und die Welt für den Client visuell darstellen. Der Server arbeitet daher nur mit Chunks und lädt dann die benötigten Chunks in den RAM. Je mehr Chunks geladen und dauerhaft vom Server verarbeitet werden, desto mehr Leistung muss der Server dafür bereitstellen, was an einigen Stellen den Server in die Knie zwingt.

Server mit den Standardeinstellungen entladen niemals geladene Chunks, was bedeutet, dass der RAM an einigen Stellen sehr stark beansprucht wird und eine enorme Menge davon benötigt wird. Natürlich wird die Leistung des Servers hier leider sehr stark reduziert, da immer mehr verarbeitet werden muss.

Um sicherzustellen, dass der Server nur die Chunks lädt, die derzeit benötigt werden, müssen die folgenden Optionen in der "bukkit.yml"-Konfiguration unter "chunk-gc" angepasst werden:
- period-in-ticks: 300 #Standard: 600
- load-threshold: 300 #Standard: 0

Die Option "period-in-ticks" bestimmt, in welchen Intervallen in Sekunden die Chunks entladen werden sollen. Wenn gewünscht, kann dieser Wert auch weiter reduziert werden, aber Sie sollten beachten, dass dann ein unerwünschter Effekt auftreten kann: eine Schleife.

Im Falle einer Schleife würde der Chunk entladen, woraufhin der Chunk nur wenige später benötigt wird, was bedeutet, dass der Server dann erneut Leistung und Zeit investieren muss, um diesen Chunk wieder zu laden. Dies würde sich dann immer wieder wiederholen, was eine größere Belastung für den Server darstellt, als wenn die Chunks beispielsweise eine Minute länger geladen bleiben.

## Spigot

### Sichtweite

Eine Maßnahme, die sehr oft ergriffen wird, ist die Reduzierung der Sichtweite. Der Standard-Sichtbereich beträgt 10 Chunks, aber viele Spieler spielen mit deutlich weniger, wie 6-8. Einige Spieler übertreiben es mit den Chunks und setzen diesen manchmal auf 32 Chunks, was bedeutet, dass der Server dann alle diese Chunks laden und verarbeiten muss, was viel Leistung kostet.

Bei einem Spigot-Server kann die Sichtweite in der "spigot.yml"-Konfiguration angepasst werden, dafür muss der Wert "view-distance" angepasst werden. Um das Spielerlebnis nicht zu sehr einzuschränken, wird empfohlen, diesen Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.

:::info
Je nach Vorliebe kann der Wert auch auf 4 gesetzt werden, was als Beispiel sehr gut gegen Ruckler hilft, wenn Sie Farm-Welt-Server betreiben, die auf Version 1.13+ betrieben werden.
:::

### Datenkompression

Auf einem Server gibt es einen ständigen Austausch zwischen dem Server und den verbundenen Spielern. Die Bewegungen der Spieler selbst werden an den Server übertragen und der Server sendet dies dann wiederum an alle anderen Spieler. Aber auch Spieleraktionen oder Ereignisse in der Welt, wie Explosionen als Beispiel, sind Teil der Daten, die immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austauschs etwas eleganter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, was bedeutet, dass der Server nur 50% des Aufwands betreiben muss, um die gleichen Daten mit den Spielern auszutauschen im Vergleich zu vorher. Dafür muss auch der Wert "network-compression-threshold" in der "server.properties"-Konfiguration angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hier haben wir bereits einen Eintrag in unserer Dokumentation, der hier zu finden ist.

### Spawn-Limits

In diesem Schritt werden die allgemeinen Spawn-Raten von Mobs auf dem Server etwas reduziert. Es gibt fast keinen merklichen Unterschied zu den normalen Werten. Dennoch kann es an einigen Stellen mit Mob-Farmen als Beispiel passieren, dass die Mob-Farm nicht wie geplant funktioniert.

Um die Einstellungen dafür anzupassen, muss die Konfiguration "bukkit.yml" bearbeitet werden. Die folgenden Werte müssen dann am Punkt "spawn-limits" angepasst werden:
- monsters: 50 #Standard: 70
- animals: 10 #Standard: 15
- water-animals: 3 #Standard: 5
- ambient: 4 #Standard: 15

:::info
Sie sind natürlich herzlich eingeladen, die Werte selbst anzupassen, wenn Sie möchten, andernfalls sind die oben genannten Werte ein sehr guter Durchschnitt.
:::

Um das Spawnen weiter zu verbessern, sollte der Wert "monster-spawns" im "tickes-per"-Element ebenfalls in der "bukkit.yml"-Konfiguration geändert werden:
- monster-spawns: 2 #Standard: 1

Wenn es ein allgemeines Problem mit Monstern gibt (wie im Timing-Bericht festgestellt werden kann), kann der Wert auf bis zu 5 gesetzt werden. Das Verhalten des Servers sollte dann mit jedem Wert betrachtet werden, um den besten Wert für Ihren eigenen Server zu finden.

### Chunk-Verarbeitung

Minecraft arbeitet mit sogenannten Chunks. Ein Chunk besteht immer aus 16x16 Blöcken, die dann zusammengefügt werden und die Welt für den Client visuell darstellen. Der Server arbeitet daher nur mit Chunks und lädt dann die benötigten Chunks in den RAM. Je mehr Chunks geladen und dauerhaft vom Server verarbeitet werden, desto mehr Leistung muss der Server dafür bereitstellen, was an einigen Stellen den Server in die Knie zwingt.

Server mit den Standardeinstellungen entladen niemals geladene Chunks, was bedeutet, dass der RAM an einigen Stellen sehr stark beansprucht wird und eine enorme Menge davon benötigt wird. Natürlich wird die Leistung des Servers hier leider sehr stark reduziert, da immer mehr verarbeitet werden muss.

Um sicherzustellen, dass der Server nur die Chunks lädt, die derzeit benötigt werden, müssen die folgenden Optionen in der "bukkit.yml"-Konfiguration unter "chunk-gc" angepasst werden:
- period-in-ticks: 300 #Standard: 600
- load-threshold: 300 #Standard: 0

Die Option "period-in-ticks" bestimmt, in welchen Intervallen in Sekunden die Chunks entladen werden sollen. Wenn gewünscht, kann dieser Wert auch weiter reduziert werden, aber Sie sollten beachten, dass dann ein unerwünschter Effekt auftreten kann: eine Schleife.

Im Falle einer Schleife würde der Chunk entladen, woraufhin der Chunk nur wenige später benötigt wird, was bedeutet, dass der Server dann erneut Leistung und Zeit investieren muss, um diesen Chunk wieder zu laden. Dies würde sich dann immer wieder wiederholen, was eine größere Belastung für den Server darstellt, als wenn die Chunks beispielsweise eine Minute länger geladen bleiben.

### Spawn-Bereich

Mobs können immer in bestimmten Intervallen von Spielern spawnen. Hier reduzieren wir diese Rate etwas, damit es keine Probleme mit dem Mob-Spawning gibt. Diese Einstellung ist sehr wichtig, da einige der Einstellungen für das Spawnen bereits angepasst wurden, die oben erklärt wurden.

Wir ändern die folgenden Einstellungen in der "spigot.yml"-Konfiguration in den "world-settings":
- mob-spawn-range: 3 #Standard: 4

### Entitätsbereiche

An diesem Punkt legen wir nun fest, wann Entitäten - also Tiere und Monster - aktiviert werden. Das bedeutet, dass die Tiere sich als Beispiel bewegen können oder Monster auch Spieler erkennen können. Grundsätzlich ist dies für alle Mobs aktiviert, aber in einer Art Standby-Modus. Im Standby-Modus können sich die Mobs weiterhin bewegen und auch Spieler erkennen, aber als Beispiel können sich die Mobs nur sehr langsam bewegen, was bedeutet, dass der Server nicht viel Leistung bereitstellen muss.

Hier müssen die Änderungen ebenfalls in der "spigot.yml"-Konfiguration unter dem Punkt "entity-activation-range" vorgenommen werden. Wir empfehlen die folgenden Werte:
- animals: 6 #Standard: 32
- monsters: 16 #Standard: 32
- misc: 2 #Standard: 16
- water: 6 #Standard: 6
- tick-inactive-villagers: true #Standard: true

### Trichter-Optimierungen

Trichter sind ein sehr wichtiger Teil des Spiels in Minecraft. Aber für Server sind diese wirklich giftig! Für jeden gesetzten Trichter muss der Server 20 Mal pro Sekunde überprüfen, ob ein Item bereit ist, aufgenommen zu werden. Das Bewegen der Items von Trichter zu Trichter oder in eine Kiste kostet ebenfalls wertvolle Arbeit!

Um das Ganze etwas zu verbessern, erhöhen wir die Zeitintervalle, in denen der Server solche Aktionen durchführen sollte. Mit den hier verwendeten Werten wird eine solche Aktion alle 3 Sekunden durchgeführt und überprüft. Die Übertragungsraten ändern sich hier nicht. Es kann jedoch passieren, dass Redstone-Uhren, die mit Trichtern erstellt wurden, möglicherweise nicht mehr korrekt funktionieren.

Um die Einstellungen anzupassen, müssen die folgenden Werte in der "spigot.yml"-Konfiguration angepasst werden:
- hopper-transfer: 24 #Standard: 8
- hopper-check: 24 #Standard: 8
- hopper-amount: 3 #Standard: 1

### Kollisionen

Seit der Minecraft-Version 1.9 gibt es Kollisionen, wobei beispielsweise kein Spieler mehr in einem anderen Spieler stehen kann. Hier legen wir fest, wie oft Entitäten im Allgemeinen kollidieren können. Besonders in Mob-Farmen, wo viele Mobs auf engem Raum aufeinandertreffen, kann dies manchmal eine hohe Belastung für den Server darstellen.

Um die Einstellung anzupassen, muss der folgende Wert in "spigot.yml" angepasst werden:
- max-entity-collisions: 1 #Standard: 8

Da Kollisionen keinen wirklichen Einfluss auf Mobs haben, kann die Einstellung hier heruntergedreht werden. Dieser Wert wird nicht für Spieler verwendet, sondern nur für Mobs!

### Merge-Radius

Der Merge-Radius bestimmt, welche Items und XP zusammengeführt werden, was bedeutet, dass der Server weniger Entitäten verarbeiten muss. Besonders bei Servern, auf denen viele Items auf dem Boden liegen, kann dies einen positiven Effekt für die Spieler haben, wenn dieser Radius erhöht wird. Auch hier gilt die Regel, dass Sie einen guten Mittelwert finden, andernfalls kann ein gewisser Lag-Effekt auftreten, was bedeutet, dass der Server einen größeren Bereich überprüfen muss, was dann zu viel Leistung erfordert!

Um die Einstellung anzupassen, müssen die folgenden Werte unter dem Punkt "merge-radius" in der "spigot.yml" angepasst werden:
- item: 4.0 #Standard 2.5
- exp: 6.0 #Standard: 3.0

:::info
Die Werte hier sollten nicht höher als 8 gesetzt werden, da sonst der oben erwähnte Lag-Effekt auftreten kann!
:::

## Paper Spigot

### Sichtweite

Eine Maßnahme, die sehr oft ergriffen wird, ist die Reduzierung der Sichtweite. Der Standard-Sichtbereich beträgt 10 Chunks, aber viele Spieler spielen mit deutlich weniger, wie 6-8. Einige Spieler übertreiben es mit den Chunks und setzen diesen manchmal auf 32 Chunks, was bedeutet, dass der Server dann alle diese Chunks laden und verarbeiten muss, was viel Leistung kostet.

Bei einem (Paper) Spigot-Server kann der Sichtbereich in der "spigot.yml"-Konfiguration angepasst werden, dafür muss der Wert "view-distance" angepasst werden. Um das Spielerlebnis nicht zu sehr einzuschränken, wird empfohlen, diesen Wert auf 5-6 zu setzen, was den Server um bis zu 50% entlastet.

:::info
Je nach Vorliebe kann der Wert auch auf 4 gesetzt werden, was als Beispiel sehr gut gegen Ruckler hilft, wenn Sie Farm-Welt-Server betreiben, die auf Version 1.13+ betrieben werden.
:::

### Datenkompression

Auf einem Server gibt es einen ständigen Austausch zwischen dem Server und den verbundenen Spielern. Die Bewegungen der Spieler selbst werden an den Server übertragen und der Server sendet dies dann wiederum an alle anderen Spieler. Aber auch Spieleraktionen oder Ereignisse in der Welt, wie Explosionen als Beispiel, sind Teil der Daten, die immer wieder übertragen werden.

Um die Regelmäßigkeit dieses Austauschs etwas eleganter zu gestalten, kann die Größe der gepackten Daten verdoppelt werden, was bedeutet, dass der Server nur 50% des Aufwands betreiben muss, um die gleichen Daten mit den Spielern auszutauschen im Vergleich zu vorher. Dafür muss auch der Wert "network-compression-threshold" in der "server.properties"-Konfiguration angepasst werden. Der Wert sollte hier auf 512 gesetzt werden. Auch hier haben wir bereits einen Eintrag in unserer Dokumentation, der hier zu finden ist.

### Spawn-Limits

In diesem Schritt werden die allgemeinen Spawn-Raten von Mobs auf dem Server etwas reduziert. Es gibt fast keinen merklichen Unterschied zu den normalen Werten. Dennoch kann es an einigen Stellen mit Mob-Farmen als Beispiel passieren, dass die Mob-Farm nicht wie geplant funktioniert.

Um die Einstellungen dafür anzupassen, muss die Konfiguration "bukkit.yml" bearbeitet werden. Die folgenden Werte müssen dann am Punkt "spawn-limits" angepasst werden:
- monsters: 50 #Standard: 70
- animals: 10 #Standard: 15
- water-animals: 3 #Standard: 5
- ambient: 4 #Standard: 15

:::info
Sie sind natürlich herzlich eingeladen, die Werte selbst anzupassen, wenn Sie möchten, andernfalls sind die oben genannten Werte ein sehr guter Durchschnitt.
:::

Um das Spawnen weiter zu verbessern, sollte der Wert "monster-spawns" im "tickes-per"-Element ebenfalls in der "bukkit.yml"-Konfiguration geändert werden:
- monster-spawns: 2 #Standard: 1

Wenn es ein allgemeines Problem mit Monstern gibt (wie im Timing-Bericht festgestellt werden kann), kann der Wert auf bis zu 5 gesetzt werden. Das Verhalten des Servers sollte dann mit jedem Wert betrachtet werden, um den besten Wert für Ihren eigenen Server zu finden.

### Chunk-Verarbeitung

Minecraft arbeitet mit sogenannten Chunks. Ein Chunk besteht immer aus 16x16 Blöcken, die dann zusammengefügt werden und die Welt für den Client visuell darstellen. Der Server arbeitet daher nur mit Chunks und lädt dann die benötigten Chunks in den RAM. Je mehr Chunks geladen und dauerhaft vom Server verarbeitet werden, desto mehr Leistung muss der Server dafür bereitstellen, was an einigen Stellen den Server in die Knie zwingt.

Server mit den Standardeinstellungen entladen niemals geladene Chunks, was bedeutet, dass der RAM an einigen Stellen sehr stark beansprucht wird und eine enorme Menge davon benötigt wird. Natürlich wird die Leistung des Servers hier leider sehr stark reduziert, da immer mehr verarbeitet werden muss.

Um sicherzustellen, dass der Server nur die Chunks lädt, die derzeit benötigt werden, müssen die folgenden Optionen in der "bukkit.yml"-Konfiguration unter "chunk-gc" angepasst werden:
- period-in-ticks: 300 #Standard: 600
- load-threshold: 300 #Standard: 0

Die Option "period-in-ticks" bestimmt, in welchen Intervallen in Sekunden die Chunks entladen werden sollen. Wenn gewünscht, kann dieser Wert auch weiter reduziert werden, aber Sie sollten beachten, dass dann ein unerwünschter Effekt auftreten kann: eine Schleife.

Im Falle einer Schleife würde der Chunk entladen, woraufhin der Chunk nur wenige später benötigt wird, was bedeutet, dass der Server dann erneut Leistung und Zeit investieren muss, um diesen Chunk wieder zu laden. Dies würde sich dann immer wieder wiederholen, was eine größere Belastung für den Server darstellt, als wenn die Chunks beispielsweise eine Minute länger geladen bleiben.

### Spawn-Bereich

Mobs können immer in bestimmten Intervallen von Spielern spawnen. Hier reduzieren wir diese Rate etwas, damit es keine Probleme mit dem Mob-Spawning gibt. Diese Einstellung ist sehr wichtig, da einige der Einstellungen für das Spawnen bereits angepasst wurden, die oben erklärt wurden.

Wir ändern die folgenden Einstellungen in der "spigot.yml"-Konfiguration in den "world-settings":
- mob-spawn-range: 3 #Standard: 4

### Mob-Spawner

Besonders auf Stadtbau-Servern werden Spawner sehr oft und manchmal in großer Zahl verwendet. Spawner erzeugen dann immer mehr Mobs auf dem Server, was zu vielen Problemen führen kann.

Diese Option passt das Spawnverhalten des Spawners etwas an, sodass der Server den Spawner in kurzen Abständen aktiviert. Dazu muss der folgende Wert in "paper.yml" angepasst werden:
- mob-spawner-tick-rate: 3 #Standard: 1

:::info
Der oben verwendete Wert ändert das Verhalten nicht zu stark und hat keinen wirklichen Einfluss auf das Spielverhalten.
:::

### Entitätsbereiche

An diesem Punkt legen wir nun fest, wann Entitäten - also Tiere und Monster - aktiviert werden. Das bedeutet, dass die Tiere sich als Beispiel bewegen können oder Monster auch Spieler erkennen können. Grundsätzlich ist dies für alle Mobs aktiviert, aber in einer Art Standby-Modus. Im Standby-Modus können sich die Mobs weiterhin bewegen und auch Spieler erkennen, aber als Beispiel können sich die Mobs nur sehr langsam bewegen, was bedeutet, dass der Server nicht viel Leistung bereitstellen muss.

Hier müssen die Änderungen ebenfalls in der "spigot.yml"-Konfiguration unter dem Punkt "entity-activation-range" vorgenommen werden. Wir empfehlen die folgenden Werte:
- animals: 6 #Standard: 32
- monsters: 16 #Standard: 32
- misc: 2 #Standard: 16
- water: 6 #Standard: 6
- tick-inactive-villagers: true #Standard: true

### Trichter-Optimierung

Trichter sind ein sehr wichtiger Teil des Spiels in Minecraft. Aber für Server sind diese wirklich giftig! Für jeden gesetzten Trichter muss der Server 20 Mal pro Sekunde überprüfen, ob ein Item bereit ist, aufgenommen zu werden. Das Bewegen der Items von Trichter zu Trichter oder in eine Kiste kostet ebenfalls wertvolle Arbeit!

Um das Ganze etwas zu verbessern, erhöhen wir die Zeitintervalle, in denen der Server solche Aktionen durchführen sollte. Mit den hier verwendeten Werten wird eine solche Aktion alle 3 Sekunden durchgeführt und überprüft. Die Übertragungsraten ändern sich hier nicht. Es kann jedoch passieren, dass Redstone-Uhren, die mit Trichtern erstellt wurden, möglicherweise nicht mehr korrekt funktionieren.

Um die Einstellungen anzupassen, müssen die folgenden Werte in der "spigot.yml"-Konfiguration angepasst werden:
- hopper-transfer: 24 #Standard: 8
- hopper-check: 24 #Standard: 8
- hopper-amount: 3 #Standard: 1

:::info
Stellen Sie sicher, dass der Wert "use-hopper-check" in der "paper.yml"-Konfiguration auf "true" gesetzt ist!
:::

### Kollisionen

Seit der Minecraft-Version 1.9 gibt es Kollisionen, wobei beispielsweise kein Spieler mehr in einem anderen Spieler stehen kann. Hier legen wir fest, wie oft Entitäten im Allgemeinen kollidieren können. Besonders in Mob-Farmen, wo viele Mobs auf engem Raum aufeinandertreffen, kann dies manchmal eine hohe Belastung für den Server darstellen.

Um die Einstellung anzupassen, muss der folgende Wert in "spigot.yml" angepasst werden:
- max-entity-collisions: 1 #Standard: 8

Da Kollisionen keinen wirklichen Einfluss auf Mobs haben, kann die Einstellung hier heruntergedreht werden. Dieser Wert wird nicht für Spieler verwendet, sondern nur für Mobs!

### Merge-Radius

Der Merge-Radius bestimmt, welche Items und XP zusammengeführt werden, was bedeutet, dass der Server weniger Entitäten verarbeiten muss. Besonders bei Servern, auf denen viele Items auf dem Boden liegen, kann dies einen positiven Effekt für die Spieler haben, wenn dieser Radius erhöht wird. Auch hier gilt die Regel, dass Sie einen guten Mittelwert finden, andernfalls kann ein gewisser Lag-Effekt auftreten, was bedeutet, dass der Server einen größeren Bereich überprüfen muss, was dann zu viel Leistung erfordert!

Um die Einstellung anzupassen, müssen die folgenden Werte unter dem Punkt "merge-radius" in der "spigot.yml" angepasst werden:
- item: 4.0 #Standard 2.5
- exp: 6.0 #Standard: 3.0

:::info
Die Werte hier sollten nicht höher als 8 gesetzt werden, da sonst der oben erwähnte Lag-Effekt auftreten kann!
:::

### Explosionen

Bei Paper Spigot wurden viele Teile von Minecraft-Servern umprogrammiert, um den Server besser laufen zu lassen. Dies gilt auch für Explosionen! Hier verarbeitet die Software Explosionen besser, sodass größere Lags auf dem Server vermieden werden.

Dazu muss der folgende Wert in der "paper.yml"-Konfiguration angepasst werden:
- optimize-explosions: true #Standard: false

### Kisten

Auch bei Kisten gibt es eine Kleinigkeit, die optimiert werden kann! Wenn eine Katze auf der Kiste sitzt, kann sie nicht geöffnet werden. Damit der Server dies überprüfen kann, muss der Server alle Mobs in einem bestimmten Radius durchgehen und überprüfen, ob einer dieser Mobs auf der Kiste sitzt, was leider sehr zeitaufwendig ist und jedes Mal, wenn eine Kiste geöffnet wird!

Die Option kann einfach mit der folgenden Änderung deaktiviert werden:
- disable-chest-cat-detection: true #Standard: false

### Inventare

Das Inventar wird viel genutzt, aber Inventar ist nicht gleich Inventar. Beispielsweise ist eine Kiste oder Werkbank ebenfalls ein Inventar. Mit dieser Änderung können Sie dem Server auch ein schönes Aussehen verleihen, ohne dass es jemand bemerkt! Hier setzen wir im Grunde nur die Anzahl der Ticks, nach denen der Server jedes Inventar aktualisieren sollte.

Dafür muss der folgende Wert in der "paper.yml"-Konfiguration bearbeitet werden:
- container-update-tick-rate: 3 #Standard: 1

:::info
Der Wert sollte nicht höher als 5 gesetzt werden, da sonst das Inventar etwas fehlerhaft sein kann! In Spielmodi wie SurvivalGames, in denen alle Spieler auf die Kisten in der Mitte zugreifen und die besten Items erhalten möchten, sollte der Wert nicht geändert und auf "1" belassen werden.
:::

### Licht-Updates

Auch hier bietet Paper Spigot eine alternative Option, damit die Licht-Updates in der Welt besser durchgeführt werden. Mit dieser Methode werden die Licht-Updates nicht innerhalb eines Ticks durchgeführt, was dann, je nach Größe des Updates, manchmal den Server zum Stillstand bringen kann, sondern außerhalb des Ticks. Das Ganze wird in Minecraft als asynchrone Threads bezeichnet.

Dazu muss auch die folgende Änderung in der "paper.yml"-Konfiguration vorgenommen werden:
- queue-light-updates: true #Standard: false

### Speichern von Chunk-Daten

Sobald Änderungen in einem Chunk vorgenommen wurden, werden die Änderungen nicht direkt auf die Festplatte geschrieben, sondern zunächst in den RAM geladen. Dennoch werden alle Änderungen sehr häufig gespeichert, was manchmal extreme Lags verursachen kann, insbesondere wenn der Server massive Änderungen speichern möchte.

Mit dieser Änderung reduzieren wir die maximale Anzahl von Chunks, die in einem Speicherprozess gespeichert werden können. Durch die Änderung dieser Option wird der RAM an einigen Stellen mehr genutzt, da die Änderungen länger im RAM bleiben!

Änderungen an der folgenden Einstellung müssen in der "paper.yml"-Konfiguration vorgenommen werden:
- max-auto-save-chunks-per-tick: 10 #Standard: 24

### Redstone

Redstone wird sehr oft mit manchmal extrem großen Schaltungen verwendet. Auf öffentlichen Servern ist dies manchmal sogar der schwächste Punkt in fast 90% der Server, da massive Lags mit Redstone verursacht werden können. Hier verwenden wir auch eine alternative Verarbeitung von Redstone von Paper Spigot, die Redstone nahezu harmlos macht und die gleiche Funktionalität wie in Vanilla hat!

Dazu muss die folgende Einstellung in "paper.yml" vorgenommen werden:
- use-faster-eigencraft-redstone: true #Standard: false

:::info
**Achtung! In einigen Situationen kann dies die Funktionsweise von Redstone stark verändern!**
:::

<InlineVoucher />