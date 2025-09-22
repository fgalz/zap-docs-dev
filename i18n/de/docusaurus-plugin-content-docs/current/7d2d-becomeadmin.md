---
id: 7d2d-becomeadmin
title: "7 Days to Die: Wie man Admin für 7 Days to Die wird"
description: Wie man Admin für 7 Days to Die Spielserver wird - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht Ihnen eine einfache und umfassende Verwaltung mit voller Kontrolle über Ihren Server. Als Administrator haben Sie die Möglichkeit, alle verfügbaren Optionen und Funktionen, die das Spiel direkt im Spiel bietet, zu nutzen. Alle Schritte, die Sie unternehmen müssen, um Administratorrechte für Ihren Server zu vergeben, werden im Folgenden beschrieben.  
<InlineVoucher />

## Konfiguration
Das Hinzufügen eines Admins erfolgt über die **serveradmin.xml**-Konfiguration, die Sie in der Weboberfläche unter Konfigurationen finden.

![](https://screensaver01.zap-hosting.com/index.php/s/wXpLL2qyZE2zCYa/preview)

Ihre SteamID64 finden Sie, indem Sie Ihr Steam-Profil öffnen und irgendwo darin mit der rechten Maustaste klicken. Dort klicken Sie dann auf **Steam-URL kopieren**.

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)

Anschließend öffnen Sie eine der folgenden Seiten und fügen dort die URL Ihres Profils ein:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Dies liefert Ihnen allgemeine Informationen sowie die Steam-ID Ihres Accounts. In diesem Fall benötigen wir nur die SteamID64. Die SteamID64 wird dann unter ``<admins>...</admins>`` angegeben. Das sieht dann so aus:

```
 <users>
    <user steamID="76561198021925107" name="Hinweis, wer dieser Benutzer ist" permission_level="0" />
  </users>
```

:::danger  Admin-Eintrag wird nicht erkannt? 
Stellen Sie sicher, dass die Kommentarzeichen `<!--` und `-->` entfernt sind, damit die Zeile gültig ist. Andernfalls bleibt die Zeile nur ein Kommentar und wird nicht angewendet. Entfernen Sie einfach die Zeichen am Anfang und Ende der Zeile, um sie zu aktivieren.
:::

Das Spiel bietet die Möglichkeit, verschiedene Berechtigungsstufen für die Administratorrechte zu definieren. Das bedeutet, dass unterschiedliche Administratorgruppen mit unterschiedlichen Berechtigungen definiert werden können. Die Stufe wird durch die Option ``permission_level`` festgelegt. Diese kann von 0 bis 1000 eingestellt werden. Je nachdem, wie dies konfiguriert ist, haben die Administratoren dann Zugriff auf die zugewiesenen Berechtigungen. Sobald dies erledigt ist, wurden die Administratorrechte erfolgreich vergeben.

## Berechtigungen

Die Berechtigungen für alle Administratorbefehle können unter ``permissions`` definiert werden. Dafür muss der ``permission_level`` angepasst werden, genau wie beim Hinzufügen von Administratoren. Das sieht dann so aus:

```
<permissions>
	<permission cmd="dm" permission_level="0" ></permission>
	<permission cmd="kick" permission_level="1" ></permission>
	<permission cmd="say" permission_level="1000" ></permission>
    <permission cmd="chunkcache" permission_level="1000" ></permission>
    <permission cmd="debugshot" permission_level="1000" ></permission>
    <permission cmd="debugweather" permission_level="1000" ></permission>
    <permission cmd="getgamepref" permission_level="1000" ></permission>
</permissions>
```

Ein Berechtigungslevel ist ein Wert zwischen 0 und 1000 und bestimmt, welche Rechte ein Spieler hat. 1000 ist das niedrigste (keine Berechtigungen) und 0 ist das höchste (volle Administratorrechte). Je nachdem, wie die Berechtigungen diesbezüglich sein sollen, muss dies entsprechend angepasst werden.

## Fazit

Herzlichen Glückwunsch, Sie haben die Administratorrechte erfolgreich konfiguriert. Für weitere Fragen oder Unterstützung zögern Sie bitte nicht, unser Support-Team zu kontaktieren, das Ihnen täglich zur Verfügung steht! 🙂

<InlineVoucher />