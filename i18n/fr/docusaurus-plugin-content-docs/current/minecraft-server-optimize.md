---
id: minecraft-server-optimize
title: "Minecraft : optimisation des performances du serveur"
description: Informations sur la façon d'optimiser votre serveur Minecraft chez ZAP-Hosting pour de meilleures performances - Documentation ZAP-Hosting.com
sidebar_label: Optimisation du serveur Minecraft
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Que se passe-t-il exactement lors de l'optimisation ?

L'optimisation est un point important pour les serveurs Minecraft afin qu'ils puissent fonctionner sans accroc et vous devriez absolument y consacrer suffisamment de temps sur un serveur public. Ce n'est qu'avec beaucoup de temps et de tests qu'il est possible d'obtenir le meilleur résultat. Cette documentation n'est donc pas nécessairement à suivre à la lettre, mais plutôt destinée à vous aider à aller dans la bonne direction.

Dans la plupart des cas, l'optimisation modifie un grand nombre de paramètres sur les serveurs, ce qui change parfois considérablement le comportement du serveur lui-même. Entre autres, certains réglages sont resserrés, ce qui soulage le serveur et peut ainsi fournir plus de performances. Cependant, afin que l'expérience de jeu générale ne soit pas trop affectée, vous devez toujours trouver le juste milieu ici.

## Vanilla

Les options pour optimiser un serveur vanilla sont malheureusement très limitées, car il n'y a que peu d'options de configuration disponibles. Nous essayons de donner un peu plus de puissance au serveur vanilla en prenant les mesures suivantes :

### Visibilité

Une mesure très souvent prise est de réduire la portée de vision. La portée de vue standard est de 10 chunks, mais beaucoup de joueurs jouent avec beaucoup moins, comme 6-8. Certains joueurs exagèrent avec les chunks et définissent parfois cette valeur à 32 chunks par exemple, ce qui signifie que le serveur doit alors charger et traiter tous ces chunks, ce qui coûte beaucoup de performances.

Avec un serveur vanilla, la portée de visibilité peut être ajustée dans la configuration "server.properties", pour cela la valeur "view-distance" doit être modifiée. Afin de ne pas trop restreindre l'expérience de jeu, il est recommandé de régler cette valeur à 5-6, ce qui soulage le serveur jusqu'à 50%.
Nous avons déjà une entrée dans notre documentation à ce sujet, que vous pouvez trouver ici.

### Compression des données

Sur un serveur, il y a un échange permanent entre le serveur et les joueurs connectés. Les mouvements des joueurs eux-mêmes sont transmis au serveur, qui les renvoie ensuite à tous les autres joueurs. Mais aussi les actions des joueurs ou les événements dans le monde, comme les explosions par exemple, font partie des données qui sont transmises en boucle.

Pour rendre la régularité de cet échange un peu plus élégante, la taille des données compressées peut être doublée, ce qui signifie que le serveur n'a plus qu'à fournir 50 % de l'effort pour échanger les mêmes données avec les joueurs par rapport à avant. Pour cela, la valeur "network-compression-threshold" doit également être ajustée dans la configuration "server.properties". La valeur doit être réglée à 512 ici. Là aussi, nous avons déjà une entrée dans notre documentation, que vous pouvez trouver ici.

## Forge

Comme pour Vanilla, les options qui peuvent être modifiées sur le serveur lui-même sont malheureusement quelque peu limitées, car seuls de très petits fichiers de configuration sont disponibles. Cependant, l'installation de mods supplémentaires est possible, ce qui signifie que le serveur peut également être quelque peu déchargé.

### Préchargement des chunks

Une possibilité pour soulager le serveur est que les chunks soient préchargés. Le serveur doit alors seulement charger les données de chunks sauvegardées lors de l'exploitation ultérieure avec des joueurs et ne pas créer ni générer tous les chunks. Ce processus peut être lancé de préférence pendant la nuit, que vous démarrez la veille au soir.

Un mod supplémentaire doit être installé pour cela. Un mod très adapté peut être installé [ici](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator).
Le mod peut ensuite être installé normalement sur le serveur comme décrit dans nos instructions.

Avant de redémarrer le serveur, vous devez vous assurer que la valeur "max-tick-time" dans "server.properties" est réglée sur "-1". Sinon, le serveur pourrait planter. Il est également conseillé d'avoir au moins 8-10 Go de RAM disponibles, car ce processus nécessite malheureusement beaucoup de RAM. À cet effet, la RAM peut être temporairement augmentée pendant la nuit, puis réduite à nouveau une fois ce processus terminé.

:::info
Notez que le mod mentionné ci-dessus peut ne pas être compatible avec la version de Forge que vous utilisez et que le processus peut différer de celui décrit ici si vous utilisez un mod différent.
:::

Dès que le serveur est démarré avec le mod, la console doit être ouverte. Nous recommandons de créer une bordure pour le monde avec un rayon de 16 000 blocs. Pour cela, les commandes suivantes doivent être exécutées dans l'ordre :

- worldborder center 0 0
- worldborder set 16000

:::info
Si nécessaire, remplacez les coordonnées par le centre de votre propre monde avec la commande center afin de ne pas "couper" votre monde (qui a peut-être déjà été construit).
:::

Dès que la bordure est définie, le préchargement proprement dit peut commencer. Pour cela, la commande suivante doit être exécutée :

- pregen gen startWorldBorder

Tous les chunks à l'intérieur de la bordure sont alors préchargés un par un. Ce processus peut durer jusqu'à 8 heures selon le nombre de mods installés. La progression de ce processus est toujours affichée dans la console via des messages d'information à intervalles réguliers. Dès que le processus est terminé, cela est également affiché dans la console !

:::info
Le mod peut toujours être installé sur le serveur même après la fin de ce processus. Il continuera à optimiser les chunks pendant l'exploitation et fonctionnera également lorsqu'il n'y a aucun joueur sur le serveur.
:::

### Visibilité

Une mesure très souvent prise est de réduire la portée de vision. La portée de vue standard est de 10 chunks, mais beaucoup de joueurs jouent avec beaucoup moins, comme 6-8. Certains joueurs exagèrent avec les chunks et définissent parfois cette valeur à 32 chunks par exemple, ce qui signifie que le serveur doit alors charger et traiter tous ces chunks, ce qui coûte beaucoup de performances.

La visibilité d'un serveur Forge peut être ajustée dans la configuration "server.properties", pour cela la valeur "view-distance" doit être modifiée. Afin de ne pas trop restreindre l'expérience de jeu, il est recommandé de régler cette valeur à 5-6, ce qui soulage le serveur jusqu'à 50%.
Nous avons déjà une entrée dans notre documentation à ce sujet, que vous pouvez trouver ici.

### Compression des données

Sur un serveur, il y a un échange permanent entre le serveur et les joueurs connectés. Les mouvements des joueurs eux-mêmes sont transmis au serveur, qui les renvoie ensuite à tous les autres joueurs. Mais aussi les actions des joueurs ou les événements dans le monde, comme les explosions par exemple, font partie des données qui sont transmises en boucle.

Pour rendre la régularité de cet échange un peu plus élégante, la taille des données compressées peut être doublée, ce qui signifie que le serveur n'a plus qu'à fournir 50 % de l'effort pour échanger les mêmes données avec les joueurs par rapport à avant. Pour cela, la valeur "network-compression-threshold" doit également être ajustée dans la configuration "server.properties". La valeur doit être réglée à 512 ici. Là aussi, nous avons déjà une entrée dans notre documentation, que vous pouvez trouver ici.

## Bukkit

### Visibilité

Une mesure très souvent prise est de réduire la portée de vision. La portée de vue standard est de 10 chunks, mais beaucoup de joueurs jouent avec beaucoup moins, comme 6-8. Certains joueurs exagèrent avec les chunks et définissent parfois cette valeur à 32 chunks par exemple, ce qui signifie que le serveur doit alors charger et traiter tous ces chunks, ce qui coûte beaucoup de performances.

La visibilité d'un serveur Forge peut être ajustée dans la configuration "server.properties", pour cela la valeur "view-distance" doit être modifiée. Afin de ne pas trop restreindre l'expérience de jeu, il est recommandé de régler cette valeur à 5-6, ce qui soulage le serveur jusqu'à 50%.
Nous avons déjà une entrée dans notre documentation à ce sujet, que vous pouvez trouver ici.

### Compression des données

Sur un serveur, il y a un échange permanent entre le serveur et les joueurs connectés. Les mouvements des joueurs eux-mêmes sont transmis au serveur, qui les renvoie ensuite à tous les autres joueurs. Mais aussi les actions des joueurs ou les événements dans le monde, comme les explosions par exemple, font partie des données qui sont transmises en boucle.

Pour rendre la régularité de cet échange un peu plus élégante, la taille des données compressées peut être doublée, ce qui signifie que le serveur n'a plus qu'à fournir 50 % de l'effort pour échanger les mêmes données avec les joueurs par rapport à avant. Pour cela, la valeur "network-compression-threshold" doit également être ajustée dans la configuration "server.properties". La valeur doit être réglée à 512 ici. Là aussi, nous avons déjà une entrée dans notre documentation, que vous pouvez trouver ici.

### Limites de spawn

À cette étape, les taux de spawn généraux des mobs sur le serveur sont quelque peu réduits. Il n'y a presque pas de différence perceptible par rapport aux valeurs normales. Néanmoins, il peut arriver dans certains endroits, par exemple avec des fermes à mobs, que la ferme à mobs ne fonctionne pas comme prévu.

Pour ajuster les paramètres à cet effet, le fichier de configuration "bukkit.yml" doit être modifié. Les valeurs suivantes doivent alors être ajustées au niveau de "spawn-limits" :
- monsters: 50 #Par défaut : 70
- animals: 10 #Par défaut : 15
- water-animals: 3 #Par défaut : 5
- ambient: 4 #Par défaut : 15

:::info
Vous êtes bien sûr libre d'ajuster vous-même les valeurs si vous le souhaitez, sinon les valeurs ci-dessus sont une très bonne moyenne.
:::

Pour améliorer davantage le spawn, la valeur "monster-spawns" dans l'élément "ticks-per" doit également être modifiée dans la configuration "bukkit.yml" :
- monster-spawns: 2 #Par défaut : 1

S'il y a un problème général avec les monstres par exemple (comme cela peut être déterminé dans le rapport de timing), la valeur peut être réglée jusqu'à 5. Le comportement du serveur doit alors être observé avec chaque valeur afin de trouver la meilleure valeur pour votre propre serveur.

### Traitement des chunks

Minecraft fonctionne avec des chunks dits. Un chunk est toujours formé de 16x16 blocs, qui sont ensuite assemblés et représentent visuellement le monde pour le client. Le serveur travaille donc uniquement avec des chunks et charge ensuite les chunks nécessaires dans la RAM. Plus il y a de chunks chargés et traités en permanence par le serveur, plus le serveur doit fournir de puissance, ce qui dans certains cas met le serveur à genoux.

Les serveurs avec les paramètres standard ne déchargent jamais les chunks chargés, ce qui signifie que la RAM est très fortement utilisée par endroits et qu'une quantité énorme est nécessaire. Bien sûr, la performance du serveur est malheureusement très réduite ici, car de plus en plus doit être traité.

Pour s'assurer que le serveur ne charge que les chunks actuellement nécessaires, les options suivantes dans la configuration "bukkit.yml" sous "chunk-gc" doivent être ajustées :
- period-in-ticks: 300 #Par défaut : 600
- load-threshold: 300 #Par défaut : 0

L'option "period-in-ticks" détermine à quels intervalles en secondes les chunks doivent être déchargés. Si vous le souhaitez, cette valeur peut également être réduite davantage, mais vous devez noter qu'un effet indésirable peut alors se produire : une boucle

En cas de boucle, le chunk serait déchargé, puis le chunk serait à nouveau nécessaire peu de temps après, ce qui signifie que le serveur doit alors investir à nouveau des performances et du temps pour recharger ce chunk. Cela se répéterait alors encore et encore, ce qui met une charge plus importante sur le serveur que si les chunks restaient chargés une minute de plus par exemple.

## Spigot

### Visibilité

Une mesure très souvent prise est de réduire la portée de vision. La portée de vue standard est de 10 chunks, mais beaucoup de joueurs jouent avec beaucoup moins, comme 6-8. Certains joueurs exagèrent avec les chunks et définissent parfois cette valeur à 32 chunks par exemple, ce qui signifie que le serveur doit alors charger et traiter tous ces chunks, ce qui coûte beaucoup de performances.

Avec un serveur spigot, la visibilité peut être ajustée dans la configuration "spigot.yml", pour cela la valeur "view-distance" doit être modifiée. Afin de ne pas trop restreindre l'expérience de jeu, il est recommandé de régler cette valeur à 5-6, ce qui soulage le serveur jusqu'à 50%.

:::info
Selon vos préférences, la valeur peut également être réglée à 4, ce qui aide très bien contre les lags lorsque vous exploitez des serveurs de type farm world fonctionnant sur la version 1.13+
:::

### Compression des données

Sur un serveur, il y a un échange permanent entre le serveur et les joueurs connectés. Les mouvements des joueurs eux-mêmes sont transmis au serveur, qui les renvoie ensuite à tous les autres joueurs. Mais aussi les actions des joueurs ou les événements dans le monde, comme les explosions par exemple, font partie des données qui sont transmises en boucle.

Pour rendre la régularité de cet échange un peu plus élégante, la taille des données compressées peut être doublée, ce qui signifie que le serveur n'a plus qu'à fournir 50 % de l'effort pour échanger les mêmes données avec les joueurs par rapport à avant. Pour cela, la valeur "network-compression-threshold" doit également être ajustée dans la configuration "server.properties". La valeur doit être réglée à 512 ici. Là aussi, nous avons déjà une entrée dans notre documentation, que vous pouvez trouver ici.

### Limites de spawn

À cette étape, les taux de spawn généraux des mobs sur le serveur sont quelque peu réduits. Il n'y a presque pas de différence perceptible par rapport aux valeurs normales. Néanmoins, il peut arriver dans certains endroits, par exemple avec des fermes à mobs, que la ferme à mobs ne fonctionne pas comme prévu.

Pour ajuster les paramètres à cet effet, le fichier de configuration "bukkit.yml" doit être modifié. Les valeurs suivantes doivent alors être ajustées au niveau de "spawn-limits" :
- monsters: 50 #Par défaut : 70
- animals: 10 #Par défaut : 15
- water-animals: 3 #Par défaut : 5
- ambient: 4 #Par défaut : 15

:::info
Vous êtes bien sûr libre d'ajuster vous-même les valeurs si vous le souhaitez, sinon les valeurs ci-dessus sont une très bonne moyenne.
:::

Pour améliorer davantage le spawn, la valeur "monster-spawns" dans l'élément "ticks-per" doit également être modifiée dans la configuration "bukkit.yml" :
- monster-spawns: 2 #Par défaut : 1

S'il y a un problème général avec les monstres par exemple (comme cela peut être déterminé dans le rapport de timing), la valeur peut être réglée jusqu'à 5. Le comportement du serveur doit alors être observé avec chaque valeur afin de trouver la meilleure valeur pour votre propre serveur.

### Traitement des chunks

Minecraft fonctionne avec des chunks dits. Un chunk est toujours formé de 16x16 blocs, qui sont ensuite assemblés et représentent visuellement le monde pour le client. Le serveur travaille donc uniquement avec des chunks et charge ensuite les chunks nécessaires dans la RAM. Plus il y a de chunks chargés et traités en permanence par le serveur, plus le serveur doit fournir de puissance, ce qui dans certains cas met le serveur à genoux.

Les serveurs avec les paramètres standard ne déchargent jamais les chunks chargés, ce qui signifie que la RAM est très fortement utilisée par endroits et qu'une quantité énorme est nécessaire. Bien sûr, la performance du serveur est malheureusement très réduite ici, car de plus en plus doit être traité.

Pour s'assurer que le serveur ne charge que les chunks actuellement nécessaires, les options suivantes dans la configuration "bukkit.yml" sous "chunk-gc" doivent être ajustées :
- period-in-ticks: 300 #Par défaut : 600
- load-threshold: 300 #Par défaut : 0

L'option "period-in-ticks" détermine à quels intervalles en secondes les chunks doivent être déchargés. Si vous le souhaitez, cette valeur peut également être réduite davantage, mais vous devez noter qu'un effet indésirable peut alors se produire : une boucle

En cas de boucle, le chunk serait déchargé, puis le chunk serait à nouveau nécessaire peu de temps après, ce qui signifie que le serveur doit alors investir à nouveau des performances et du temps pour recharger ce chunk. Cela se répéterait alors encore et encore, ce qui met une charge plus importante sur le serveur que si les chunks restaient chargés une minute de plus par exemple.

### Portée de spawn

Les mobs peuvent toujours apparaître à partir des joueurs à certains intervalles. Ici, nous réduisons un peu ce taux afin qu'il n'y ait pas de problèmes avec le spawn des mobs. Ce réglage est très important, car certains des paramètres de spawn ont déjà été ajustés, comme expliqué ci-dessus.

Nous modifions les paramètres suivants dans la configuration "spigot.yml" dans "world-settings" :
- mob-spawn-range: 3 #Par défaut : 4

### Portées des entités

À ce stade, nous définissons maintenant quand les entités - c'est-à-dire les animaux et les monstres - sont activées. Cela signifie que les animaux peuvent se déplacer par exemple ou que les monstres peuvent aussi reconnaître les joueurs. En principe, cela est activé pour tous les mobs, mais dans une sorte de veille. En mode veille, les mobs peuvent continuer à se déplacer et aussi reconnaître les joueurs, mais par exemple, les mobs ne peuvent se déplacer que très lentement, ce qui signifie que le serveur n'a pas à fournir beaucoup de puissance.

Ici aussi, les modifications doivent être effectuées dans la configuration "spigot.yml" sous l'élément "entity-activation-range". Nous recommandons d'utiliser les valeurs suivantes :
- animals: 6 #Par défaut : 32
- monsters: 16 #Par défaut : 32
- misc: 2 #Par défaut : 16
- water: 6 #Par défaut : 6
- tick-inactive-villagers: true #Par défaut : true

### Optimisations des entonnoirs

Les entonnoirs sont une partie très importante du jeu dans Minecraft. Mais pour les serveurs, ce sont de véritables poisons ! Pour chaque entonnoir placé, le serveur doit vérifier 20 fois par seconde si un objet est prêt à être ramassé. Déplacer les objets d'un entonnoir à un autre ou dans une caisse coûte aussi un travail précieux !

Pour améliorer un peu tout cela, nous augmentons les intervalles de temps auxquels le serveur doit effectuer ces actions. Avec les valeurs utilisées ici, une telle action est effectuée et vérifiée toutes les 3 secondes. Les taux de transfert ne changent pas ici. Cependant, il peut arriver que les horloges redstone créées avec des entonnoirs ne fonctionnent plus correctement.

Pour ajuster les paramètres, les valeurs suivantes doivent être modifiées dans la configuration "spigot.yml" :
- hopper-transfer: 24 #Par défaut : 8
- hopper-check: 24 #Par défaut : 8
- hopper-amount: 3 #Par défaut : 1

### Collisions

Depuis la version 1.9 de Minecraft, il y a des collisions, ce qui signifie par exemple qu'un joueur ne peut plus se tenir dans un autre joueur. Ici, nous déterminons à quelle fréquence les entités peuvent entrer en collision en général. Surtout dans les fermes à mobs, où beaucoup de mobs se retrouvent dans un espace étroit, cela peut parfois mettre une lourde charge sur le serveur.

Pour adapter ce réglage, la valeur suivante doit être modifiée dans "spigot.yml" :
- max-entity-collisions: 1 #Par défaut : 8

Comme les collisions n'ont pas d'effet réel sur les mobs, le réglage peut être réduit ici. Cette valeur n'est pas utilisée pour les joueurs, seulement pour les mobs !

### Rayon de fusion

Le rayon de fusion détermine quels objets et XP sont fusionnés, ce qui signifie que le serveur doit traiter moins d'entités. Surtout avec les serveurs où beaucoup d'objets sont au sol, cela peut avoir un effet positif pour les joueurs si ce rayon est augmenté. Ici aussi, la règle est de trouver une bonne valeur moyenne, sinon un effet de lag se produit à nouveau, ce qui signifie que le serveur doit vérifier une plage plus grande, ce qui nécessite alors trop de puissance !

Pour adapter ce réglage, les valeurs suivantes doivent être modifiées sous l'élément "merge-radius" dans "spigot.yml" :
- item: 4.0 #Par défaut : 2.5
- exp: 6.0 #Par défaut : 3.0

:::info
Les valeurs ici ne doivent pas être réglées au-dessus de 8, sinon l'effet de lag mentionné ci-dessus peut apparaître !
:::

### Explosions

Sur Paper Spigot, de nombreuses parties des serveurs Minecraft ont été reprogrammées pour que le serveur fonctionne mieux. Cela s'applique aussi aux explosions ! Ici, le logiciel gère mieux les explosions, de sorte que les gros lags sur le serveur sont évités.

Pour cela, la valeur suivante dans la configuration "paper.yml" doit être modifiée :
- optimize-explosions: true #Par défaut : false

### Coffres

Même avec les coffres, il y a un petit détail qui peut être optimisé ! Si un chat est assis sur le coffre, il ne peut pas être ouvert. Pour que le serveur puisse vérifier cela, il doit parcourir tous les mobs dans un certain rayon et vérifier si l'un de ces mobs est assis sur le coffre, ce qui est malheureusement très chronophage et ce à chaque ouverture de coffre !

L'option peut facilement être désactivée avec la modification suivante :
- disable-chest-cat-detection: true #Par défaut : false

### Inventaires

L'inventaire est beaucoup utilisé, mais un inventaire n'est pas un inventaire. Par exemple, un coffre ou un établi est aussi un inventaire. Avec ce changement, vous pouvez aussi soulager le serveur sans que personne ne le remarque ! Ici, nous réglons essentiellement seulement le nombre de ticks après lequel le serveur doit mettre à jour chaque inventaire.

Pour cela, la valeur suivante doit être modifiée dans la configuration "paper.yml" :
- container-update-tick-rate: 3 #Par défaut : 1

:::info
La valeur ne doit pas être réglée au-dessus de 5, sinon l'inventaire peut être un peu buggé ! Dans des modes de jeu comme SurvivalGames, où tous les joueurs veulent accéder aux coffres au centre et obtenir les meilleurs objets, la valeur ne doit pas être modifiée et doit rester à "1".
:::

### Mises à jour de la lumière

Ici aussi, Paper Spigot offre une option alternative pour que les mises à jour de la lumière dans le monde soient mieux effectuées. Avec cette méthode, les mises à jour de la lumière ne sont pas effectuées dans un tick, ce qui peut parfois, selon la taille de la mise à jour, bloquer le serveur, mais en dehors du tick. Le tout s'appelle async threads dans Minecraft.

Pour cela, la modification suivante doit également être effectuée dans la configuration "paper.yml" :
- queue-light-updates: true #Par défaut : false

### Sauvegarde des données des chunks

Dès qu'il y a des modifications dans un chunk, celles-ci ne sont pas écrites directement sur le disque dur, mais sont d'abord chargées dans la RAM. Néanmoins, toutes les modifications sont sauvegardées très souvent, ce qui peut parfois provoquer des lags extrêmes, surtout lorsque le serveur veut sauvegarder des modifications massives.

Avec ce changement, nous réduisons le nombre maximal de chunks pouvant être sauvegardés dans un seul processus de sauvegarde. En modifiant cette option, la RAM est davantage utilisée par endroits car les modifications restent plus longtemps dans la RAM !

Les modifications suivantes doivent être effectuées dans la configuration "paper.yml" :
- max-auto-save-chunks-per-tick: 10 #Par défaut : 24

### Redstone

La redstone est très souvent utilisée avec parfois des circuits extrêmement grands. Sur les serveurs publics, c'est parfois même le point faible dans presque 90 % des serveurs, car la redstone peut provoquer des lags massifs. Ici, nous utilisons aussi un traitement alternatif de la redstone de Paper Spigot, qui rend la redstone presque inoffensive et a la même fonctionnalité qu'en Vanilla !

Pour cela, le réglage suivant doit être effectué dans "paper.yml" :
- use-faster-eigencraft-redstone: true #Par défaut : false

:::info
**Attention ! Dans certaines situations, cela peut beaucoup modifier le fonctionnement de la redstone !**
:::

<InlineVoucher />