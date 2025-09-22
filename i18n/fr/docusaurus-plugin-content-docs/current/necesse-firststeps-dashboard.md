---
id: necesse-firststeps-dashboard
title: "Necesse : Aperçu du tableau de bord"
description: Informations sur le tableau de bord d'un serveur Necesse de ZAP-Hosting - Documentation ZAP-Hosting.com
sidebar_label: Tableau de bord
services:
  - gameserver-necesse
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction2

Vous êtes intéressé par un **serveur Necesse** ou en possédez déjà un, mais vous manquez encore d'un aperçu complet de l'administration et de la recherche de toutes les options nécessaires ? Surtout au début, cela peut être un défi. Mais ne vous inquiétez pas, nous vous fournirons ci-dessous une introduction détaillée à l'administration de votre service, afin que vous ayez le meilleur aperçu possible.

Après avoir parcouru ce guide, vous serez en mesure de gérer votre serveur efficacement et de trouver rapidement et facilement toutes les options et fonctionnalités nécessaires. Ici, vous obtiendrez un aperçu structuré qui vous aidera étape par étape à vous familiariser avec l'administration du serveur et à élargir vos connaissances de manière ciblée. De cette façon, vous pouvez vous assurer que votre **serveur Necesse** est optimal pour vos besoins et que vous tirez le meilleur parti des options disponibles. Test

<InlineVoucher />

## Administration du produit

Dans la section **Administration du produit**, vous trouverez toutes les pages nécessaires pour gérer votre serveur. Les options pour gérer votre serveur sont listées en détail ci-dessous. 

### Tableau de bord

Le **Tableau de bord** de votre serveur est le cœur de l'administration. Toutes les informations de base et essentielles concernant votre service y sont clairement présentées. Cela inclut, par exemple, des informations sur l'emplacement, le statut, IP : Port, mémoire utilisée, jeu en cours, nom du serveur, carte et le nombre de slots disponibles. De plus, l'utilisation du CPU, de la mémoire et de la RAM est également affichée.

![img](https://screensaver01.zap-hosting.com/index.php/s/HKWMjAMexGeHQmw/preview)

Dans le tableau de bord, vous avez également la possibilité de démarrer, d'arrêter ou de redémarrer votre service, afin d'avoir un contrôle total sur son fonctionnement. De plus, vous pouvez accéder à la console en direct pour obtenir des informations en temps réel sur l'état du serveur et agir directement si nécessaire.

### Gestionnaire DDoS

Consultez les attaques DDoS passées pour mieux évaluer les menaces et les schémas potentiels. Activez les notifications pour les attaques DDoS en cours sur votre serveur afin de réagir rapidement lorsqu'un incident se produit.

Selon l'emplacement du serveur et la protection DDoS disponible, vous pouvez également surveiller les attaques actives en temps réel. Cela inclut des informations détaillées sur le trafic, montrant à la fois le trafic légitime et la quantité de trafic bloqué par les systèmes de mitigation. Ce niveau de transparence vous aide à comprendre comment la protection fonctionne et vous permet d'identifier les risques potentiels tôt.

:::info Accès au gestionnaire DDoS manquant ?
L'utilisation du Gestionnaire DDoS nécessite soit une adresse IP dédiée, soit l'option supplémentaire "Aperçu du Gestionnaire DDoS". Si votre package actuel ne comprend pas ces composants, vous pouvez les ajouter à tout moment en mettant à niveau votre service.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::warning
L'utilisation du Gestionnaire DDoS n'est possible que si soit une adresse IP propre, soit l'option "Aperçu du Gestionnaire DDoS" a été réservée en tant qu'option supplémentaire. Si ces composants manquent dans votre package actuel, vous pouvez les ajouter à tout moment en mettant à niveau.
:::

### Fichiers journaux

Un problème technique se produit et vous n'êtes pas sûr de sa cause ? Une première stratégie de solution possible est de vérifier les **Fichiers journaux**. Ces fichiers contiennent beaucoup d'informations sur le serveur, telles que les événements actuels, les indices ou les messages d'erreur.

Les messages d'erreur, en particulier, peuvent aider à identifier et à mieux comprendre la cause d'un problème. Souvent, des difficultés peuvent être découvertes et résolues en examinant de manière ciblée les fichiers journaux.

:::warning
Les informations trouvées là-bas ne vous aident pas ou vous ne les comprenez pas ? Ne vous inquiétez pas ! Dans ce cas, nous sommes également disponibles quotidiennement en support. Il vous suffit de créer un **[Ticket](https://zap-hosting.com/en/customer/support/)** et de nous expliquer votre problème. Nous l'examinerons aussi rapidement que possible et vous aiderons à résoudre le problème en conséquence ! :)
:::

### Journal des événements

Le **Journal des événements** vous fournit un aperçu complet de toutes les activités liées à l'administration du serveur. Ici, vous pouvez suivre à tout moment quand un serveur a démarré, arrêté ou planté, ainsi que quand des mises à jour, des sauvegardes ou de nouvelles installations ont été effectuées.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Interruptions de service

Votre serveur a été temporairement hors ligne et vous ne pouvez pas expliquer pourquoi ? Un coup d'œil dans le journal des événements et les fichiers journaux n'a pas non plus fourni d'informations ? Il se pourrait que la cause du problème ne réside pas directement dans votre serveur, mais dans le système hôte sur lequel votre serveur est exploité.

Si notre système de surveillance détecte une interruption générale, nos techniciens sont automatiquement informés et s'occupent du problème dès que possible.

Dans cette section, vous trouverez un aperçu de l'historique des interruptions du système hôte sur lequel votre service de serveur de jeu fonctionne. Vous pouvez trouver plus d'informations et la dernière version de notre statut de service sur notre nouvelle [page de statut](https://status.zap-hosting.com/).

## Paramètres

Dans la section **Paramètres**, vous trouverez toutes les pages nécessaires pour configurer votre serveur. Les options disponibles pour configurer votre serveur sont listées en détail ci-dessous.

### Paramètres

Sous les paramètres, vous trouverez un aperçu des options de configuration les plus courantes pour votre serveur. Celles-ci incluent également une brève explication. L'utilisation de la page des paramètres est particulièrement recommandée pour les nouveaux venus dans l'administration des serveurs.

Si vous êtes plus confiant et souhaitez apporter des modifications plus précises, nous vous recommandons d'utiliser l'Éditeur de configuration à la place. Vous pouvez trouver plus d'informations à ce sujet dans la catégorie **Configs**.

### Configs

L'éditeur de fichiers de configuration vous permet de modifier les fichiers de configuration directement depuis le site web de manière classique, sans la vue simplifiée. Cette option vous permet de personnaliser les paramètres de votre serveur et de les configurer selon vos préférences personnelles.

En utilisant l'éditeur, vous avez un accès direct à toutes les options disponibles et pouvez les personnaliser précisément. Cela est particulièrement utile pour les utilisateurs avancés qui souhaitent avoir un contrôle total sur les paramètres de leur serveur et savent exactement quelles modifications ils souhaitent apporter.

:::warning
Avez-vous remarqué que certaines de vos modifications sont partiellement écrasées ? Veuillez noter que certaines valeurs d'options sont prises à partir de la page des paramètres. Si vous souhaitez apporter ces modifications directement dans la configuration, vous devez d'abord désactiver les options pertinentes sur la page des paramètres.
:::

### Jeux

Sous **Jeux**, vous avez toujours la possibilité de changer la variante de jeu de votre jeu existant ou d'installer un autre jeu en général. Les jeux avec le même prix de slot peuvent être sélectionnés directement sous **Jeux disponibles**. Pour tous les autres jeux, un ajustement du prix du slot est d'abord requis. Plus d'informations à ce sujet peuvent être trouvées dans le guide de changement de jeu.

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versions

Sous **Versions**, vous avez la possibilité de visualiser et de gérer la version actuelle de votre serveur de jeu. Ici, vous pouvez mettre à jour vers la dernière version à tout moment ou activer les mises à jour automatiques pour vous assurer que votre serveur est toujours à jour.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

De plus, vous pouvez également activer la fonctionnalité de notification par e-mail pour les mises à jour automatiques afin de vous tenir informé des mises à jour et de vous assurer que vous êtes toujours à jour.

### Tâches planifiées

Créez des tâches planifiées qui s'exécutent automatiquement à des moments définis pour automatiser divers processus sur votre serveur. Vous pouvez définir si une tâche doit s'exécuter une fois ou se répéter selon les besoins. Les types de tâches pris en charge incluent le démarrage, l'arrêt ou le redémarrage des services, le redémarrage du serveur s'il est en ligne, la création de sauvegardes ou l'exécution de commandes personnalisées.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Planificateur de redémarrage

Souhaitez-vous planifier des redémarrages de serveur à des moments spécifiques ? Le Planificateur de redémarrage vous permet de configurer des redémarrages automatiques programmés de votre serveur de jeu. Avec cette fonctionnalité, vous pouvez configurer des redémarrages à des moments spécifiques ou à intervalles réguliers.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

## Outils

Dans la section **Outils** de votre panneau de navigation, vous trouverez une gamme de sous-éléments qui vous aideront à gérer votre serveur. Ceux-ci incluent **Navigateur FTP**, **Bases de données** et **Sauvegardes**. Dans ce qui suit, vous recevrez une introduction détaillée à ces différents domaines.

### Navigateur FTP

En utilisant le **Navigateur FTP**, vous obtiendrez toutes les informations nécessaires pour établir une connexion à l'accès FTP. L'accès FTP vous permet d'accéder directement aux fichiers de votre serveur de jeu. Nous recommandons d'utiliser un programme FTP externe tel que **Filezilla** ou **WinSCP** pour une utilisation optimale. Si vous n'êtes pas familier avec l'utilisation de FTP, nous vous recommandons de consulter notre guide d'accès FTP qui pourrait vous aider.

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla :**  FileZilla est probablement le client FTP le plus simple et le plus connu. Il suffit de l'installer, de le démarrer et d'entrer vos identifiants dans la barre supérieure, que vous trouverez un peu plus haut sur cette page. Après un rapide clic sur "Connecter", vous êtes directement connecté au serveur et pouvez gérer les fichiers.

**WinSCP :**  WinSCP est en fait destiné à SCP et SFTP (les versions cryptées du protocole de transfert de fichiers FTP), mais peut également gérer le FTP normal. Le programme est un peu plus complet que FileZilla et convient mieux aux utilisateurs avancés.

### Bases de données

En plus de nos produits de serveur de jeu, nous proposons également 10 bases de données incluses. Ces bases de données sont nécessaires, par exemple, lorsque des données doivent être stockées dans une base de données. Sous **Bases de données**, vous pouvez créer une base de données et visualiser les identifiants d'accès. Vous avez également la possibilité d'activer l'option de sauvegarde et d'importer des sauvegardes de bases de données existantes.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Sauvegardes

Sous **Sauvegardes**, vous avez la possibilité de créer à la fois des sauvegardes manuelles et automatiques pour votre serveur et sa base de données associée. Cela facilite la récupération de vos données en cas de problèmes ou de perte de données.

Dans les paramètres, vous pouvez spécifier si des sauvegardes doivent être créées automatiquement et si cela doit être fait quotidiennement ou hebdomadairement. De plus, vous pouvez décider si les sauvegardes les plus anciennes doivent être supprimées si nécessaire, par exemple lorsque l'espace de stockage disponible devient limité.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Nous fournissons par défaut 10 Go d'espace de stockage sur le serveur de stockage pour les sauvegardes de nos produits de serveur de jeu. Si vous avez besoin de plus d'espace de stockage, il peut être mis à niveau moyennant des frais. De cette façon, vous vous assurez d'avoir toujours suffisamment d'espace pour vos sauvegardes et de pouvoir accéder aux anciennes sauvegardes si nécessaire.

## Liens supplémentaires
Dans la section **Liens supplémentaires**, vous trouverez d'autres liens qui sont pertinents pour votre produit.

### Questions Fréquemment Posées
La section **Questions Fréquemment Posées** fournit un aperçu des questions les plus couramment posées par nos clients. Ici, vous trouverez des réponses utiles et des informations détaillées sur divers sujets pour vous aider rapidement et efficacement.

### Documentation ZAP-Hosting
Nous offrons une documentation extensive pour nos produits, qui sert de base de connaissances pour les questions et préoccupations les plus fréquemment posées. Vous y trouverez divers guides et aides sur différents sujets qui vous aideront à utiliser et à gérer votre produit.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Actualités
Les **Actualités** vous fournissent un aperçu complet de toutes les annonces et nouvelles liées à votre service. Ici, vous trouverez des informations importantes sur divers aspects tels que :

- Changements du service par exemple par des mises à jour ou de nouvelles fonctionnalités
- Annonces concernant d'éventuelles maintenances ou problèmes techniques
- Offres spéciales et promotions qui vous donnent des avantages ou des réductions exclusives
- Autres informations pertinentes qui peuvent être importantes pour l'utilisation de votre service

En consultant régulièrement les **Actualités**, vous resterez informé et pourrez ajuster votre service en conséquence pour tirer le meilleur parti de votre serveur.

<InlineVoucher />