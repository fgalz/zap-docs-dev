---
id: abuse-report
title: "Signaler les abus et contenus illégaux - Tout ce que vous devez savoir !"
description: "Comment signaler les abus et contenus illégaux à ZAP-Hosting - Documentation ZAP-Hosting.com"
sidebar_label: Signaler un abus
---

## Introduction

Internet permet la création de valeur. Les abus nuisent aux utilisateurs et aux services. Notre objectif est de détecter et d’arrêter rapidement les incidents. Vous pouvez signaler les abus suspects à notre équipe Abuse. Nous examinons chaque signalement, conservons les preuves, agissons conformément à la loi applicable et à nos politiques, et informons les autorités compétentes lorsque cela est nécessaire. Un autre test lol. Encore un test je suppose.

## Types de cas d’abus

Bonjour, je m’appelle ! Les abus peuvent se manifester de différentes manières. Signalez tout cas qui correspond ou se rapproche des catégories ci-dessous :

<details>
  <summary>Spam</summary>

Messages non sollicités ou en masse envoyés via nos systèmes ou contenus hébergés qui déclenchent les filtres anti-spam. Les variantes incluent le spam par email, le spam dans les commentaires, le spam de liens SEO et la création automatisée de comptes. Fournissez des exemples de messages, les en-têtes, les adresses IP des expéditeurs et les schémas d’envoi.

</details>

<details>
  <summary>Attaques et DDoS</summary>

Trafic hostile destiné à perturber les services ou à sonder les systèmes. Les formes courantes sont les inondations volumétriques L3 L4, les inondations HTTP couche 7, l’amplification, les tentatives de connexion par force brute et les scans de ports agressifs. Les indicateurs incluent des pics de PPS ou Mbps, des taux élevés de 4xx 5xx, et des échecs d’authentification répétés provenant de sources changeantes.

</details>

<details>
  <summary>Violations de droits d’auteur et de marques</summary>

Distribution non autorisée d’œuvres protégées ou usage abusif de marques déposées. Les variantes incluent les miroirs de piraterie, les téléchargements crackés, l’usurpation de marque et les domaines trompeurs. Fournissez l’œuvre, le titulaire des droits, l’emplacement exact et le statut d’autorisation.

</details>

<details>
  <summary>Phishing</summary>

Contenu conçu pour récolter des identifiants ou des données de paiement en imitant des marques de confiance. Les variantes incluent les faux portails de connexion, les arnaques par facture, les leurres QR ou pièces jointes, et la fatigue MFA. Précisez la marque ciblée, les points de capture et en quoi la page diffère du site légitime.

</details>

<details>
  <summary>RGPD</summary>

Traitement, exposition ou fuite non autorisés de données personnelles. Les cas typiques incluent des index ouverts, des buckets mal configurés, du scraping sans base légale et des journaux publics. Décrivez les catégories de données, la portée, les sujets affectés et la cause de l’exposition.

</details>

<details>
  <summary>CSAM/SAM</summary>

Tout matériel représentant l’exploitation sexuelle de personnes. Tolérance zéro.

</details>

<details>
  <summary>Contenu illégal</summary>

Contenu violant la loi applicable tel que la propagande extrémiste, les menaces, les discours haineux, l’incitation à la violence ou la diffamation. Les variantes incluent le doxxing, les menaces explicites et les matériaux interdits par la juridiction. Fournissez l’emplacement exact et, si connu, la base légale concernée.

</details>

<details>
  <summary>Autre</summary>

Abus ne correspondant pas aux catégories ci-dessus mais nuisant néanmoins aux utilisateurs ou aux systèmes. Exemples : hébergement de malwares, C2 de botnets, fraude et cryptominage non autorisé. Partagez les hachages, URLs, schémas C2 et anomalies d’utilisation des ressources.

</details>

## Informations requises

Pour garantir un signalement complet et exploitable, veuillez fournir des détails complets qui nous permettent d’identifier la ressource, de vérifier l’incident et de prendre les mesures appropriées, incluant les éléments suivants :
- Emplacement. URL, IP, port, nom d’hôte, chemin de fichier, hachage
- Horodatages en UTC au format YYYY-MM-DDTHH:MM:SSZ
- Description. Ce qui s’est passé, comment détecté, impact observé
- Preuves. Captures d’écran, journaux texte, email complet avec en-têtes au format EML, PCAP court, NetFlow, en-têtes HTTP

## Fichiers acceptés et modalités

Fournissez les preuves dans des formats clairs et accessibles de manière fiable. Joignez les petits fichiers à votre email ou hébergez les fichiers volumineux en externe. Joignez directement les fichiers petits à moyens. Préférez les formats ouverts et non modifiés. Le texte brut est préférable aux captures d’écran de texte.

Pour les fichiers volumineux, partagez un lien de téléchargement stable. Il doit être accessible sans interaction ou inclure des identifiants clairs. Indiquez la durée de validité du lien. Ajoutez des sommes de contrôle pour permettre la vérification d’intégrité.

Utilisez des formats standards tels que TXT, PDF, PNG, JPG, PCAP ou PCAPNG, EML, HAR, CSV et JSON. N’incluez pas de mots de passe, clés privées ou données personnelles complètes sauf si strictement nécessaire.

Pour la qualité, soumettez les emails au format EML avec tous les en-têtes, les journaux en texte brut, les traces réseau sous forme de captures PCAP ou PCAPNG courtes et pertinentes, et les captures d’écran en résolution originale.

Pour la sécurité, censurez tout secret ; si nécessaire, placez les fichiers dans une archive protégée par mot de passe et partagez le mot de passe séparément. Pour CSAM/SAM, ne transmettez pas les fichiers, fournissez uniquement des liens.

## Contactez-nous

Envoyez votre signalement à `abuse@zap-hosting.com`. Il est important d’utiliser un objet clair tel que `Signalement Abus Phishing` ou `Signalement Abus DDoS`. Envoyez un email par incident. L’exemple ci-dessous montre une demande complète :

```
To: abuse@zap-hosting.com
Subject: Abuse Report Brute Force (SSH)

Location:
- Target IP: XXX.XX.XXX.XX
- Service: SSH
- Port: 22
- Hostname: v12345.zap-hosting.com

Timestamps (UTC):
- First seen: 2025-08-23T09:12:04Z
- Last seen: 2025-08-23T10:03:31Z

Description:
Repeated SSH login attempts with rotating usernames and source IPs. Detected via anomalies in auth.log and elevated connection rate. Password authentication disabled after detection. No successful login observed.

Evidence:
- auth.log excerpt with multiple "Failed password" and "Invalid user" entries
- fail2ban log snippet showing bans and source addresses
- 60-second PCAP capturing TCP attempts to port 22
- Aggregate counts: 12,438 attempts from 352 source IPs
- Top sources with ASN information

Sample log excerpt:
2025-08-23T09:55:17Z sshd[2173]: Failed password for invalid user admin from XXX.X.XXX.XX port XXXX ssh2
2025-08-23T09:55:18Z sshd[2173]: Failed password for root from XXX.X.XX
```

## Que se passe-t-il ensuite

Notre équipe Abuse traite votre signalement aussi rapidement que possible et répond promptement. Nous examinons l’incident et le priorisons selon sa gravité.

Selon l’examen, nous prenons des mesures incluant la notification du client, la suspension temporaire ou permanente, la suppression du contenu signalé, la conservation des preuves et la notification des autorités compétentes si nécessaire.