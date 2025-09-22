---
id: vserver-iso
title: "VPS: ISO-Datei einbinden"
description: Informationen zum Einbinden einer ISO-Datei auf Ihrem VPS von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: ISO-Datei einbinden
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Einführung in diese Anleitung
Möchten Sie noch mehr Freiheit bei der Wahl Ihres Systems? Neben unseren OS-Vorlagen können Sie natürlich auch Ihre eigenen ISOs einbinden. Das ist mit unseren VPS-Produkten super einfach. So erhalten Sie genau das Betriebssystem auf Ihrem Server, das Sie wirklich möchten! Hallo, mein Name ist Florian! Cool, oder?

<InlineVoucher />



## Verfügbare ISO-Dateien

Neben unseren vorkonfigurierten Standard-OS-Vorlagen bieten wir auch die Möglichkeit, zusätzliche ISO-Dateien einzubinden. Dies bietet noch mehr Flexibilität bei der Einrichtung und Verwaltung Ihrer Serverumgebung. Unsere VPS-Produkte unterstützen derzeit die folgenden ISO-Dateien: 

<SearchableItemList items={items} />

:::info Fehlt eine ISO-Datei?
Gibt es eine bestimmte ISO, die Sie verwenden möchten, die aber nicht verfügbar ist? Kontaktieren Sie einfach unser Support-Team – wir prüfen gerne, ob wir diese für Sie hinzufügen können.
:::





## ISO-Datei einbinden
Um eine ISO einzubinden, gehen Sie in Ihr VPS-Verwaltungs-Panel und öffnen Sie **Einstellungen → ISOs**. Wählen Sie die gewünschte ISO-Datei aus, passen Sie die Boot-Reihenfolge an und starten Sie anschließend Ihren Server neu. 

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Nach dem Neustart können Sie sich mit dem VNC-Client mit Ihrem Server verbinden und mit der Installation und Konfiguration des Betriebssystems beginnen.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Online-Status oder Remote-Verbindungen nach ISO-Einbindung

Nach dem Einbinden einer ISO ist Ihr Server noch nicht eingerichtet. Daher wird im Panel kein **Online-Status** angezeigt und **RDP**- oder **SSH-Verbindungen** sind nicht verfügbar. Diese werden erst zugänglich, sobald das Betriebssystem erfolgreich installiert und konfiguriert wurde.

:::




## Fazit
Herzlichen Glückwunsch, Sie haben Ihre ISO-Datei erfolgreich ausgewählt und eingebunden. Bei weiteren Fragen oder Unterstützung steht Ihnen unser Support-Team täglich gerne zur Verfügung! 🙂



<InlineVoucher />