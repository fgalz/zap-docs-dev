---
id: necesse-firststeps-dashboard
title: "Necesse: Visión general del panel"
description: Información sobre el panel de un servidor Necesse de ZAP-Hosting - Documentación de ZAP-Hosting.com
sidebar_label: Panel
services:
  - gameserver-necesse
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Estás interesado en un **servidor Necesse** o ya posees uno, pero aún te falta una visión general completa de la administración y la localización de todas las opciones necesarias? Especialmente al principio, esto puede ser un desafío. Pero no te preocupes, te proporcionaremos una introducción detallada a la administración de tu servicio a continuación, para que tengas la mejor visión posible.

Después de seguir esta guía, podrás gestionar tu servidor de manera eficiente y encontrar todas las opciones y características necesarias de forma rápida y sencilla. Aquí, obtendrás una visión estructurada que te ayudará paso a paso a familiarizarte con la administración del servidor y a ampliar tu conocimiento de manera dirigida. De esta manera, puedes asegurarte de que tu **servidor Necesse** esté óptimamente adaptado a tus necesidades y que aproveches al máximo las opciones disponibles. Prueba

<InlineVoucher />

## Administración del Producto

En la sección de **Administración del Producto**, encontrarás todas las páginas necesarias para gestionar tu servidor. Las opciones para gestionar tu servidor se enumeran en detalle a continuación. 

### Panel

El **Panel** de tu servidor es el corazón de la administración. Aquí se presenta de manera clara toda la información básica y esencial sobre tu servicio. Esto incluye, por ejemplo, información sobre la ubicación, estado, IP: Puerto, memoria utilizada, juego en progreso, nombre del servidor, mapa y el número de espacios disponibles. Además, también se muestra la utilización de la CPU, memoria y RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/HKWMjAMexGeHQmw/preview)

En el panel también tienes la opción de iniciar, detener o reiniciar tu servicio, para tener un control total sobre su funcionamiento. Además, puedes acceder a la consola en vivo para obtener información en tiempo real sobre el estado del servidor y tomar medidas directas si es necesario.

### Administrador de DDoS

Visualiza ataques DDoS pasados para evaluar mejor las amenazas y patrones potenciales. Activa las notificaciones para ataques DDoS en curso en tu servidor para reaccionar rápidamente cuando ocurra un incidente.

Dependiendo de la ubicación del servidor y la protección DDoS disponible allí, también puedes monitorear ataques activos en tiempo real. Esto incluye información detallada sobre el tráfico, mostrando tanto tráfico legítimo como la cantidad de tráfico bloqueado por los sistemas de mitigación. Este nivel de transparencia te ayuda a entender cómo está funcionando la protección y te permite identificar riesgos potenciales temprano.

:::info ¿Falta acceso al administrador de DDoS?
El uso del Administrador de DDoS requiere ya sea una dirección IP dedicada o la opción adicional "Resumen del Administrador de DDoS". Si tu paquete actual no incluye estos componentes, puedes agregarlos en cualquier momento actualizando tu servicio.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::warning
El uso del Administrador de DDoS solo es posible si se ha reservado una dirección IP propia o la opción "Resumen del Administrador de DDoS" como opción adicional. Si estos componentes faltan en tu paquete actual, puedes agregarlos en cualquier momento actualizando.
:::

### Archivos de registro

¿Está ocurriendo un problema técnico y no estás seguro de su causa? Una primera posible estrategia de solución es revisar los **Archivos de registro**. Estos archivos contienen mucha información sobre el servidor, como eventos actuales, pistas o mensajes de error.

Los mensajes de error en particular pueden ayudar a identificar y comprender mejor la causa de un problema. A menudo, las dificultades pueden ser descubiertas y resueltas al observar de manera dirigida los archivos de registro.

:::warning
¿La información encontrada allí no ayuda o no la entiendes? ¡No te preocupes! En este caso, también estamos disponibles diariamente en soporte. Simplemente crea un **[Ticket](https://zap-hosting.com/en/customer/support/)** y explícanos tu problema. Lo revisaremos lo más rápido posible y te ayudaremos a resolver el problema en consecuencia. :)
:::

### Registro de eventos

El **Registro de Eventos** te proporciona una visión completa de todas las actividades relacionadas con la administración del servidor. Aquí puedes rastrear en cualquier momento cuándo se inició, detuvo o falló un servidor, así como cuándo se realizaron actualizaciones, copias de seguridad o nuevas instalaciones.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Interrupciones del servicio

¿Tu servidor estuvo temporalmente fuera de línea y no puedes explicar por qué? ¿Una mirada al registro de eventos y archivos de registro tampoco proporcionó información? Podría ser que la causa del problema no esté directamente en tu servidor, sino en el sistema host en el que se opera tu servidor.

Si nuestro sistema de monitoreo detecta una interrupción general, nuestros técnicos son notificados automáticamente y se ocupan del problema lo antes posible.

En esta sección encontrarás un resumen del historial de interrupciones del sistema host en el que se ejecuta tu servicio de servidor de juegos. Puedes encontrar más información y la última versión de nuestro estado de servicio en nuestra nueva [página de estado](https://status.zap-hosting.com/).

## Configuraciones

En la sección de **Configuraciones**, encontrarás todas las páginas necesarias para configurar tu servidor. Las opciones disponibles para configurar tu servidor se enumeran en detalle a continuación.

### Configuraciones

Bajo las configuraciones encontrarás un resumen de las opciones de configuración más comunes para tu servidor. Estas también incluyen una breve explicación. El uso de la página de configuraciones se recomienda especialmente para los recién llegados a la administración de servidores.

Si te sientes más seguro y deseas hacer cambios más precisos, te recomendamos utilizar el Editor de Configuración en su lugar. Puedes encontrar más información sobre esto en la categoría de **Configs**.

### Configs

El editor de archivos de configuración te permite editar los archivos de configuración directamente desde el sitio web de la manera clásica, sin la vista simplificada. Esta opción te permite personalizar la configuración de tu servidor y configurarla según tus preferencias personales.

Al utilizar el editor, obtienes acceso directo a todas las opciones disponibles y puedes personalizarlas con precisión. Esto es especialmente útil para usuarios avanzados que desean tener control total sobre la configuración de su servidor y saben exactamente qué cambios quieren realizar.

:::warning
¿Has notado que algunos de tus cambios se sobrescriben parcialmente? Ten en cuenta que ciertos valores de opción se toman de la página de configuraciones. Si deseas realizar estos cambios directamente en la configuración, primero debes desactivar las opciones relevantes en la página de configuraciones.
:::

### Juegos

Bajo **Juegos** siempre tienes la posibilidad de cambiar la variante del juego de tu juego existente o instalar otro juego en general. Los juegos con el mismo precio de espacio se pueden seleccionar directamente bajo **Juegos Disponibles**. Para todos los demás juegos, primero se requiere un ajuste del precio del espacio. Más información sobre esto se puede encontrar en la guía de Cambio de Juego.

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versiones

Bajo **Versiones** tienes la posibilidad de ver y gestionar la versión actual de tu servidor de juegos. Aquí puedes actualizar a la última versión en cualquier momento o activar actualizaciones automáticas para asegurarte de que tu servidor esté siempre actualizado.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Además, también puedes habilitar la función de notificación por correo electrónico para actualizaciones automáticas para mantenerte informado sobre actualizaciones y asegurarte de que siempre estés al día.

### Tareas Programadas

Crea tareas programadas que se ejecuten automáticamente en momentos definidos para automatizar varios procesos en tu servidor. Puedes establecer si una tarea debe ejecutarse una vez o repetirse según sea necesario. Los tipos de tareas admitidos incluyen iniciar, detener o reiniciar servicios, reiniciar el servidor si está en línea, crear copias de seguridad o ejecutar comandos personalizados.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Planificador de reinicios

¿Quieres programar reinicios del servidor en momentos específicos? El Planificador de Reinicios te permite configurar reinicios automáticos programados de tu servidor de juegos. Con esta función, puedes programar reinicios en momentos específicos o a intervalos regulares.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

## Herramientas

En la sección de **Herramientas** de tu panel de navegación, encontrarás una serie de subelementos que te ayudarán a gestionar tu servidor. Estos incluyen **Navegador FTP**, **Bases de Datos** y **Copias de Seguridad**. A continuación, recibirás una introducción detallada a estas diferentes áreas.

### Navegador FTP

Utilizando el **Navegador FTP**, obtendrás toda la información necesaria para establecer una conexión con el acceso FTP. El acceso FTP te permite acceso directo a los archivos de tu servidor de juegos. Recomendamos utilizar un programa FTP externo como **Filezilla** o **WinSCP** para un uso óptimo. Si no estás familiarizado con cómo usar FTP, te recomendamos que eches un vistazo a nuestra guía de Acceso FTP que puede ayudarte.

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla es probablemente el cliente FTP más simple y conocido. Simplemente instálalo, inícialo y en la barra superior ingresa tus credenciales de acceso, que encontrarás un poco más arriba en esta página. Después de un rápido clic en "Conectar", estarás directamente en el servidor y podrás gestionar los archivos.

**WinSCP:** WinSCP está diseñado en realidad para SCP y SFTP (los descendientes cifrados del protocolo de transferencia de archivos FTP), pero también puede manejar FTP normal. El programa es un poco más completo que FileZilla y es más adecuado para usuarios avanzados.

### Bases de Datos

Además de nuestros productos de servidor de juegos, también ofrecemos 10 bases de datos incluidas. Estas bases de datos son necesarias, por ejemplo, cuando se necesita almacenar datos en una base de datos. Bajo **Bases de Datos**, puedes crear una base de datos y ver las credenciales de acceso. También tienes la opción de activar la opción de copia de seguridad e importar copias de seguridad de bases de datos existentes.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Copias de Seguridad

Bajo **Copias de Seguridad**, tienes la opción de crear tanto copias de seguridad manuales como automáticas para tu servidor y su base de datos asociada. Esto facilita la recuperación de tus datos en caso de problemas o pérdida de datos.

En la configuración, puedes especificar si las copias de seguridad deben crearse automáticamente y si esto debe hacerse diariamente o semanalmente. Además, puedes decidir si las copias de seguridad más antiguas deben eliminarse si es necesario, como cuando el espacio de almacenamiento disponible se vuelve limitado.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Proporcionamos 10 GB de espacio de almacenamiento en el servidor de almacenamiento para copias de seguridad de nuestros productos de servidor de juegos por defecto. Si necesitas más espacio de almacenamiento, se puede actualizar por una tarifa. De esta manera, aseguras que siempre tengas suficiente espacio para tus copias de seguridad y aún puedas acceder a copias de seguridad más antiguas si es necesario.

## Enlaces Adicionales
En la sección de **Enlaces Adicionales**, encontrarás más enlaces que son relevantes para tu producto.

### Preguntas Frecuentes
La sección de **Preguntas Frecuentes** proporciona una visión general de las preguntas más comunes de nuestros clientes. Aquí encontrarás respuestas útiles e información detallada sobre varios temas para ayudarte de manera rápida y eficiente.

### Documentación de ZAP-Hosting
Ofrecemos una extensa documentación para nuestros productos, que sirve como una base de conocimientos para las preguntas y preocupaciones más frecuentes. Allí encontrarás varias guías y ayuda sobre diferentes temas que te asistirán en el uso y gestión de tu producto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Noticias
Las **Noticias** te proporcionan una visión completa de todos los anuncios y novedades relacionadas con tu servicio. Aquí encontrarás información importante sobre varios aspectos como:

- Cambios en el servicio, por ejemplo, mediante actualizaciones o nuevas características
- Anuncios sobre posibles mantenimientos o problemas técnicos
- Ofertas especiales y promociones que te brindan beneficios o descuentos exclusivos
- Otra información relevante que puede ser importante para el uso de tu servicio

Al revisar las **Noticias** regularmente, te mantendrás informado y podrás ajustar tu servicio en consecuencia para aprovechar al máximo tu servidor.

<InlineVoucher />