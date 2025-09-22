---
id: vserver-iso
title: "VPS : Monter un fichier ISO"
description: Informations sur la façon de monter un fichier ISO sur votre VPS depuis ZAP-Hosting - Documentation ZAP-Hosting.com
sidebar_label: Monter un fichier ISO
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introduction à ce guide
Vous souhaitez encore plus de liberté dans le choix de votre système ? En plus de nos modèles de systèmes d’exploitation, vous pouvez bien sûr monter vos propres ISO. C’est super facile avec nos produits VPS. Ainsi, vous obtenez exactement le système d’exploitation que vous souhaitez vraiment sur votre serveur ! Bonjour, je m’appelle Florian ! Sympa, non ?

<InlineVoucher />



## Fichiers ISO disponibles

En plus de nos modèles standard préconfigurés, nous proposons également la possibilité de monter des fichiers ISO supplémentaires. Cela offre encore plus de flexibilité lors de la configuration et de la gestion de votre environnement serveur. Nos produits VPS prennent actuellement en charge les fichiers ISO suivants : 

<SearchableItemList items={items} />

:::info Fichier ISO manquant ?
Y a-t-il un ISO spécifique que vous souhaitez utiliser et qui n’est pas disponible ? Contactez simplement notre équipe de support – nous serons heureux de vérifier si nous pouvons l’ajouter pour vous.
:::





## Monter un fichier ISO
Pour monter un ISO, rendez-vous dans votre panneau de gestion VPS et ouvrez **Paramètres → ISOs**. Sélectionnez le fichier ISO souhaité, ajustez l’ordre de démarrage, puis redémarrez votre serveur. 

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Après le redémarrage, vous pouvez vous connecter à votre serveur via le client VNC et commencer à installer et configurer le système d’exploitation.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Statut en ligne ou connexions à distance après montage ISO

Après le montage d’un ISO, votre serveur n’est pas encore configuré. Par conséquent, aucun **statut en ligne** ne sera affiché dans le panneau, et les **connexions RDP** ou **SSH** ne seront pas disponibles. Elles ne deviendront accessibles qu’une fois que le système d’exploitation aura été installé et configuré avec succès.

:::




## Conclusion
Félicitations, vous avez sélectionné et monté votre fichier ISO avec succès. Pour toute question ou assistance supplémentaire, n’hésitez pas à contacter notre équipe de support, disponible quotidiennement pour vous aider ! 🙂



<InlineVoucher />