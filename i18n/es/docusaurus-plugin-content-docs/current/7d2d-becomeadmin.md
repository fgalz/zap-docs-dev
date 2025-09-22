---
id: 7d2d-becomeadmin
title: "7 Days to Die: Cómo convertirse en administrador de 7 Days to Die"
description: Cómo convertirse en administrador de servidores de juego de 7 Days to Die - Documentación de ZAP-Hosting.com
sidebar_label: Convertirse en administrador
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
La asignación de permisos de administrador te permite una administración sencilla y completa con control total sobre tu servidor. Como administrador, tienes la opción de usar todas las opciones y funciones disponibles que ofrece el juego directamente dentro del mismo. A continuación se describirán todos los pasos que debes seguir para asignar permisos de administrador a tu servidor. 
<InlineVoucher />

## Configuración
Agregar un administrador se realiza a través del archivo de configuración **serveradmin.xml**, que puedes encontrar en la interfaz web bajo Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/wXpLL2qyZE2zCYa/preview)

Puedes encontrar tu SteamID64 yendo a tu perfil de Steam y haciendo clic derecho en cualquier parte del mismo. Luego haz clic en **Copiar URL de Steam**. 

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)

Después abre una de las siguientes páginas y pega la URL de tu perfil allí: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Esto te proporcionará información general así como el ID de Steam de tu cuenta. En este caso solo necesitamos el SteamID64. El SteamID64 se especifica luego bajo ``<admins>...</admins>``. Esto se verá así:

```
 <users>
    <user steamID="76561198021925107" name="Pista sobre quién es este usuario" permission_level="0" />
  </users>
```

:::danger  ¿No se reconoce el registro de administrador? 
Asegúrate de eliminar los caracteres de comentario `<!--` y `-->` para que la línea sea válida. De lo contrario, la línea permanecerá solo como un comentario y no se aplicará. Simplemente elimina los caracteres al inicio y al final de la línea para activarla.
:::

El juego ofrece la posibilidad de definir diferentes niveles de permiso para los permisos de administrador. Esto significa que es posible definir diferentes grupos de administradores con distintos permisos. El nivel se define mediante la opción ``permission_level``. Esto puede establecerse de 0 a 1000. Dependiendo de cómo se configure, los administradores tendrán acceso a los permisos asignados. Una vez hecho esto, los permisos de administrador se habrán asignado correctamente. 

## Permisos

Los permisos para todos los comandos de administrador pueden definirse bajo ``permissions``. Para esto, el ``permission_level`` debe ajustarse, tal como cuando agregas administradores. Esto se verá así:

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

Un nivel de permiso es un valor entre 0 y 1000 y determina qué permisos tiene un jugador. 1000 es el más bajo (sin permisos) y 0 es el más alto (permisos completos de administrador). Dependiendo de cómo deban ser los permisos en este sentido, esto debe ajustarse en consecuencia. 

## Conclusión

¡Felicidades, has configurado correctamente los permisos de administrador! Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible diariamente para ayudarte. 🙂

<InlineVoucher />