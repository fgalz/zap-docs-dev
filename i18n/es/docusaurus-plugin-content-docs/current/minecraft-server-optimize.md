---
id: minecraft-server-optimize
title: "Minecraft: optimización del rendimiento del servidor"
description: Información sobre cómo optimizar tu servidor de Minecraft de ZAP-Hosting para un mejor rendimiento - Documentación de ZAP-Hosting.com
sidebar_label: Optimización del Servidor Minecraft
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### ¿Qué sucede exactamente durante la optimización?

La optimización es un punto importante para los servidores de Minecraft para que puedan funcionar sin problemas y definitivamente deberías dedicar suficiente tiempo a esto en un servidor público. Solo con mucho tiempo y pruebas es posible lograr el mejor resultado. Por lo tanto, esta documentación no debe seguirse necesariamente al pie de la letra, sino que está destinada como una ayuda para ir en la dirección correcta.

En la mayoría de los casos, la optimización cambia una gran cantidad de configuraciones en los servidores, lo que en algunos casos cambia significativamente el comportamiento del propio servidor. Entre otras cosas, algunas configuraciones se ajustan estrictamente, lo que alivia el servidor y puede proporcionar así más rendimiento. Sin embargo, para que la experiencia general de juego no se vea demasiado afectada, siempre debes encontrar el punto medio adecuado aquí.

## Vanilla

Las opciones para optimizar un servidor vanilla son lamentablemente muy limitadas, ya que solo hay pocas opciones de configuración disponibles. Intentamos darle un poco más de potencia al servidor vanilla tomando las siguientes medidas:

### Visibilidad

Una medida que se toma muy a menudo es reducir el rango de visión. El rango de visión estándar es de 10 chunks, pero muchos jugadores juegan con muchos menos, como 6-8. Algunos jugadores exageran con los chunks y a veces lo configuran a 32 chunks como ejemplo, lo que significa que el servidor tiene que cargar y procesar todos estos chunks, lo que cuesta mucho rendimiento.

Con un servidor vanilla, el rango de visibilidad se puede ajustar en la configuración "server.properties", para esto se debe ajustar el valor "view-distance". Para no restringir demasiado la experiencia de juego, se recomienda establecer este valor en 5-6, lo que alivia el servidor hasta en un 50%.
Ya tenemos una entrada en nuestra documentación para esto, que se puede encontrar aquí.

### Compresión de datos

En un servidor hay un intercambio permanente entre el servidor y los jugadores conectados. Los movimientos de los propios jugadores se transmiten al servidor y el servidor luego envía esto a todos los demás jugadores. Pero también las acciones de los jugadores o eventos en el mundo, como explosiones por ejemplo, forman parte de los datos que se transmiten una y otra vez.

Para hacer que la regularidad de este intercambio sea un poco más elegante, el tamaño de los datos comprimidos puede duplicarse, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar los mismos datos con los jugadores en comparación con antes. Para ello, también se debe ajustar el valor "network-compression-threshold" en la configuración "server.properties". El valor debe establecerse en 512 aquí. Aquí también ya tenemos una entrada en nuestra documentación, que puede estar aquí.

## Forge

Similar a Vanilla, las opciones que se pueden hacer en el propio servidor son lamentablemente algo limitadas, ya que solo están disponibles archivos de configuración muy pequeños. Sin embargo, es posible la instalación de mods adicionales, lo que significa que el servidor también puede ser algo aliviado.

### Precarga de chunks

Una posibilidad para aliviar el servidor es que los chunks se precarguen. El servidor entonces solo tiene que cargar los datos de chunks guardados durante la operación posterior con jugadores y no crear y generar todos los chunks. Este proceso es mejor dejarlo correr durante la noche, que se inicia la noche anterior.

Se debe instalar un mod adicional para esto. Un mod muy adecuado puede instalarse [aquí](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator).
El mod luego puede instalarse normalmente en el servidor como se describe en nuestras instrucciones.

Antes de reiniciar el servidor, debes asegurarte de que "max-tick-time" en "server.properties" esté configurado en "-1". De lo contrario, el servidor podría fallar. También es recomendable que haya al menos 8-10 GB de RAM disponibles, ya que este proceso lamentablemente requiere mucha RAM. Para ello, la RAM puede actualizarse brevemente durante la noche, y luego reducirse nuevamente después de que se haya completado este proceso.

:::info
Ten en cuenta que el mod mencionado arriba puede no ser compatible con la versión de Forge que estás usando y el proceso puede diferir del descrito aquí si usas un mod diferente.
:::

Tan pronto como el servidor se inicie con el mod, se debe abrir la consola. Recomendamos crear un borde para el mundo con un radio de 16,000 bloques. Para ello, se deben ejecutar los siguientes comandos en secuencia:

- worldborder center 0 0
- worldborder set 16000

:::info
Si es necesario, reemplaza las coordenadas por el centro propio del mundo con el comando center para no "cortar" tu mundo (que ya puede haber sido construido).
:::

Tan pronto como se haya establecido el borde, se puede iniciar la precarga real. Para ello, se debe ejecutar el siguiente comando:

- pregen gen startWorldBorder

Ahora todos los chunks dentro del borde se precargan uno tras otro. Este proceso puede tardar hasta 8 horas dependiendo del número de mods instalados. El progreso de este proceso siempre se muestra en la consola mediante mensajes de información a intervalos regulares. ¡Tan pronto como el proceso termine, también se muestra en la consola!

:::info
El mod aún puede instalarse en el servidor incluso después de que este proceso haya finalizado. Continuará optimizando chunks durante la operación y también funcionará cuando no haya ningún jugador en el servidor.
:::

### Visibilidad

Una medida que se toma muy a menudo es reducir el rango de visión. El rango de visión estándar es de 10 chunks, pero muchos jugadores juegan con muchos menos, como 6-8. Algunos jugadores exageran con los chunks y a veces lo configuran a 32 chunks como ejemplo, lo que significa que el servidor tiene que cargar y procesar todos estos chunks, lo que cuesta mucho rendimiento.

La visibilidad de un servidor Forge se puede ajustar en la configuración "server.properties", para esto se debe ajustar el valor "view-distance". Para no restringir demasiado la experiencia de juego, se recomienda establecer este valor en 5-6, lo que alivia el servidor hasta en un 50%.
Ya tenemos una entrada en nuestra documentación para esto, que se puede encontrar aquí.

### Compresión de datos

En un servidor hay un intercambio permanente entre el servidor y los jugadores conectados. Los movimientos de los propios jugadores se transmiten al servidor y el servidor luego envía esto a todos los demás jugadores. Pero también las acciones de los jugadores o eventos en el mundo, como explosiones por ejemplo, forman parte de los datos que se transmiten una y otra vez.

Para hacer que la regularidad de este intercambio sea un poco más elegante, el tamaño de los datos comprimidos puede duplicarse, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar los mismos datos con los jugadores en comparación con antes. Para ello, también se debe ajustar el valor "network-compression-threshold" en la configuración "server.properties". El valor debe establecerse en 512 aquí. Aquí también ya tenemos una entrada en nuestra documentación, que puede estar aquí.

## Bukkit

### Visibilidad

Una medida que se toma muy a menudo es reducir el rango de visión. El rango de visión estándar es de 10 chunks, pero muchos jugadores juegan con muchos menos, como 6-8. Algunos jugadores exageran con los chunks y a veces lo configuran a 32 chunks como ejemplo, lo que significa que el servidor tiene que cargar y procesar todos estos chunks, lo que cuesta mucho rendimiento.

La visibilidad de un servidor Forge se puede ajustar en la configuración "server.properties", para esto se debe ajustar el valor "view-distance". Para no restringir demasiado la experiencia de juego, se recomienda establecer este valor en 5-6, lo que alivia el servidor hasta en un 50%.
Ya tenemos una entrada en nuestra documentación para esto, que se puede encontrar aquí.

### Compresión de datos

En un servidor hay un intercambio permanente entre el servidor y los jugadores conectados. Los movimientos de los propios jugadores se transmiten al servidor y el servidor luego envía esto a todos los demás jugadores. Pero también las acciones de los jugadores o eventos en el mundo, como explosiones por ejemplo, forman parte de los datos que se transmiten una y otra vez.

Para hacer que la regularidad de este intercambio sea un poco más elegante, el tamaño de los datos comprimidos puede duplicarse, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar los mismos datos con los jugadores en comparación con antes. Para ello, también se debe ajustar el valor "network-compression-threshold" en la configuración "server.properties". El valor debe establecerse en 512 aquí. Aquí también ya tenemos una entrada en nuestra documentación, que puede estar aquí.

### Límites de aparición

En este paso, las tasas generales de aparición de mobs en el servidor se reducen un poco. No hay casi ninguna diferencia perceptible en comparación con los valores normales. Sin embargo, puede suceder en algunos lugares con granjas de mobs como ejemplo que la granja de mobs no funcione como se planeó.

Para ajustar la configuración para esto, se debe editar la configuración "bukkit.yml". Los siguientes valores deben ajustarse en el punto "spawn-limits":
- monsters: 50 #Por defecto: 70
- animals: 10 #Por defecto: 15
- water-animals: 3 #Por defecto: 5
- ambient: 4 #Por defecto: 15

:::info
Por supuesto, aún puedes ajustar los valores tú mismo si lo deseas, de lo contrario los valores anteriores son un promedio muy bueno.
:::

Para mejorar aún más la aparición, también se debe cambiar el valor "monster-spawns" en el elemento "ticks-per" en la configuración "bukkit.yml":
- monster-spawns: 2 #Por defecto: 1

Si hay un problema general con los mobs como ejemplo (como se puede determinar en el informe de tiempos), el valor puede establecerse hasta 5. Luego se debe observar el comportamiento del servidor con cada valor para encontrar el mejor valor para tu propio servidor.

### Procesamiento de chunks

Minecraft funciona con los llamados chunks. Un chunk siempre está formado por 16x16 bloques, que luego se unen y representan visualmente el mundo para el cliente. Por lo tanto, el servidor solo trabaja con chunks y luego carga los chunks requeridos en la RAM. Cuantos más chunks se cargan y procesan permanentemente por el servidor, más potencia debe proporcionar el servidor para esto, lo que en algunos lugares hace que el servidor se ralentice.

Los servidores con la configuración estándar nunca descargan chunks cargados, lo que significa que la RAM se usa mucho en algunos lugares y se requiere una cantidad enorme de ella. Por supuesto, el rendimiento del servidor se reduce mucho aquí, ya que cada vez más tiene que procesarse.

Para asegurarse de que el servidor solo cargue los chunks que se necesitan actualmente, se deben ajustar las siguientes opciones en la configuración "bukkit.yml" bajo "chunk-gc":
- period-in-ticks: 300 #Por defecto: 600
- load-threshold: 300 #Por defecto: 0

La opción "period-in-ticks" determina en qué intervalos en segundos se deben descargar los chunks. Si se desea, este valor también puede reducirse aún más, pero debes tener en cuenta que puede ocurrir un efecto no deseado: un bucle

En caso de un bucle, el chunk se descargaría, tras lo cual el chunk solo se necesita un poco después, lo que significa que el servidor debe invertir rendimiento y tiempo nuevamente para recargar este chunk. Esto se repetiría una y otra vez, lo que carga más al servidor que si los chunks permanecieran cargados un minuto más por ejemplo.

## Spigot

### Visibilidad

Una medida que se toma muy a menudo es reducir el rango de visión. El rango de visión estándar es de 10 chunks, pero muchos jugadores juegan con muchos menos, como 6-8. Algunos jugadores exageran con los chunks y a veces lo configuran a 32 chunks como ejemplo, lo que significa que el servidor tiene que cargar y procesar todos estos chunks, lo que cuesta mucho rendimiento.

Con un servidor spigot, la visibilidad se puede ajustar en la configuración "spigot.yml", para esto se debe ajustar el valor "view-distance". Para no restringir demasiado la experiencia de juego, se recomienda establecer este valor en 5-6, lo que alivia el servidor hasta en un 50%.

:::info
Dependiendo de tu preferencia, el valor también puede establecerse en 4, lo que por ejemplo ayuda mucho contra el lag cuando operas servidores de mundos de granja que funcionan en la versión 1.13+
:::

### Compresión de datos

En un servidor hay un intercambio permanente entre el servidor y los jugadores conectados. Los movimientos de los propios jugadores se transmiten al servidor y el servidor luego envía esto a todos los demás jugadores. Pero también las acciones de los jugadores o eventos en el mundo, como explosiones por ejemplo, forman parte de los datos que se transmiten una y otra vez.

Para hacer que la regularidad de este intercambio sea un poco más elegante, el tamaño de los datos comprimidos puede duplicarse, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar los mismos datos con los jugadores en comparación con antes. Para ello, también se debe ajustar el valor "network-compression-threshold" en la configuración "server.properties". El valor debe establecerse en 512 aquí. Aquí también ya tenemos una entrada en nuestra documentación, que puede estar aquí.

### Límites de aparición

En este paso, las tasas generales de aparición de mobs en el servidor se reducen un poco. No hay casi ninguna diferencia perceptible en comparación con los valores normales. Sin embargo, puede suceder en algunos lugares con granjas de mobs como ejemplo que la granja de mobs no funcione como se planeó.

Para ajustar la configuración para esto, se debe editar la configuración "bukkit.yml". Los siguientes valores deben ajustarse en el punto "spawn-limits":
- monsters: 50 #Por defecto: 70
- animals: 10 #Por defecto: 15
- water-animals: 3 #Por defecto: 5
- ambient: 4 #Por defecto: 15

:::info
Por supuesto, aún puedes ajustar los valores tú mismo si lo deseas, de lo contrario los valores anteriores son un promedio muy bueno.
:::

Para mejorar aún más la aparición, también se debe cambiar el valor "monster-spawns" en el elemento "ticks-per" en la configuración "bukkit.yml":
- monster-spawns: 2 #Por defecto: 1

Si hay un problema general con los mobs como ejemplo (como se puede determinar en el informe de tiempos), el valor puede establecerse hasta 5. Luego se debe observar el comportamiento del servidor con cada valor para encontrar el mejor valor para tu propio servidor.

### Procesamiento de chunks

Minecraft funciona con los llamados chunks. Un chunk siempre está formado por 16x16 bloques, que luego se unen y representan visualmente el mundo para el cliente. Por lo tanto, el servidor solo trabaja con chunks y luego carga los chunks requeridos en la RAM. Cuantos más chunks se cargan y procesan permanentemente por el servidor, más potencia debe proporcionar el servidor para esto, lo que en algunos lugares hace que el servidor se ralentice.

Los servidores con la configuración estándar nunca descargan chunks cargados, lo que significa que la RAM se usa mucho en algunos lugares y se requiere una cantidad enorme de ella. Por supuesto, el rendimiento del servidor se reduce mucho aquí, ya que cada vez más tiene que procesarse.

Para asegurarse de que el servidor solo cargue los chunks que se necesitan actualmente, se deben ajustar las siguientes opciones en la configuración "bukkit.yml" bajo "chunk-gc":
- period-in-ticks: 300 #Por defecto: 600
- load-threshold: 300 #Por defecto: 0

La opción "period-in-ticks" determina en qué intervalos en segundos se deben descargar los chunks. Si se desea, este valor también puede reducirse aún más, pero debes tener en cuenta que puede ocurrir un efecto no deseado: un bucle

En caso de un bucle, el chunk se descargaría, tras lo cual el chunk solo se necesita un poco después, lo que significa que el servidor debe invertir rendimiento y tiempo nuevamente para recargar este chunk. Esto se repetiría una y otra vez, lo que carga más al servidor que si los chunks permanecieran cargados un minuto más por ejemplo.

### Rango de aparición

Los mobs siempre pueden aparecer a cierta distancia de los jugadores. Aquí reducimos un poco esta tasa para que no haya problemas con la aparición de mobs. Esta configuración es muy importante, ya que algunas de las configuraciones para la aparición ya se han ajustado, como se explicó arriba.

Cambiamos las siguientes configuraciones en "spigot.yml" en "world-settings":
- mob-spawn-range: 3 #Por defecto: 4

### Rangos de entidad

Aquí ahora configuramos cuándo se activan las entidades, es decir, animales y monstruos. Esto significa que los animales pueden moverse por ejemplo o los monstruos también pueden reconocer a los jugadores. Básicamente esto está activado para todos los mobs, pero en una especie de modo de espera. En modo de espera, los mobs pueden seguir moviéndose y también reconocer a los jugadores, pero por ejemplo, los mobs solo pueden moverse muy lentamente, lo que significa que el servidor no tiene que proporcionar mucha potencia.

Aquí también se deben hacer los cambios en la configuración "spigot.yml" bajo el elemento "entity-activation-range". Recomendamos usar los siguientes valores:
- animals: 6 #Por defecto: 32
- monsters: 16 #Por defecto: 32
- misc: 2 #Por defecto: 16
- water: 6 #Por defecto: 6
- tick-inactive-villagers: true #Por defecto: true

### Optimización de tolvas

Las tolvas son una parte muy importante del juego en Minecraft. ¡Pero para los servidores son un verdadero veneno! Por cada tolva configurada, el servidor tiene que comprobar 20 veces por segundo si hay un objeto listo para ser recogido. ¡Mover los objetos de tolva en tolva o en un cofre también cuesta trabajo valioso!

Para mejorar un poco todo esto, aumentamos los intervalos de tiempo en los que el servidor debe realizar tales acciones. Con los valores usados aquí, tal acción se realiza y verifica cada 3 segundos. Las tasas de transferencia no cambian aquí. Sin embargo, puede suceder que los relojes de redstone que se crearon con tolvas ya no funcionen correctamente.

Para ajustar la configuración, se deben ajustar los siguientes valores en la configuración "spigot.yml":
- hopper-transfer: 24 #Por defecto: 8
- hopper-check: 24 #Por defecto: 8
- hopper-amount: 3 #Por defecto: 1

### Colisiones

Desde la versión 1.9 de Minecraft existen colisiones, por ejemplo, ya no puede haber un jugador dentro de otro jugador. Aquí determinamos con qué frecuencia las entidades pueden colisionar en general. Especialmente en granjas de mobs, donde muchos mobs se encuentran en un espacio estrecho, esto a veces puede cargar mucho el servidor.

Para adaptar la configuración, se debe ajustar el siguiente valor en "spigot.yml":
- max-entity-collisions: 1 #Por defecto: 8

Como las colisiones no tienen un efecto real en los mobs, la configuración puede reducirse aquí. ¡Este valor no se usa para jugadores, solo para mobs!

### Radio de fusión

El radio de fusión determina qué objetos y XP se fusionan, lo que significa que el servidor tiene que procesar menos entidades. Especialmente en servidores donde hay muchos objetos en el suelo, esto puede tener un efecto positivo para los jugadores si se aumenta este radio. Aquí también se aplica la regla de encontrar un buen valor medio, de lo contrario vuelve a ocurrir una especie de efecto de lag, lo que significa que el servidor tiene que comprobar un rango mayor, lo que luego requiere demasiada potencia.

Para adaptar la configuración, se deben ajustar los siguientes valores bajo el elemento "merge-radius" en "spigot.yml":
- item: 4.0 #Por defecto 2.5
- exp: 6.0 #Por defecto: 3.0

:::info
¡Los valores aquí no deben establecerse por encima de 8, de lo contrario puede surgir el efecto de lag mencionado arriba!
:::

## Paper Spigot

### Visibilidad

Una medida que se toma muy a menudo es reducir el rango de visión. El rango de visión estándar es de 10 chunks, pero muchos jugadores juegan con muchos menos, como 6-8. Algunos jugadores exageran con los chunks y a veces lo configuran a 32 chunks como ejemplo, lo que significa que el servidor tiene que cargar y procesar todos estos chunks, lo que cuesta mucho rendimiento.

Con un servidor (paper) spigot, el rango de visión se puede ajustar en la configuración "spigot.yml", para esto se debe ajustar el valor "view-distance". Para no restringir demasiado la experiencia de juego, se recomienda establecer este valor en 5-6, lo que alivia el servidor hasta en un 50%.

:::info
Dependiendo de tu preferencia, el valor también puede establecerse en 4, lo que por ejemplo ayuda mucho contra el lag cuando operas servidores de mundos de granja que funcionan en la versión 1.13+
:::

### Compresión de datos

En un servidor hay un intercambio permanente entre el servidor y los jugadores conectados. Los movimientos de los propios jugadores se transmiten al servidor y el servidor luego envía esto a todos los demás jugadores. Pero también las acciones de los jugadores o eventos en el mundo, como explosiones por ejemplo, forman parte de los datos que se transmiten una y otra vez.

Para hacer que la regularidad de este intercambio sea un poco más elegante, el tamaño de los datos comprimidos puede duplicarse, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar los mismos datos con los jugadores en comparación con antes. Para ello, también se debe ajustar el valor "network-compression-threshold" en la configuración "server.properties". El valor debe establecerse en 512 aquí. Aquí también ya tenemos una entrada en nuestra documentación, que puede estar aquí.

### Límites de aparición

En este paso, las tasas generales de aparición de mobs en el servidor se reducen un poco. No hay casi ninguna diferencia perceptible en comparación con los valores normales. Sin embargo, puede suceder en algunos lugares con granjas de mobs como ejemplo que la granja de mobs no funcione como se planeó.

Para ajustar la configuración para esto, se debe editar la configuración "bukkit.yml". Los siguientes valores deben ajustarse en el punto "spawn-limits":
- monsters: 50 #Por defecto: 70
- animals: 10 #Por defecto: 15
- water-animals: 3 #Por defecto: 5
- ambient: 4 #Por defecto: 15

:::info
Por supuesto, aún puedes ajustar los valores tú mismo si lo deseas, de lo contrario los valores anteriores son un promedio muy bueno.
:::

Para mejorar aún más la aparición, también se debe cambiar el valor "monster-spawns" en el elemento "ticks-per" en la configuración "bukkit.yml":
- monster-spawns: 2 #Por defecto: 1

Si hay un problema general con los mobs como ejemplo (como se puede determinar en el informe de tiempos), el valor puede establecerse hasta 5. Luego se debe observar el comportamiento del servidor con cada valor para encontrar el mejor valor para tu propio servidor.

### Procesamiento de chunks

Minecraft funciona con los llamados chunks. Un chunk siempre está formado por 16x16 bloques, que luego se unen y representan visualmente el mundo para el cliente. Por lo tanto, el servidor solo trabaja con chunks y luego carga los chunks requeridos en la RAM. Cuantos más chunks se cargan y procesan permanentemente por el servidor, más potencia debe proporcionar el servidor para esto, lo que en algunos lugares hace que el servidor se ralentice.

Los servidores con la configuración estándar nunca descargan chunks cargados, lo que significa que la RAM se usa mucho en algunos lugares y se requiere una cantidad enorme de ella. Por supuesto, el rendimiento del servidor se reduce mucho aquí, ya que cada vez más tiene que procesarse.

Para asegurarse de que el servidor solo cargue los chunks que se necesitan actualmente, se deben ajustar las siguientes opciones en la configuración "bukkit.yml" bajo "chunk-gc":
- period-in-ticks: 300 #Por defecto: 600
- load-threshold: 300 #Por defecto: 0

La opción "period-in-ticks" determina en qué intervalos en segundos se deben descargar los chunks. Si se desea, este valor también puede reducirse aún más, pero debes tener en cuenta que puede ocurrir un efecto no deseado: un bucle

En caso de un bucle, el chunk se descargaría, tras lo cual el chunk solo se necesita un poco después, lo que significa que el servidor debe invertir rendimiento y tiempo nuevamente para recargar este chunk. Esto se repetiría una y otra vez, lo que carga más al servidor que si los chunks permanecieran cargados un minuto más por ejemplo.

### Rango de aparición

Los mobs siempre pueden aparecer a cierta distancia de los jugadores. Aquí reducimos un poco esta tasa para que no haya problemas con la aparición de mobs. Esta configuración es muy importante, ya que algunas de las configuraciones para la aparición ya se han ajustado, como se explicó arriba.

Cambiamos las siguientes configuraciones en "spigot.yml" en "world-settings":
- mob-spawn-range: 3 #Por defecto: 4

### Generador de mobs

Especialmente en servidores de construcción de ciudades, los generadores se usan muy a menudo y a veces en grandes cantidades. Los generadores crean cada vez más mobs en el servidor, lo que puede causar muchos problemas.

Esta opción ajusta un poco el comportamiento de aparición del generador para que el servidor active el generador en intervalos cortos. Para ello, se debe ajustar el siguiente valor en "paper.yml":
- mob-spawner-tick-rate: 3 #Por defecto: 1

:::info
El valor usado arriba no cambia demasiado el comportamiento y realmente no afecta el comportamiento de juego.
:::

### Rangos de entidad

Aquí ahora configuramos cuándo se activan las entidades, es decir, animales y monstruos. Esto significa que los animales pueden moverse por ejemplo o los monstruos también pueden reconocer a los jugadores. Básicamente esto está activado para todos los mobs, pero en una especie de modo de espera. En modo de espera, los mobs pueden seguir moviéndose y también reconocer a los jugadores, pero por ejemplo, los mobs solo pueden moverse muy lentamente, lo que significa que el servidor no tiene que proporcionar mucha potencia.

Aquí también se deben hacer los cambios en la configuración "spigot.yml" bajo el elemento "entity-activation-range". Recomendamos usar los siguientes valores:
- animals: 6 #Por defecto: 32
- monsters: 16 #Por defecto: 32
- misc: 2 #Por defecto: 16
- water: 6 #Por defecto: 6
- tick-inactive-villagers: true #Por defecto: true

### Optimización de tolvas

Las tolvas son una parte muy importante del juego en Minecraft. ¡Pero para los servidores son un verdadero veneno! Por cada tolva configurada, el servidor tiene que comprobar 20 veces por segundo si hay un objeto listo para ser recogido. ¡Mover los objetos de tolva en tolva o en un cofre también cuesta trabajo valioso!

Para mejorar un poco todo esto, aumentamos los intervalos de tiempo en los que el servidor debe realizar tales acciones. Con los valores usados aquí, tal acción se realiza y verifica cada 3 segundos. Las tasas de transferencia no cambian aquí. Sin embargo, puede suceder que los relojes de redstone que se crearon con tolvas ya no funcionen correctamente.

Para ajustar la configuración, se deben ajustar los siguientes valores en la configuración "spigot.yml":
- hopper-transfer: 24 #Por defecto: 8
- hopper-check: 24 #Por defecto: 8
- hopper-amount: 3 #Por defecto: 1

:::info
¡Asegúrate de que el valor "use-hopper-check" esté configurado en "true" en la configuración "paper.yml"!
:::

### Colisiones

Desde la versión 1.9 de Minecraft existen colisiones, por ejemplo, ya no puede haber un jugador dentro de otro jugador. Aquí determinamos con qué frecuencia las entidades pueden colisionar en general. Especialmente en granjas de mobs, donde muchos mobs se encuentran en un espacio estrecho, esto a veces puede cargar mucho el servidor.

Para adaptar la configuración, se debe ajustar el siguiente valor en "spigot.yml":
- max-entity-collisions: 1 #Por defecto: 8

Como las colisiones no tienen un efecto real en los mobs, la configuración puede reducirse aquí. ¡Este valor no se usa para jugadores, solo para mobs!

### Radio de fusión

El radio de fusión determina qué objetos y XP se fusionan, lo que significa que el servidor tiene que procesar menos entidades. Especialmente en servidores donde hay muchos objetos en el suelo, esto puede tener un efecto positivo para los jugadores si se aumenta este radio. Aquí también se aplica la regla de encontrar un buen valor medio, de lo contrario vuelve a ocurrir una especie de efecto de lag, lo que significa que el servidor tiene que comprobar un rango mayor, lo que luego requiere demasiada potencia.

Para adaptar la configuración, se deben ajustar los siguientes valores bajo el elemento "merge-radius" en "spigot.yml":
- item: 4.0 #Por defecto 2.5
- exp: 6.0 #Por defecto: 3.0

:::info
¡Los valores aquí no deben establecerse por encima de 8, de lo contrario puede surgir el efecto de lag mencionado arriba!
:::

### Explosiones

En Paper Spigot, muchas partes de los servidores de Minecraft han sido reprogramadas para que el servidor funcione mejor. Esto también se aplica a las explosiones. Aquí, el software maneja mejor las explosiones, para evitar grandes lag en el servidor.

Para ello, se debe ajustar el siguiente valor en la configuración "paper.yml":
- optimize-explosions: true #Por defecto: false

### Cofres

¡Incluso con los cofres hay un pequeño detalle que se puede optimizar! Si un gato está sentado en el cofre, no se puede abrir. Para que el servidor pueda comprobar esto, el servidor tiene que recorrer todos los mobs en un cierto radio y comprobar si uno de estos mobs está sentado en el cofre, lo cual es muy costoso en tiempo y ocurre cada vez que se abre un cofre.

La opción se puede desactivar fácilmente con el siguiente cambio:
- disable-chest-cat-detection: true #Por defecto: false

### Inventarios

El inventario se usa mucho, pero inventario no es inventario. Por ejemplo, un cofre o una mesa de trabajo también es un inventario. Con este cambio, también puedes darle un respiro al servidor sin que nadie lo note. Básicamente aquí solo configuramos el número de ticks después de los cuales el servidor debe actualizar cada inventario.

Para ello, se debe editar el siguiente valor en la configuración "paper.yml":
- container-update-tick-rate: 3 #Por defecto: 1

:::info
¡El valor no debe establecerse por encima de 5, de lo contrario el inventario puede tener algunos errores! En modos de juego como SurvivalGames, donde todos los jugadores quieren acceder a los cofres en el centro y obtener los mejores objetos, el valor no debe cambiarse y debe dejarse en "1".
:::

### Actualizaciones de luz

Aquí también, Paper Spigot ofrece una opción alternativa para que las actualizaciones de luz en el mundo se realicen mejor. Con este método, las actualizaciones de luz no se realizan dentro de un tick, lo que puede, dependiendo de la magnitud de la actualización, a veces hacer que el servidor se detenga, sino fuera del tick. Todo esto se llama hilos asíncronos en Minecraft.

Para ello, también se debe hacer el siguiente cambio en la configuración "paper.yml":
- queue-light-updates: true #Por defecto: false

### Guardado de datos de chunks

Tan pronto como se hayan realizado cambios en un chunk, los cambios no se escriben directamente en el disco duro, sino que primero se cargan en la RAM. Sin embargo, todos los cambios se guardan muy a menudo, lo que a veces puede causar lag extremo, especialmente cuando el servidor quiere guardar cambios masivos.

Con este cambio estamos reduciendo el número máximo de chunks que se pueden guardar en un proceso de guardado. Al cambiar esta opción, la RAM se usa más en algunos lugares porque los cambios permanecen más tiempo en la RAM.

Los cambios en la siguiente configuración deben hacerse en "paper.yml":
- max-auto-save-chunks-per-tick: 10 #Por defecto: 24

### Redstone

La redstone se usa muy a menudo con circuitos a veces extremadamente grandes. En servidores públicos, esto a veces es el punto más débil en casi el 90% de los servidores, ya que se pueden causar lag masivos con redstone. Aquí también usamos un procesamiento alternativo de Redstone de Paper Spigot, que hace que la redstone sea casi inofensiva y tenga la misma funcionalidad que en Vanilla.

Para ello, se debe hacer la siguiente configuración en "paper.yml":
- use-faster-eigencraft-redstone: true #Por defecto: false

:::info
**¡Peligro! En algunas situaciones esto puede cambiar mucho la forma en que funciona la redstone!**
:::

<InlineVoucher />