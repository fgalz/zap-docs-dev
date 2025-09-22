---
id: abuse-report
title: "Reportar abuso y contenido ilegal - ¡Todo lo que necesitas saber!"
description: "Cómo reportar abuso y contenido ilegal a ZAP-Hosting - Documentación de ZAP-Hosting.com"
sidebar_label: Reportar abuso
---

## Introducción

Internet genera valor. El abuso perjudica a los usuarios y servicios. Nuestro objetivo es detectar y detener incidentes rápidamente. Puedes reportar sospechas de abuso a nuestro Equipo de Abuso. Revisamos cada reporte, preservamos evidencia, actuamos conforme a la ley aplicable y nuestras políticas, y notificamos a las autoridades competentes cuando es necesario. Otro test lol.

## Tipos de casos de abuso

Hola, ¡mi nombre es! El abuso puede manifestarse de diferentes maneras. Reporta cualquier caso que encaje o esté cerca de las categorías siguientes:

<details>
  <summary>Spam</summary>

Mensajes no solicitados o masivos enviados a través de nuestros sistemas o contenido alojado que activan filtros de spam. Las variantes incluyen spam por correo electrónico, spam en comentarios, spam de enlaces SEO y creación automatizada de cuentas. Proporciona mensajes de ejemplo, encabezados, IPs de remitentes y patrones de envío.

</details>

<details>
  <summary>Ataques y DDoS</summary>

Tráfico hostil destinado a interrumpir servicios o sondear sistemas. Formas comunes son inundaciones volumétricas L3 L4, inundaciones HTTP capa 7, amplificación, intentos de acceso por fuerza bruta y escaneos agresivos de puertos. Indicadores incluyen picos en PPS o Mbps, tasas elevadas de errores 4xx 5xx y fallos repetidos de autenticación desde fuentes rotativas.

</details>

<details>
  <summary>Violaciones de derechos de autor y marcas registradas</summary>

Distribución no autorizada de obras protegidas o uso indebido de marcas registradas. Variantes incluyen espejos de piratería, descargas crackeadas, suplantación de marca y dominios engañosos. Proporciona la obra, titular de derechos, ubicación exacta y estado de autorización.

</details>

<details>
  <summary>Phishing</summary>

Contenido diseñado para capturar credenciales o datos de pago imitando marcas confiables. Variantes incluyen portales falsos de inicio de sesión, estafas de facturas, señuelos con códigos QR o adjuntos, y fatiga de MFA. Especifica la marca objetivo, puntos de captura y cómo la página difiere del sitio legítimo.

</details>

<details>
  <summary>GDPR</summary>

Procesamiento, exposición o filtración no autorizada de datos personales. Casos típicos incluyen índices abiertos, buckets mal configurados, scraping sin base legal y registros públicos. Describe categorías de datos, alcance, sujetos afectados y causa de la exposición.

</details>

<details>
  <summary>CSAM/SAM</summary>

Cualquier material que represente explotación sexual de personas. Tolerancia cero.

</details>

<details>
  <summary>Contenido ilegal</summary>

Contenido que viola la ley aplicable como propaganda extremista, amenazas, discurso de odio, incitación a la violencia o difamación. Variantes incluyen doxxing, amenazas explícitas y materiales prohibidos por la jurisdicción. Proporciona la ubicación exacta y, si se conoce, la base legal involucrada.

</details>

<details>
  <summary>Otros</summary>

Abuso que no encaja en lo anterior pero que aún perjudica a usuarios o sistemas. Ejemplos incluyen alojamiento de malware, C2 de botnets, fraude y minería de criptomonedas no autorizada. Comparte hashes, URLs, patrones de C2 y anomalías en el uso de recursos.

</details>

## Información requerida

Para asegurar un reporte completo y accionable, por favor proporciona detalles exhaustivos que nos permitan identificar el recurso, verificar el incidente y tomar las medidas adecuadas, incluyendo lo siguiente:
- Ubicación. URL, IP, puerto, nombre de host, ruta de archivo, hash
- Marcas de tiempo en UTC en formato YYYY-MM-DDTHH:MM:SSZ
- Descripción. Qué ocurrió, cómo se detectó, impacto observado
- Evidencia. Capturas de pantalla, registros de texto, correo completo con encabezados en formato EML, PCAP corto, NetFlow, encabezados HTTP

## Archivos aceptados y provisión

Proporciona evidencia en formatos claros y de manera que podamos acceder a ella de forma confiable. Adjunta archivos pequeños a tu correo o aloja archivos grandes externamente. Adjunta archivos pequeños a medianos directamente. Prefiere formatos abiertos y sin modificar. Texto plano es mejor que capturas de pantalla de texto.

Para archivos grandes, comparte un enlace de descarga estable. Debe ser accesible sin interacción o incluir credenciales claras. Indica el período de validez del enlace. Añade sumas de verificación para permitir la verificación de integridad.

Usa formatos estándar como TXT, PDF, PNG, JPG, PCAP o PCAPNG, EML, HAR, CSV y JSON. No incluyas contraseñas, claves privadas ni datos personales completos a menos que sea estrictamente necesario.

Para calidad, envía correos como EML con encabezados completos, registros en texto plano, trazas de red como capturas PCAP o PCAPNG cortas y relevantes, y capturas de pantalla en resolución original.

Por seguridad, redacta cualquier secreto; si es necesario, coloca archivos en un archivo protegido con contraseña y comparte la contraseña por separado. Para CSAM/SAM, no transmitas archivos, solo proporciona enlaces.

## Contacta con nosotros

Envía tu reporte a `abuse@zap-hosting.com`. Es importante usar un asunto claro como `Reporte de abuso Phishing` o `Reporte de abuso DDoS`. Envía un correo por incidente. El ejemplo a continuación muestra una solicitud completa:

```
Para: abuse@zap-hosting.com
Asunto: Reporte de abuso Fuerza Bruta (SSH)

Ubicación:
- IP objetivo: XXX.XX.XXX.XX
- Servicio: SSH
- Puerto: 22
- Nombre de host: v12345.zap-hosting.com

Marcas de tiempo (UTC):
- Primera vez visto: 2025-08-23T09:12:04Z
- Última vez visto: 2025-08-23T10:03:31Z

Descripción:
Intentos repetidos de inicio de sesión SSH con nombres de usuario e IPs de origen rotativos. Detectado mediante anomalías en auth.log y tasa elevada de conexiones. Autenticación por contraseña deshabilitada tras detección. No se observó inicio de sesión exitoso.

Evidencia:
- Extracto de auth.log con múltiples entradas de "Failed password" y "Invalid user"
- Fragmento de log de fail2ban mostrando bloqueos y direcciones de origen
- PCAP de 60 segundos capturando intentos TCP al puerto 22
- Conteos agregados: 12,438 intentos desde 352 IPs de origen
- Principales fuentes con información ASN

Extracto de log de ejemplo:
2025-08-23T09:55:17Z sshd[2173]: Failed password for invalid user admin from XXX.X.XXX.XX port XXXX ssh2
2025-08-23T09:55:18Z sshd[2173]: Failed password for root from XXX.X.XX
```

## Qué sucede después

Nuestro Equipo de Abuso procesa tu reporte lo más rápido posible y responde con prontitud. Revisamos el incidente y lo priorizamos según su gravedad.

Según la revisión, tomamos acciones que incluyen notificación al cliente, suspensión temporal/permanente, eliminación del contenido reportado, preservación de evidencia y notificación a las autoridades competentes cuando es necesario.