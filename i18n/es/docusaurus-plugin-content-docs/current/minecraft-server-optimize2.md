---
id: minecraft-server-optimize2
title: "Minecraft: optimización del rendimiento del servidor2"
description: Información sobre cómo optimizar tu servidor de Minecraft de ZAP-Hosting para un mejor rendimiento - documentación de ZAP-Hosting.com
sidebar_label: Optimización del servidor de Minecraft
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### ¿Qué sucede exactamente durante la optimización?

La optimización es un punto importante para los servidores de Minecraft para que puedan funcionar sin problemas y definitivamente deberías tomarte el tiempo suficiente para esto en un servidor público. Solo con mucho tiempo y pruebas es posible lograr el mejor resultado. Por lo tanto, esta documentación no necesariamente debe seguirse exactamente, sino que está destinada más bien como una ayuda para ir en la dirección correcta.

En la mayoría de los casos, la optimización cambia una gran cantidad de configuraciones en los servidores, lo que en algunos casos cambia significativamente el comportamiento del servidor en sí. Entre otras cosas, algunas configuraciones se ajustan, lo que alivia al servidor y puede proporcionar más rendimiento. Sin embargo, para que la experiencia de juego general no se vea demasiado influenciada, siempre debes encontrar el término medio aquí.

## Vanilla

Las opciones para optimizar un servidor vanilla son, lamentablemente, muy limitadas, ya que solo hay unas pocas opciones de configuración disponibles. Intentamos darle un poco más de potencia al servidor vanilla tomando las siguientes medidas:

### Visibilidad

Una medida que se toma muy a menudo es reducir el rango de visión. El rango de visión estándar es de 10 chunks, pero muchos jugadores juegan con mucho menos, como 6-8. Algunos jugadores exageran con los chunks y a veces lo establecen en 32 chunks, lo que significa que el servidor tiene que cargar y procesar todos estos chunks, lo que cuesta mucho rendimiento.

Con un servidor vanilla, el rango de visibilidad se puede ajustar en la configuración "server.properties", para esto se debe ajustar el valor "view-distance". Para no restringir demasiado la experiencia de juego, se recomienda establecer este valor en 5-6, lo que alivia al servidor hasta en un 50%.
Ya tenemos una entrada en nuestra documentación para esto, que se puede encontrar aquí.

### Compresión de datos

En un servidor hay un intercambio permanente entre el servidor y los jugadores conectados. Los movimientos de los propios jugadores se transmiten al servidor y el servidor luego envía esto a todos los demás jugadores. Pero también las acciones de los jugadores o eventos en el mundo, como explosiones, por ejemplo, son parte de los datos que se transmiten una y otra vez.

Para hacer que la regularidad de este intercambio sea un poco más elegante, se puede duplicar el tamaño de los datos empaquetados, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar los mismos datos con los jugadores en comparación con antes. Para esto, el valor "network-compression-threshold" también debe ajustarse en la configuración "server.properties". El valor debe establecerse en 512 aquí. Aquí también, ya tenemos una entrada en nuestra documentación, que se puede encontrar aquí.

## Forge

Al igual que en Vanilla, las opciones que se pueden hacer en el servidor en sí son, lamentablemente, algo limitadas, ya que solo hay archivos de configuración muy pequeños disponibles. Sin embargo, es posible la instalación de mods adicionales, lo que significa que el servidor también puede ser algo optimizado.

### Precarga de chunks

Una posibilidad para aliviar al servidor es que los chunks se precarguen. El servidor solo tiene que cargar los datos de chunk guardados durante la operación posterior con los jugadores y no crear y generar todos los chunks. Este proceso se puede dejar correr mejor durante la noche, que se inicia la noche anterior.

Se debe instalar un mod adicional para esto. Un mod muy adecuado se puede instalar [aquí](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator).
El mod se puede instalar normalmente en el servidor como se describe en nuestras instrucciones.

Antes de reiniciar el servidor, debes asegurarte de que el "max-tick-time" en "server.properties" esté establecido en "-1". De lo contrario, el servidor podría fallar. También es recomendable que haya al menos 8-10 GB de RAM disponibles, ya que este proceso requiere mucha RAM. Para ello, la RAM se puede aumentar brevemente durante la noche, que luego se puede reducir nuevamente después de que se haya completado este proceso.

:::info
Ten en cuenta que el mod mencionado anteriormente puede no ser compatible con la versión de Forge que estás utilizando y el proceso puede diferir del descrito aquí si estás utilizando un mod diferente.
:::

Tan pronto como se inicie el servidor con el mod, se debe abrir la consola. Recomendamos crear un límite para el mundo con un radio de 16,000 bloques. Para ello, se deben ejecutar los siguientes comandos en secuencia:

- worldborder center 0 0
- worldborder set 16000

:::info
Si es necesario, reemplaza las coordenadas por tu propio centro del mundo con el comando center para no "cortar" tu mundo (que puede haber sido construido ya).
:::

Tan pronto como se haya establecido el límite, se puede iniciar la precarga real. Para ello, se debe ejecutar el siguiente comando:

- pregen gen startWorldBorder

Ahora todos los chunks dentro del límite se precargan uno tras otro. Este proceso puede tardar hasta 8 horas dependiendo del número de mods instalados. El progreso de este proceso se muestra siempre en la consola a través de mensajes de información a intervalos regulares. ¡Tan pronto como el proceso haya terminado, esto también se mostrará en la consola!

:::info
El mod aún se puede instalar en el servidor incluso después de que se complete este proceso. Continuará optimizando los chunks durante la operación y también funcionará cuando no haya jugadores en el servidor.
:::

### Visibilidad

Una medida que se toma muy a menudo es reducir el rango de visión. El rango de visión estándar es de 10 chunks, pero muchos jugadores juegan con mucho menos, como 6-8. Algunos jugadores exageran con los chunks y a veces lo establecen en 32 chunks, lo que significa que el servidor tiene que cargar y procesar todos estos chunks, lo que cuesta mucho rendimiento.

La visibilidad de un servidor Forge se puede ajustar en la configuración "server.properties", para esto se debe ajustar el valor "view-distance". Para no restringir demasiado la experiencia de juego, se recomienda establecer este valor en 5-6, lo que alivia al servidor hasta en un 50%.
Ya tenemos una entrada en nuestra documentación para esto, que se puede encontrar aquí.

### Compresión de datos

En un servidor hay un intercambio permanente entre el servidor y los jugadores conectados. Los movimientos de los jugadores mismos se transmiten al servidor y el servidor luego envía esto a todos los demás jugadores. Pero también las acciones de los jugadores o eventos en el mundo, como explosiones, por ejemplo, son parte de los datos que se transmiten una y otra vez.

Para hacer que la regularidad de este intercambio sea un poco más elegante, se puede duplicar el tamaño de los datos empaquetados, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar los mismos datos con los jugadores en comparación con antes. Para esto, el valor "network-compression-threshold" también debe ajustarse en la configuración "server.properties". El valor debe establecerse en 512 aquí. Aquí también, ya tenemos una entrada en nuestra documentación, que se puede encontrar aquí.

## Bukkit

### Visibilidad

Una medida que se toma muy a menudo es reducir el rango de visión. El rango de visión estándar es de 10 chunks, pero muchos jugadores juegan con mucho menos, como 6-8. Algunos jugadores exageran con los chunks y a veces lo establecen en 32 chunks, lo que significa que el servidor tiene que cargar y procesar todos estos chunks, lo que cuesta mucho rendimiento.

La visibilidad de un servidor Forge se puede ajustar en la configuración "server.properties", para esto se debe ajustar el valor "view-distance". Para no restringir demasiado la experiencia de juego, se recomienda establecer este valor en 5-6, lo que alivia al servidor hasta en un 50%.
Ya tenemos una entrada en nuestra documentación para esto, que se puede encontrar aquí.

### Compresión de datos

En un servidor hay un intercambio permanente entre el servidor y los jugadores conectados. Los movimientos de los jugadores mismos se transmiten al servidor y el servidor luego envía esto a todos los demás jugadores. Pero también las acciones de los jugadores o eventos en el mundo, como explosiones, por ejemplo, son parte de los datos que se transmiten una y otra vez.

Para hacer que la regularidad de este intercambio sea un poco más elegante, se puede duplicar el tamaño de los datos empaquetados, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar los mismos datos con los jugadores en comparación con antes. Para esto, el valor "network-compression-threshold" también debe ajustarse en la configuración "server.properties". El valor debe establecerse en 512 aquí. Aquí también, ya tenemos una entrada en nuestra documentación, que se puede encontrar aquí.

### Límites de aparición

En este paso, las tasas de aparición generales de mobs en el servidor se reducen un poco. No hay casi ninguna diferencia notable en comparación con los valores normales. Sin embargo, puede suceder en algunos lugares con granjas de mobs, por ejemplo, que la granja de mobs no funcione como se planeó.

Para ajustar la configuración para esto, se debe editar la configuración "bukkit.yml". Los siguientes valores deben ajustarse en el punto "spawn-limits":
- monsters: 50 #Default: 70
- animals: 10 #Default: 15
- water-animals: 3 #Default: 5
- ambient: 4 #Default: 15

:::info
Por supuesto, también eres bienvenido a ajustar los valores tú mismo si lo deseas, de lo contrario, los valores anteriores son un muy buen promedio.
:::

Para mejorar aún más la aparición, el valor "monster-spawns" en el elemento "ticks-per" también debe cambiarse en la configuración "bukkit.yml":
- monster-spawns: 2 #Default: 1

Si hay un problema general con los monstruos, por ejemplo (como se puede determinar en el informe de tiempo), el valor se puede establecer hasta 5. El comportamiento del servidor debe observarse con cada valor para encontrar el mejor valor para tu propio servidor.

### Procesamiento de chunks

Minecraft trabaja con los llamados chunks. Un chunk siempre está formado por 16x16 bloques, que luego se unen y representan visualmente el mundo para el cliente. Por lo tanto, el servidor solo trabaja con chunks y luego carga los chunks requeridos en la RAM. Cuantos más chunks se carguen y procesen permanentemente por el servidor, más potencia debe proporcionar el servidor para esto, lo que en algunos lugares puede llevar al servidor a sus límites.

Los servidores con la configuración estándar nunca descargarán los chunks cargados, lo que significa que la RAM se utiliza muy intensamente en algunos lugares y se requiere una cantidad enorme de ella. Por supuesto, el rendimiento del servidor se reduce mucho aquí, ya que se debe procesar cada vez más.

Para asegurarse de que el servidor solo cargue los chunks que se necesitan actualmente, las siguientes opciones en la configuración "bukkit.yml" bajo "chunk-gc" deben ajustarse:
- period-in-ticks: 300 #Default: 600
- load-threshold: 300 #Default: 0

La opción "period-in-ticks" determina en qué intervalos en segundos deben descargarse los chunks. Si se desea, este valor también se puede reducir aún más, pero debes tener en cuenta que puede ocurrir un efecto no deseado: un bucle.

En el caso de un bucle, el chunk se descargaría, tras lo cual el chunk solo se necesitaría un poco más tarde, lo que significa que el servidor tendría que invertir rendimiento y tiempo nuevamente para recargar este chunk. Esto se repetiría una y otra vez, lo que pone una mayor carga en el servidor que si los chunks permanecieran cargados un minuto más, por ejemplo.

## Spigot

### Visibilidad

Una medida que se toma muy a menudo es reducir el rango de visión. El rango de visión estándar es de 10 chunks, pero muchos jugadores juegan con mucho menos, como 6-8. Algunos jugadores exageran con los chunks y a veces lo establecen en 32 chunks, lo que significa que el servidor tiene que cargar y procesar todos estos chunks, lo que cuesta mucho rendimiento.

Con un servidor spigot, la visibilidad se puede ajustar en la configuración "spigot.yml", para esto se debe ajustar el valor "view-distance". Para no restringir demasiado la experiencia de juego, se recomienda establecer este valor en 5-6, lo que alivia al servidor hasta en un 50%.

:::info
Dependiendo de tu preferencia, el valor también se puede establecer en 4, lo que, por ejemplo, ayuda muy bien contra el lag cuando operas servidores de mundo de granja que están en la versión 1.13+
:::

### Compresión de datos

En un servidor hay un intercambio permanente entre el servidor y los jugadores conectados. Los movimientos de los jugadores mismos se transmiten al servidor y el servidor luego envía esto a todos los demás jugadores. Pero también las acciones de los jugadores o eventos en el mundo, como explosiones, por ejemplo, son parte de los datos que se transmiten una y otra vez.

Para hacer que la regularidad de este intercambio sea un poco más elegante, se puede duplicar el tamaño de los datos empaquetados, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar los mismos datos con los jugadores en comparación con antes. Para esto, el valor "network-compression-threshold" también debe ajustarse en la configuración "server.properties". El valor debe establecerse en 512 aquí. Aquí también, ya tenemos una entrada en nuestra documentación, que se puede encontrar aquí.

### Límites de aparición

En este paso, las tasas de aparición generales de mobs en el servidor se reducen un poco. No hay casi ninguna diferencia notable en comparación con los valores normales. Sin embargo, puede suceder en algunos lugares con granjas de mobs, por ejemplo, que la granja de mobs no funcione como se planeó.

Para ajustar la configuración para esto, se debe editar la configuración "bukkit.yml". Los siguientes valores deben ajustarse en el punto "spawn-limits":
- monsters: 50 #Default: 70
- animals: 10 #Default: 15
- water-animals: 3 #Default: 5
- ambient: 4 #Default: 15

:::info
Por supuesto, también eres bienvenido a ajustar los valores tú mismo si lo deseas, de lo contrario, los valores anteriores son un muy buen promedio.
:::

Para mejorar aún más la aparición, el valor "monster-spawns" en el elemento "ticks-per" también debe cambiarse en la configuración "bukkit.yml":
- monster-spawns: 2 #Default: 1

Si hay un problema general con los monstruos, por ejemplo (como se puede determinar en el informe de tiempo), el valor se puede establecer hasta 5. El comportamiento del servidor debe observarse con cada valor para encontrar el mejor valor para tu propio servidor.

### Procesamiento de chunks

Minecraft trabaja con los llamados chunks. Un chunk siempre está formado por 16x16 bloques, que luego se unen y representan visualmente el mundo para el cliente. Por lo tanto, el servidor solo trabaja con chunks y luego carga los chunks requeridos en la RAM. Cuantos más chunks se carguen y procesen permanentemente por el servidor, más potencia debe proporcionar el servidor para esto, lo que en algunos lugares puede llevar al servidor a sus límites.

Los servidores con la configuración estándar nunca descargarán los chunks cargados, lo que significa que la RAM se utiliza muy intensamente en algunos lugares y se requiere una cantidad enorme de ella. Por supuesto, el rendimiento del servidor se reduce mucho aquí, ya que se debe procesar cada vez más.

Para asegurarse de que el servidor solo cargue los chunks que se necesitan actualmente, las siguientes opciones en la configuración "bukkit.yml" bajo "chunk-gc" deben ajustarse:
- period-in-ticks: 300 #Default: 600
- load-threshold: 300 #Default: 0

La opción "period-in-ticks" determina en qué intervalos en segundos deben descargarse los chunks. Si se desea, este valor también se puede reducir aún más, pero debes tener en cuenta que puede ocurrir un efecto no deseado: un bucle.

En el caso de un bucle, el chunk se descargaría, tras lo cual el chunk solo se necesitaría un poco más tarde, lo que significa que el servidor tendría que invertir rendimiento y tiempo nuevamente para recargar este chunk. Esto se repetiría una y otra vez, lo que pone una mayor carga en el servidor que si los chunks permanecieran cargados un minuto más, por ejemplo.

### Rango de aparición

Los mobs siempre pueden aparecer de los jugadores en ciertos intervalos. Aquí estamos reduciendo un poco esta tasa para que no haya problemas con la aparición de mobs. Esta configuración es muy importante, ya que algunas de las configuraciones para la aparición ya se han ajustado, las cuales se explicaron anteriormente.

Cambiamos las siguientes configuraciones en la configuración "spigot.yml" en "world-settings":
- mob-spawn-range: 3 #Default: 4

### Rangos de entidades

En este punto, ahora establecemos cuándo se activan las entidades, es decir, animales y monstruos. Esto significa que los animales pueden moverse, por ejemplo, o los monstruos también pueden reconocer a los jugadores. Básicamente, esto está activado para todos los mobs, pero en una especie de modo de espera. En modo de espera, los mobs pueden seguir moviéndose y también reconocer a los jugadores, pero, por ejemplo, los mobs solo pueden moverse muy lentamente, lo que significa que el servidor no tiene que proporcionar mucha potencia.

Aquí también, los cambios deben hacerse en la configuración "spigot.yml" bajo el elemento "entity-activation-range". Recomendamos usar los siguientes valores:
- animals: 6 #Default: 32
- monsters: 16 #Default: 32
- misc: 2 #Default: 16
- water: 6 #Default: 6
- tick-inactive-villagers: true #Default: true

### Optimización de embudos

Los embudos son una parte muy importante del juego en Minecraft. ¡Pero para los servidores, estos son un verdadero veneno! Por cada embudo establecido, el servidor tiene que verificar 20 veces por segundo si un ítem está listo para ser recogido. ¡Mover los ítems de embudo a embudo o en una caja también cuesta trabajo valioso!

Para mejorar un poco todo esto, aumentamos los intervalos de tiempo en los que el servidor debe llevar a cabo tales acciones. Con los valores utilizados aquí, tal acción se lleva a cabo y se verifica cada 3 segundos. Las tasas de transferencia no cambian aquí. Sin embargo, puede suceder que los relojes de redstone que se crearon con embudos pueden no funcionar correctamente.

Para ajustar la configuración, los siguientes valores deben ajustarse en la configuración "spigot.yml":
- hopper-transfer: 24 #Default: 8
- hopper-check: 24 #Default: 8
- hopper-amount: 3 #Default: 1

:::info
¡Asegúrate de que el valor "use-hopper-check" esté establecido en "true" en la configuración "paper.yml"!
:::

### Colisiones

Desde la versión 1.9 de Minecraft, ha habido colisiones, por lo que, por ejemplo, ya no puede haber más de un jugador en el mismo lugar. Aquí determinamos con qué frecuencia las entidades pueden colisionar en general. Especialmente en granjas de mobs, donde muchos mobs se encuentran en un espacio reducido, esto puede a veces poner una carga pesada en el servidor.

Para adaptar la configuración, el siguiente valor debe ajustarse en "spigot.yml":
- max-entity-collisions: 1 #Default: 8

Dado que las colisiones no tienen un efecto real en los mobs, la configuración se puede reducir aquí. ¡Este valor no se utiliza para los jugadores, solo para los mobs!

### Radio de fusión

El radio de fusión determina qué ítems y XP se fusionan, lo que significa que el servidor tiene que procesar menos entidades. Especialmente en servidores donde hay muchos ítems en el suelo, esto puede tener un efecto positivo para los jugadores si se aumenta este radio. Aquí también, la regla es que encuentres un buen valor medio, de lo contrario, puede ocurrir un efecto de lag, lo que significa que el servidor tiene que verificar un rango más alto, lo que requiere demasiada potencia.

Para adaptar la configuración, los siguientes valores deben ajustarse bajo el elemento "merge-radius" en el "spigot.yml":
- item: 4.0 #Default 2.5
- exp: 6.0 #Default: 3.0

:::info
¡Los valores aquí no deben establecerse más altos que 8, de lo contrario, puede surgir el efecto de lag mencionado anteriormente!
:::

## Paper Spigot

### Visibilidad

Una medida que se toma muy a menudo es reducir el rango de visión. El rango de visión estándar es de 10 chunks, pero muchos jugadores juegan con mucho menos, como 6-8. Algunos jugadores exageran con los chunks y a veces lo establecen en 32 chunks, lo que significa que el servidor tiene que cargar y procesar todos estos chunks, lo que cuesta mucho rendimiento.

Con un servidor (paper) spigot, el rango de visión se puede ajustar en la configuración "spigot.yml", para esto se debe ajustar el valor "view-distance". Para no restringir demasiado la experiencia de juego, se recomienda establecer este valor en 5-6, lo que alivia al servidor hasta en un 50%.

:::info
Dependiendo de tu preferencia, el valor también se puede establecer en 4, lo que, por ejemplo, ayuda muy bien contra el lag cuando operas servidores de mundo de granja que están en la versión 1.13+
:::

### Compresión de datos

En un servidor hay un intercambio permanente entre el servidor y los jugadores conectados. Los movimientos de los jugadores mismos se transmiten al servidor y el servidor luego envía esto a todos los demás jugadores. Pero también las acciones de los jugadores o eventos en el mundo, como explosiones, por ejemplo, son parte de los datos que se transmiten una y otra vez.

Para hacer que la regularidad de este intercambio sea un poco más elegante, se puede duplicar el tamaño de los datos empaquetados, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar los mismos datos con los jugadores en comparación con antes. Para esto, el valor "network-compression-threshold" también debe ajustarse en la configuración "server.properties". El valor debe establecerse en 512 aquí. Aquí también, ya tenemos una entrada en nuestra documentación, que se puede encontrar aquí.

### Límites de aparición

En este paso, las tasas de aparición generales de mobs en el servidor se reducen un poco. No hay casi ninguna diferencia notable en comparación con los valores normales. Sin embargo, puede suceder en algunos lugares con granjas de mobs, por ejemplo, que la granja de mobs no funcione como se planeó.

Para ajustar la configuración para esto, se debe editar la configuración "bukkit.yml". Los siguientes valores deben ajustarse en el punto "spawn-limits":
- monsters: 50 #Default: 70
- animals: 10 #Default: 15
- water-animals: 3 #Default: 5
- ambient: 4 #Default: 15

:::info
Por supuesto, también eres bienvenido a ajustar los valores tú mismo si lo deseas, de lo contrario, los valores anteriores son un muy buen promedio.
:::

Para mejorar aún más la aparición, el valor "monster-spawns" en el elemento "ticks-per" también debe cambiarse en la configuración "bukkit.yml":
- monster-spawns: 2 #Default: 1

Si hay un problema general con los monstruos, por ejemplo (como se puede determinar en el informe de tiempo), el valor se puede establecer hasta 5. El comportamiento del servidor debe observarse con cada valor para encontrar el mejor valor para tu propio servidor.

### Procesamiento de chunks

Minecraft trabaja con los llamados chunks. Un chunk siempre está formado por 16x16 bloques, que luego se unen y representan visualmente el mundo para el cliente. Por lo tanto, el servidor solo trabaja con chunks y luego carga los chunks requeridos en la RAM. Cuantos más chunks se carguen y procesen permanentemente por el servidor, más potencia debe proporcionar el servidor para esto, lo que en algunos lugares puede llevar al servidor a sus límites.

Los servidores con la configuración estándar nunca descargarán los chunks cargados, lo que significa que la RAM se utiliza muy intensamente en algunos lugares y se requiere una cantidad enorme de ella. Por supuesto, el rendimiento del servidor se reduce mucho aquí, ya que se debe procesar cada vez más.

Para asegurarse de que el servidor solo cargue los chunks que se necesitan actualmente, las siguientes opciones en la configuración "bukkit.yml" bajo "chunk-gc" deben ajustarse:
- period-in-ticks: 300 #Default: 600
- load-threshold: 300 #Default: 0

La opción "period-in-ticks" determina en qué intervalos en segundos deben descargarse los chunks. Si se desea, este valor también se puede reducir aún más, pero debes tener en cuenta que puede ocurrir un efecto no deseado: un bucle.

En el caso de un bucle, el chunk se descargaría, tras lo cual el chunk solo se necesitaría un poco más tarde, lo que significa que el servidor tendría que invertir rendimiento y tiempo nuevamente para recargar este chunk. Esto se repetiría una y otra vez, lo que pone una mayor carga en el servidor que si los chunks permanecieran cargados un minuto más, por ejemplo.

### Rango de aparición

Los mobs siempre pueden aparecer de los jugadores en ciertos intervalos. Aquí estamos reduciendo un poco esta tasa para que no haya problemas con la aparición de mobs. Esta configuración es muy importante, ya que algunas de las configuraciones para la aparición ya se han ajustado, las cuales se explicaron anteriormente.

Cambiamos las siguientes configuraciones en la configuración "spigot.yml" en "world-settings":
- mob-spawn-range: 3 #Default: 4

### Mob-Spawner

Especialmente en servidores de construcción de ciudades, los spawners se utilizan muy a menudo y a veces en grandes cantidades. Los spawners crean cada vez más mobs en el servidor, lo que puede llevar a muchos problemas.

Esta opción ajusta el comportamiento de aparición del spawner de manera que el servidor active el spawner en intervalos cortos. Para esto, el siguiente valor en "paper.yml" debe ajustarse:
- mob-spawner-tick-rate: 3 #Default: 1

:::info
El valor utilizado anteriormente no cambia demasiado el comportamiento y no afecta realmente el comportamiento del juego.
:::

### Rangos de entidades

En este punto, ahora establecemos cuándo se activan las entidades, es decir, animales y monstruos. Esto significa que los animales pueden moverse, por ejemplo, o los monstruos también pueden reconocer a los jugadores. Básicamente, esto está activado para todos los mobs, pero en una especie de modo de espera. En modo de espera, los mobs pueden seguir moviéndose y también reconocer a los jugadores, pero, por ejemplo, los mobs solo pueden moverse muy lentamente, lo que significa que el servidor no tiene que proporcionar mucha potencia.

Aquí también, los cambios deben hacerse en la configuración "spigot.yml" bajo el elemento "entity-activation-range". Recomendamos usar los siguientes valores:
- animals: 6 #Default: 32
- monsters: 16 #Default: 32
- misc: 2 #Default: 16
- water: 6 #Default: 6
- tick-inactive-villagers: true #Default: true

### Optimización de embudos

Los embudos son una parte muy importante del juego en Minecraft. ¡Pero para los servidores, estos son un verdadero veneno! Por cada embudo establecido, el servidor tiene que verificar 20 veces por segundo si un ítem está listo para ser recogido. ¡Mover los ítems de embudo a embudo o en una caja también cuesta trabajo valioso!

Para mejorar un poco todo esto, aumentamos los intervalos de tiempo en los que el servidor debe llevar a cabo tales acciones. Con los valores utilizados aquí, tal acción se lleva a cabo y se verifica cada 3 segundos. Las tasas de transferencia no cambian aquí. Sin embargo, puede suceder que los relojes de redstone que se crearon con embudos pueden no funcionar correctamente.

Para ajustar la configuración, los siguientes valores deben ajustarse en la configuración "spigot.yml":
- hopper-transfer: 24 #Default: 8
- hopper-check: 24 #Default: 8
- hopper-amount: 3 #Default: 1

:::info
¡Asegúrate de que el valor "use-hopper-check" esté establecido en "true" en la configuración "paper.yml"!
:::

### Colisiones

Desde la versión 1.9 de Minecraft, ha habido colisiones, por lo que, por ejemplo, ya no puede haber más de un jugador en el mismo lugar. Aquí determinamos con qué frecuencia las entidades pueden colisionar en general. Especialmente en granjas de mobs, donde muchos mobs se encuentran en un espacio reducido, esto puede a veces poner una carga pesada en el servidor.

Para adaptar la configuración, el siguiente valor debe ajustarse en "spigot.yml":
- max-entity-collisions: 1 #Default: 8

Dado que las colisiones no tienen un efecto real en los mobs, la configuración se puede reducir aquí. ¡Este valor no se utiliza para los jugadores, solo para los mobs!

### Radio de fusión

El radio de fusión determina qué ítems y XP se fusionan, lo que significa que el servidor tiene que procesar menos entidades. Especialmente en servidores donde hay muchos ítems en el suelo, esto puede tener un efecto positivo para los jugadores si se aumenta este radio. Aquí también, la regla es que encuentres un buen valor medio, de lo contrario, puede ocurrir un efecto de lag, lo que significa que el servidor tiene que verificar un rango más alto, lo que requiere demasiada potencia.

Para adaptar la configuración, los siguientes valores deben ajustarse bajo el elemento "merge-radius" en el "spigot.yml":
- item: 4.0 #Default 2.5
- exp: 6.0 #Default: 3.0

:::info
¡Los valores aquí no deben establecerse más altos que 8, de lo contrario, puede surgir el efecto de lag mencionado anteriormente!
:::

### Explosiones

En Paper Spigot, muchas partes de los servidores de Minecraft han sido reprogramadas para hacer que el servidor funcione mejor. ¡Esto también se aplica a las explosiones! Aquí, el software maneja las explosiones mejor, de modo que se evitan grandes lags en el servidor.

Para esto, el siguiente valor en la configuración "paper.yml" debe ajustarse:
- optimize-explosions: true #Default: false

### Cofres

Incluso con las cajas hay una pequeña cosa que se puede optimizar. Si un gato está sentado sobre la caja, no se puede abrir. Para que el servidor pueda verificar esto, el servidor tiene que revisar todos los mobs en un cierto radio y verificar si uno de estos mobs está sentado sobre la caja, lo que lamentablemente es muy laborioso y cada vez que se abre una caja.

La opción se puede desactivar fácilmente con el siguiente cambio:
- disable-chest-cat-detection: true #Default: false

### Inventarios

El inventario se utiliza mucho, pero el inventario no es solo un inventario. Por ejemplo, una caja o una mesa de trabajo también es un inventario. Con este cambio, también puedes darle al servidor una buena apariencia sin que nadie lo note. Aquí, básicamente solo establecemos el número de ticks después de los cuales el servidor debe actualizar cada inventario.

Para esto, el siguiente valor debe editarse en la configuración "paper.yml":
- container-update-tick-rate: 3 #Default: 1

:::info
El valor no debe establecerse más alto que 5, de lo contrario, el inventario puede ser un poco problemático. En modos de juego como SurvivalGames, donde todos los jugadores quieren acceder a las cajas en el medio y obtener los mejores ítems, el valor no debe cambiarse y debe dejarse en "1".
:::

### Actualizaciones de luz

Aquí también, Paper Spigot ofrece una opción alternativa para que las actualizaciones de luz en el mundo se realicen mejor. Con este método, las actualizaciones de luz no se realizan dentro de un tick, lo que puede, dependiendo de la magnitud de la actualización, a veces llevar al servidor a un punto muerto, sino fuera del tick. Todo esto se llama hilos asíncronos en Minecraft.

Para esto, también se debe realizar el siguiente cambio en la configuración "paper.yml":
- queue-light-updates: true #Default: false

### Guardando datos de chunks

Tan pronto como se han realizado cambios en un chunk, los cambios no se escriben directamente en el disco duro, sino que primero se cargan en la RAM. Sin embargo, todos los cambios se guardan con mucha frecuencia, lo que a veces puede causar un lag extremo, especialmente cuando el servidor quiere guardar cambios masivos.

Con este cambio, estamos reduciendo el número máximo de chunks que se pueden guardar en un proceso de guardado. Al cambiar esta opción, la RAM se utiliza más en algunos lugares porque los cambios permanecen en la RAM por más tiempo.

Los cambios en la siguiente configuración deben hacerse en la configuración "paper.yml":
- max-auto-save-chunks-per-tick: 10 #Default: 24

### Redstone

El redstone se utiliza muy a menudo con circuitos a veces extremadamente grandes. En servidores públicos, este es a veces incluso el punto más débil en casi el 90% de los servidores, ya que se pueden causar lags masivos con el redstone. Aquí también utilizamos un procesamiento alternativo de Redstone de Paper Spigot, que hace que el Redstone sea casi inofensivo y tenga la misma funcionalidad que en Vanilla.

Para esto, se debe realizar la siguiente configuración en "paper.yml":
- use-faster-eigencraft-redstone: true #Default: false

:::info
**¡Peligro! En algunas situaciones, esto puede cambiar mucho la forma en que funciona el Redstone!**
:::

<InlineVoucher />