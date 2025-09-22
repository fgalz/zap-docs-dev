---
id: necesse-firststeps-dashboard
title: "Necesse : Vue d'ensemble du tableau de bord"
description: Informations sur le tableau de bord d'un serveur Necesse de ZAP-Hosting - Documentation ZAP-Hosting.com
sidebar_label: Tableau de bord
services:
  - gameserver-necesse
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous êtes intéressé par un **serveur Necesse** ou en possédez déjà un, mais il vous manque encore une vue d'ensemble complète de l'administration et de la localisation de toutes les options nécessaires ? Surtout au début, cela peut être un défi. Mais ne vous inquiétez pas, nous vous proposons ci-dessous une introduction détaillée à l'administration de votre service, afin que vous disposiez de la meilleure vue d'ensemble possible.

Après avoir parcouru ce guide, vous serez en mesure de gérer facilement votre serveur de manière efficace et de trouver rapidement et simplement toutes les options et fonctionnalités nécessaires. Ici, vous obtiendrez une vue d'ensemble structurée qui vous aidera étape par étape à vous familiariser avec l'administration du serveur et à élargir vos connaissances de manière ciblée. Ainsi, vous pourrez vous assurer que votre **serveur Necesse** est parfaitement adapté à vos besoins et que vous tirez le meilleur parti des options disponibles. Test

<InlineVoucher />

## Administration du produit

Dans la section **Administration du produit**, vous trouverez toutes les pages nécessaires à la gestion de votre serveur. Les options pour gérer votre serveur sont détaillées ci-dessous.



### Tableau de bord

Le **tableau de bord** de votre serveur est le cœur de l'administration. Toutes les informations de base et essentielles concernant votre service y sont présentées de manière claire. Cela inclut, par exemple, des informations sur l'emplacement, le statut, l'IP : Port, la mémoire utilisée, le jeu en cours, le nom du serveur, la carte et le nombre de slots disponibles. De plus, l'utilisation du CPU, de la mémoire et de la RAM est également affichée.

![img](https://screensaver01.zap-hosting.com/index.php/s/HKWMjAMexGeHQmw/preview)

Dans le tableau de bord, vous avez également la possibilité de démarrer, arrêter ou redémarrer votre service, afin d'avoir un contrôle total sur son fonctionnement. En outre, vous pouvez accéder à la console en direct pour obtenir des informations en temps réel sur l'état du serveur et intervenir directement si nécessaire.






### Gestionnaire DDoS



Consultez les attaques DDoS passées pour mieux évaluer les menaces potentielles et les schémas. Activez les notifications pour les attaques DDoS en cours sur votre serveur afin de réagir rapidement en cas d'incident.

Selon l'emplacement du serveur et la protection DDoS disponible, vous pouvez également surveiller les attaques actives en temps réel. Cela inclut des informations détaillées sur le trafic, montrant à la fois le trafic légitime et la quantité de trafic bloquée par les systèmes d'atténuation. Ce niveau de transparence vous aide à comprendre le fonctionnement de la protection et vous permet d'identifier rapidement les risques potentiels.

:::info Accès au gestionnaire DDoS manquant ?
L'utilisation du Gestionnaire DDoS nécessite soit une adresse IP dédiée, soit l'option supplémentaire "Aperçu du Gestionnaire DDoS". Si votre forfait actuel ne comprend pas ces composants, vous pouvez les ajouter à tout moment en améliorant votre service.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)





:::warning
L'utilisation du Gestionnaire DDoS n'est possible que si une adresse IP propre ou l'option "Aperçu du Gestionnaire DDoS" a été réservée en tant qu'option supplémentaire. Si ces composants manquent dans votre forfait actuel, vous pouvez les ajouter à tout moment en effectuant une mise à niveau.
:::



### Fichiers journaux

Un problème technique survient et vous ne savez pas d'où il vient ? Une première stratégie possible est de vérifier les **fichiers journaux**. Ces fichiers contiennent beaucoup d'informations sur le serveur, telles que les événements actuels, des indices ou des messages d'erreur.

Les messages d'erreur en particulier peuvent aider à identifier et mieux comprendre la cause d'un problème. Souvent, les difficultés peuvent être découvertes et résolues en examinant de manière ciblée les fichiers journaux.

:::warning
Les informations trouvées ne vous aident pas ou vous ne les comprenez pas ? Ne vous inquiétez pas ! Dans ce cas, notre support est également disponible tous les jours. Il vous suffit de créer un **[ticket](https://zap-hosting.com/en/customer/support/)** et de nous expliquer votre problème. Nous l'examinerons aussi rapidement que possible et vous aiderons à résoudre le problème en conséquence ! :)
:::


### Journal des événements

Le **journal des événements** vous offre une vue d'ensemble complète de toutes les activités liées à l'administration du serveur. Vous pouvez y suivre à tout moment quand un serveur a démarré, arrêté ou planté, ainsi que quand des mises à jour, sauvegardes ou nouvelles installations ont été effectuées.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)



### Interruptions de service

Votre serveur a été temporairement hors ligne et vous ne pouvez pas expliquer pourquoi ? Un coup d'œil dans le journal des événements et les fichiers journaux n'a pas non plus fourni d'informations ? Il se peut que la cause du problème ne soit pas directement liée à votre serveur, mais au système hôte sur lequel votre serveur est exploité.

Si notre système de surveillance détecte une interruption générale, nos techniciens sont automatiquement informés et prennent en charge le problème dès que possible.

Dans cette section, vous trouverez un aperçu de l'historique des interruptions du système hôte sur lequel votre service de serveur de jeu fonctionne. Vous pouvez trouver plus d'informations et la dernière version de notre état de service sur notre nouvelle [page de statut](https://status.zap-hosting.com/).












## Paramètres

Dans la section **Paramètres**, vous trouverez toutes les pages nécessaires à la configuration de votre serveur. Les options disponibles pour configurer votre serveur sont détaillées ci-dessous.



### Paramètres

Dans les paramètres, vous trouverez un aperçu des options de configuration les plus courantes pour votre serveur. Celles-ci incluent également une brève explication. L'utilisation de la page des paramètres est particulièrement recommandée aux débutants en administration de serveur.

Si vous êtes plus à l'aise et souhaitez effectuer des modifications plus précises, nous vous recommandons d'utiliser plutôt l'éditeur de configuration. Vous trouverez plus d'informations à ce sujet dans la catégorie **Configs**.



### Configs

L'éditeur de fichiers de configuration vous permet de modifier directement les fichiers de configuration depuis le site web de manière classique, sans la vue simplifiée. Cette option vous permet de personnaliser les paramètres de votre serveur et de les configurer selon vos préférences personnelles.

En utilisant l'éditeur, vous avez un accès direct à toutes les options disponibles et pouvez les personnaliser précisément. Cela est particulièrement utile pour les utilisateurs avancés qui souhaitent un contrôle total sur les paramètres de leur serveur et savent exactement quelles modifications ils veulent apporter.

:::warning
Avez-vous remarqué que certaines de vos modifications sont partiellement écrasées ? Veuillez noter que certaines valeurs d'option sont prises depuis la page des paramètres. Si vous souhaitez effectuer ces modifications directement dans la config, vous devez d'abord désactiver les options concernées sur la page des paramètres.
:::


### Jeux

Sous **Jeux**, vous avez toujours la possibilité de changer la variante de jeu de votre jeu existant ou d'installer un autre jeu en général. Les jeux avec le même prix par slot peuvent être sélectionnés directement sous **Jeux disponibles**. Pour tous les autres jeux, un ajustement du prix par slot est d'abord nécessaire. Plus d'informations à ce sujet sont disponibles dans le guide de changement de jeu.

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)



### Versions

Sous **Versions**, vous avez la possibilité de voir et gérer la version actuelle de votre serveur de jeu. Vous pouvez y mettre à jour vers la dernière version à tout moment ou activer les mises à jour automatiques pour garantir que votre serveur soit toujours à jour.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

De plus, vous pouvez également activer la fonction de notification par e-mail pour les mises à jour automatiques afin de rester informé des mises à jour et vous assurer d'être toujours à jour.



### Tâches planifiées

Créez des tâches planifiées qui s'exécutent automatiquement à des moments définis pour automatiser divers processus sur votre serveur. Vous pouvez définir si une tâche doit s'exécuter une seule fois ou se répéter selon les besoins. Les types de tâches pris en charge incluent le démarrage, l'arrêt ou le redémarrage des services, le redémarrage du serveur s'il est en ligne, la création de sauvegardes ou l'exécution de commandes personnalisées.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Planificateur de redémarrage

Vous souhaitez programmer des redémarrages du serveur à des moments spécifiques ? Le Planificateur de redémarrage vous permet de configurer des redémarrages automatiques planifiés de votre serveur de jeu. Avec cette fonctionnalité, vous pouvez configurer des redémarrages à des heures précises ou à intervalles réguliers.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)



## Outils

Dans la section **Outils** de votre panneau de navigation, vous trouverez plusieurs sous-éléments qui vous aideront à gérer votre serveur. Ceux-ci incluent **Navigateur FTP**, **Bases de données** et **Sauvegardes**. Vous recevrez ci-dessous une introduction détaillée à ces différents domaines.



### Navigateur FTP

Avec le **Navigateur FTP**, vous obtiendrez toutes les informations nécessaires pour établir une connexion à l'accès FTP. L'accès FTP vous permet un accès direct aux fichiers de votre serveur de jeu. Nous recommandons d'utiliser un programme FTP externe tel que **Filezilla** ou **WinSCP** pour une utilisation optimale. Si vous ne savez pas comment utiliser FTP, nous vous recommandons de consulter notre guide d'accès FTP qui pourrait vous aider.

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla :** FileZilla est probablement le client FTP le plus simple et le plus connu. Installez-le simplement, lancez-le et saisissez vos identifiants dans la barre supérieure, que vous trouverez un peu plus haut sur cette page. Après un clic rapide sur "Connecter", vous êtes directement connecté au serveur et pouvez gérer les fichiers.

**WinSCP :** WinSCP est en fait destiné à SCP et SFTP (les dérivés chiffrés du protocole de transfert de fichiers FTP), mais peut tout aussi bien gérer le FTP normal. Le programme est un peu plus complet que FileZilla et convient plutôt aux utilisateurs avancés.



### Bases de données

En plus de nos produits de serveurs de jeu, nous proposons également 10 bases de données incluses. Ces bases de données sont nécessaires, par exemple, lorsque des données doivent être stockées dans une base de données. Sous **Bases de données**, vous pouvez créer une base de données et consulter les identifiants d'accès. Vous avez également la possibilité d'activer l'option de sauvegarde et d'importer des sauvegardes de bases de données existantes.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)



### Sauvegardes

Sous **Sauvegardes**, vous avez la possibilité de créer des sauvegardes manuelles et automatiques pour votre serveur et sa base de données associée. Cela facilite la récupération de vos données en cas de problème ou de perte de données.

Dans les paramètres, vous pouvez spécifier si les sauvegardes doivent être créées automatiquement et si cela doit être fait quotidiennement ou hebdomadairement. De plus, vous pouvez décider si les sauvegardes les plus anciennes doivent être supprimées si nécessaire, par exemple lorsque l'espace de stockage disponible devient limité.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Nous fournissons par défaut 10 Go d'espace de stockage sur le serveur de stockage pour les sauvegardes de nos produits de serveurs de jeu. Si vous avez besoin de plus d'espace de stockage, il peut être augmenté moyennant des frais. Ainsi, vous vous assurez d'avoir toujours suffisamment d'espace pour vos sauvegardes et pouvez toujours accéder aux sauvegardes plus anciennes si nécessaire.

## Liens supplémentaires
Dans la section **Liens supplémentaires**, vous trouverez d'autres liens pertinents pour votre produit.

### Questions fréquemment posées
La section **Questions fréquemment posées** offre un aperçu des questions les plus courantes posées par nos clients. Vous y trouverez des réponses utiles et des informations détaillées sur divers sujets pour vous aider rapidement et efficacement.

### Documentation ZAP-Hosting
Nous proposons une documentation complète pour nos produits, qui sert de base de connaissances pour les questions et préoccupations les plus fréquentes. Vous y trouverez divers guides et aides sur différents sujets qui vous assisteront dans l'utilisation et la gestion de votre produit.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Actualités
Les **Actualités** vous fournissent une vue d'ensemble complète de toutes les annonces et nouveautés liées à votre service. Vous y trouverez des informations importantes sur divers aspects tels que :

- Les changements du service, par exemple par des mises à jour ou de nouvelles fonctionnalités
- Les annonces concernant d'éventuelles maintenances ou problèmes techniques
- Les offres spéciales et promotions qui vous donnent des avantages ou réductions exclusifs
- D'autres informations pertinentes pouvant concerner l'utilisation de votre service

En consultant régulièrement les **Actualités**, vous resterez informé et pourrez ajuster votre service en conséquence pour tirer le meilleur parti de votre serveur.

<InlineVoucher />