---
id: necesse-firststeps-dashboard
title: "Necesse: Resumen del panel de control"
description: Información sobre el panel de control de un servidor Necesse de ZAP-Hosting - Documentación de ZAP-Hosting.com
sidebar_label: Panel de control
services:
  - gameserver-necesse
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Estás interesado en un **servidor Necesse** o ya tienes uno, pero aún te falta una visión general completa de la administración y la localización de todas las opciones necesarias? Especialmente al principio, esto puede ser un desafío. Pero no te preocupes, a continuación te proporcionamos una introducción detallada a la administración de tu servicio, para que tengas la mejor visión posible.

Después de seguir esta guía, podrás gestionar tu servidor de manera eficiente y encontrar todas las opciones y funciones necesarias de forma rápida y sencilla. Aquí obtendrás una visión estructurada que te ayudará paso a paso a familiarizarte con la administración del servidor y ampliar tus conocimientos de manera dirigida. Así, podrás asegurarte de que tu **servidor Necesse** esté adaptado de forma óptima a tus necesidades y que aproveches al máximo las opciones disponibles. Prueba

<InlineVoucher />

## Administración del producto

En la sección de **Administración del producto** encontrarás todas las páginas necesarias para gestionar tu servidor. Las opciones para administrar tu servidor se enumeran detalladamente a continuación.



### Panel de control

El **Panel de control** de tu servidor es el corazón de la administración. Aquí se presenta de forma clara toda la información básica y esencial sobre tu servicio. Esto incluye, por ejemplo, información sobre la ubicación, estado, IP: Puerto, memoria usada, juego en curso, nombre del servidor, mapa y el número de plazas disponibles. Además, también se muestra la utilización de la CPU, memoria y RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/HKWMjAMexGeHQmw/preview)

En el panel de control también tienes la opción de iniciar, detener o reiniciar tu servicio, para tener un control total sobre su funcionamiento. Además, puedes acceder a la consola en vivo para obtener información en tiempo real sobre el estado del servidor y tomar medidas directas si es necesario.






### Gestor de DDoS



Consulta ataques DDoS pasados para evaluar mejor posibles amenazas y patrones. Activa notificaciones para ataques DDoS en curso en tu servidor y así reaccionar rápidamente cuando ocurra un incidente.

Dependiendo de la ubicación del servidor y la protección DDoS disponible allí, también puedes monitorear ataques activos en tiempo real. Esto incluye detalles del tráfico, mostrando tanto el tráfico legítimo como la cantidad de tráfico bloqueado por los sistemas de mitigación. Este nivel de transparencia te ayuda a entender cómo funciona la protección y te permite identificar riesgos potenciales temprano.

:::info ¿Falta acceso al gestor de DDoS?
El uso del Gestor de DDoS requiere una dirección IP dedicada o la opción adicional "Visión general del Gestor de DDoS". Si tu paquete actual no incluye estos componentes, puedes añadirlos en cualquier momento actualizando tu servicio.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)





:::warning
El uso del Gestor de DDoS solo es posible si se ha reservado una IP propia o la opción "Visión general del Gestor de DDoS" como opción adicional. Si estos componentes faltan en tu paquete actual, puedes añadirlos en cualquier momento mediante una actualización.
:::



### Archivos de registro

¿Está ocurriendo un problema técnico y no sabes cuál es su causa? Una primera posible estrategia de solución es revisar los **Archivos de registro**. Estos archivos contienen mucha información sobre el servidor, como eventos actuales, indicios o mensajes de error.

Los mensajes de error en particular pueden ayudar a identificar y comprender mejor la causa de un problema. A menudo, las dificultades pueden descubrirse y resolverse con una mirada dirigida a los archivos de registro.

:::warning
¿La información encontrada no ayuda o no la entiendes? ¡No te preocupes! En este caso, también estamos disponibles diariamente en soporte. Solo crea un **[Ticket](https://zap-hosting.com/en/customer/support/)** y explícanos tu problema. Lo revisaremos lo antes posible y te ayudaremos a resolverlo de acuerdo a ello. :)
:::


### Registro de eventos

El **Registro de eventos** te proporciona una visión completa de todas las actividades relacionadas con la administración del servidor. Aquí puedes rastrear en cualquier momento cuándo un servidor se inició, detuvo o colapsó, así como cuándo se realizaron actualizaciones, copias de seguridad o nuevas instalaciones.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)



### Interrupciones del servicio

¿Tu servidor estuvo temporalmente fuera de línea y no puedes explicar por qué? ¿Una revisión del registro de eventos y archivos de registro tampoco proporcionó información? Podría ser que la causa del problema no esté directamente en tu servidor, sino en el sistema anfitrión donde se opera tu servidor.

Si nuestro sistema de monitoreo detecta una interrupción general, nuestros técnicos son notificados automáticamente y se encargan del problema lo antes posible.

En esta sección encontrarás un resumen del historial de interrupciones del sistema anfitrión donde se ejecuta tu servicio de servidor de juegos. Puedes encontrar más información y la versión más reciente de nuestro estado de servicio en nuestra nueva [página de estado](https://status.zap-hosting.com/).












## Configuraciones

En la sección de **Configuraciones** encontrarás todas las páginas necesarias para configurar tu servidor. Las opciones disponibles para configurar tu servidor se enumeran detalladamente a continuación.



### Configuraciones

En configuraciones encontrarás un resumen de las opciones de configuración más comunes para tu servidor. Estas incluyen también una breve explicación. El uso de la página de configuraciones es especialmente recomendable para quienes son nuevos en la administración de servidores.

Si tienes más confianza y quieres hacer cambios más precisos, recomendamos usar el Editor de Configuración. Puedes encontrar más información sobre esto en la categoría **Configs**.



### Configs

El editor de archivos de configuración te permite editar los archivos de configuración directamente desde el sitio web de la manera clásica, sin la vista simplificada. Esta opción te permite personalizar los ajustes de tu servidor y configurarlos según tus preferencias personales.

Al usar el editor, obtienes acceso directo a todas las opciones disponibles y puedes personalizarlas con precisión. Esto es especialmente útil para usuarios avanzados que quieren tener control total sobre la configuración de su servidor y saben exactamente qué cambios desean hacer.

:::warning
¿Has notado que algunos de tus cambios se sobrescriben parcialmente? Ten en cuenta que ciertos valores de opciones se toman de la página de configuraciones. Si quieres hacer estos cambios directamente en el config, primero debes desactivar las opciones relevantes en la página de configuraciones.
:::


### Juegos

En **Juegos** siempre tienes la posibilidad de cambiar la variante del juego de tu juego existente o instalar otro juego en general. Los juegos con el mismo precio por plaza pueden seleccionarse directamente bajo **Juegos disponibles**. Para todos los demás juegos se requiere primero un ajuste del precio por plaza. Más información sobre esto se encuentra en la guía de Cambio de Juego.

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)



### Versiones

En **Versiones** tienes la posibilidad de ver y gestionar la versión actual de tu servidor de juego. Aquí puedes actualizar a la última versión en cualquier momento o activar las actualizaciones automáticas para asegurarte de que tu servidor esté siempre actualizado.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Además, también puedes habilitar la función de notificación por correo electrónico para actualizaciones automáticas y así mantenerte informado sobre las actualizaciones y asegurarte de estar siempre al día.



### Tareas programadas

Crea tareas programadas que se ejecuten automáticamente en horarios definidos para automatizar varios procesos en tu servidor. Puedes establecer si una tarea debe ejecutarse una vez o repetirse según sea necesario. Los tipos de tareas soportados incluyen iniciar, detener o reiniciar servicios, reiniciar el servidor si está en línea, crear copias de seguridad o ejecutar comandos personalizados.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Planificador de reinicios

¿Quieres programar reinicios del servidor en horarios específicos? El Planificador de Reinicios te permite configurar reinicios automáticos programados de tu servidor de juego. Con esta función, puedes configurar reinicios en horarios específicos o a intervalos regulares.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)



## Herramientas

En la sección de **Herramientas** de tu panel de navegación encontrarás una serie de subelementos que te ayudarán a gestionar tu servidor. Estos incluyen **Explorador FTP**, **Bases de datos** y **Copias de seguridad**. A continuación, recibirás una introducción detallada a estas diferentes áreas.



### Explorador FTP

Usando el **Explorador FTP**, obtendrás toda la información necesaria para establecer una conexión al acceso FTP. El acceso FTP te permite acceso directo a los archivos de tu servidor de juego. Recomendamos usar un programa FTP externo como **Filezilla** o **WinSCP** para un uso óptimo. Si no estás familiarizado con cómo usar FTP, te recomendamos echar un vistazo a nuestra guía de Acceso FTP que puede ayudarte.

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla es probablemente el cliente FTP más sencillo y conocido. Simplemente instálalo, ejecútalo y en la barra superior introduce tus datos de acceso, que encontrarás un poco más arriba en esta página. Tras un clic rápido en "Conectar" estarás directamente conectado al servidor y podrás gestionar los archivos.

**WinSCP:** WinSCP está pensado principalmente para SCP y SFTP (las versiones cifradas del protocolo de transferencia de archivos FTP), pero también puede manejar FTP normal. El programa es un poco más completo que FileZilla y es más adecuado para usuarios avanzados.



### Bases de datos

Además de nuestros productos de servidores de juegos, también ofrecemos 10 bases de datos incluidas. Estas bases de datos son necesarias, por ejemplo, cuando se deben almacenar datos en una base de datos. Bajo **Bases de datos**, puedes crear una base de datos y ver las credenciales de acceso. También tienes la opción de activar la opción de copia de seguridad e importar copias de seguridad de bases de datos existentes.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)



### Copias de seguridad

En **Copias de seguridad**, tienes la opción de crear copias de seguridad tanto manuales como automáticas para tu servidor y su base de datos asociada. Esto facilita la recuperación de tus datos en caso de problemas o pérdida de datos.

En la configuración, puedes especificar si las copias de seguridad deben crearse automáticamente y si esto debe hacerse diariamente o semanalmente. Además, puedes decidir si las copias de seguridad más antiguas deben eliminarse si es necesario, por ejemplo, cuando el espacio de almacenamiento disponible se vuelve limitado.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Proporcionamos 10 GB de espacio de almacenamiento en el servidor de almacenamiento para copias de seguridad para nuestros productos de servidores de juegos por defecto. Si necesitas más espacio de almacenamiento, puede ampliarse por una tarifa. De esta manera aseguras que siempre tengas suficiente espacio para tus copias de seguridad y puedas acceder a copias antiguas si es necesario.

## Enlaces adicionales
En la sección de **Enlaces adicionales** encontrarás más enlaces que son relevantes para tu producto.

### Preguntas frecuentes
La sección de **Preguntas frecuentes** ofrece un resumen de las preguntas más comunes de nuestros clientes. Aquí encontrarás respuestas útiles e información detallada sobre diversos temas para ayudarte de forma rápida y eficiente.

### Documentación de ZAP-Hosting
Ofrecemos una documentación extensa para nuestros productos, que sirve como base de conocimientos para las preguntas y preocupaciones más frecuentes. Allí encontrarás diversas guías y ayudas sobre diferentes temas que te asistirán en el uso y gestión de tu producto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Noticias
La sección de **Noticias** te proporciona una visión completa de todos los anuncios y novedades relacionadas con tu servicio. Aquí encontrarás información importante sobre varios aspectos como:

- Cambios en el servicio, por ejemplo, mediante actualizaciones o nuevas funciones
- Anuncios sobre posibles mantenimientos o problemas técnicos
- Ofertas especiales y promociones que te brindan beneficios o descuentos exclusivos
- Otra información relevante que pueda ser importante para el uso de tu servicio

Al revisar las **Noticias** regularmente, te mantendrás informado y podrás ajustar tu servicio en consecuencia para aprovechar al máximo tu servidor.

<InlineVoucher />