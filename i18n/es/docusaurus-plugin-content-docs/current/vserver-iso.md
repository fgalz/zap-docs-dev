---
id: vserver-iso
title: "VPS: Montar un archivo ISO"
description: Información sobre cómo montar un archivo ISO en tu VPS desde ZAP-Hosting - Documentación de ZAP-Hosting.com
sidebar_label: Montar archivo ISO
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introducción a esta guía
¿Quieres aún más libertad al elegir tu sistema? Además de nuestras plantillas de SO, por supuesto puedes montar tus propios ISOs. Es súper fácil con nuestros productos VPS. ¡De esta manera obtienes exactamente el sistema operativo en tu servidor que realmente quieres! ¡Hola, mi nombre es Florian! ¿Genial, verdad?

<InlineVoucher />



## Archivos ISO disponibles

Además de nuestras plantillas estándar de SO preconfiguradas, también ofrecemos la opción de montar archivos ISO adicionales. Esto proporciona aún más flexibilidad al configurar y administrar tu entorno de servidor. Actualmente, nuestros productos VPS soportan los siguientes archivos ISO: 

<SearchableItemList items={items} />

:::info ¿Falta un archivo ISO?
¿Hay un ISO específico que te gustaría usar y que no está disponible? Solo contacta a nuestro equipo de soporte – estaremos encantados de verificar si podemos añadirlo para ti.
:::





## Montar archivo ISO
Para montar un ISO, ve a tu panel de gestión VPS y abre **Configuración → ISOs**. Selecciona el archivo ISO que deseas, ajusta el orden de arranque y luego reinicia tu servidor. 

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Después del reinicio, puedes conectarte a tu servidor usando el cliente VNC y comenzar a instalar y configurar el sistema operativo.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Estado en línea o conexiones remotas después de montar el ISO

Después de montar un ISO, tu servidor aún no está configurado. Como resultado, no se mostrará ningún **estado en línea** en el panel, y las conexiones **RDP** o **SSH** no estarán disponibles. Estas solo estarán accesibles una vez que el sistema operativo haya sido instalado y configurado correctamente.

:::




## Conclusión
¡Felicidades, has seleccionado y montado tu archivo ISO con éxito! Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible diariamente para ayudarte. 🙂



<InlineVoucher />