---
id: minecraft-server-optimize2
title: "Minecraft : optimisation des performances du serveur2"
description: Informations sur la façon d'optimiser votre serveur Minecraft de ZAP-Hosting pour de meilleures performances - documentation de ZAP-Hosting.com
sidebar_label: Optimisation du serveur Minecraft
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Que se passe-t-il exactement lors de l'optimisation ?

L'optimisation est un point important pour les serveurs Minecraft afin qu'ils puissent fonctionner sans accroc et vous devriez absolument prendre suffisamment de temps pour cela sur un serveur public. Ce n'est qu'avec beaucoup de temps et de tests qu'il est possible d'obtenir le meilleur résultat. Cette documentation n'est donc pas nécessairement à suivre exactement, mais plutôt destinée à aider à aller dans la bonne direction.

Dans la plupart des cas, l'optimisation modifie un grand nombre de paramètres sur les serveurs, ce qui, dans certains cas, change considérablement le comportement du serveur lui-même. Entre autres, certains paramètres sont réduits, ce qui soulage le serveur et peut ainsi fournir plus de performances. Cependant, afin que l'expérience de jeu générale ne soit pas trop influencée, vous devez toujours trouver le juste milieu ici.

## Vanilla

Les options pour optimiser un serveur vanilla sont malheureusement très limitées, car il n'y a que quelques options de réglage disponibles. Nous essayons de donner un peu plus de puissance au serveur vanilla en prenant les mesures suivantes :

### Visibilité

Une mesure qui est souvent prise est de réduire la portée de vision. La portée de vision standard est de 10 chunks, mais de nombreux joueurs jouent avec beaucoup moins, comme 6-8. Certains joueurs exagèrent avec les chunks et parfois le définissent à 32 chunks par exemple, ce qui signifie que le serveur doit alors charger et traiter tous ces chunks, ce qui coûte beaucoup de performances.

Avec un serveur vanilla, la portée de visibilité peut être ajustée dans la configuration "server.properties", pour cela la valeur "view-distance" doit être ajustée. Afin de ne pas restreindre trop l'expérience de jeu, il est recommandé de définir cette valeur à 5-6, ce qui soulage le serveur jusqu'à 50%.
Nous avons déjà une entrée dans notre documentation pour cela, qui peut être trouvée ici.

### Compression des données

Sur un serveur, il y a un échange permanent entre le serveur et les joueurs connectés. Les mouvements des joueurs eux-mêmes sont transmis au serveur et le serveur les renvoie ensuite à tous les autres joueurs. Mais aussi les actions des joueurs ou les événements dans le monde, comme des explosions par exemple, font partie des données qui sont transmises encore et encore.

Pour rendre la régularité de cet échange un peu plus élégante, la taille des données compressées peut être doublée, ce qui signifie que le serveur n'a à fournir que 50 % de l'effort pour échanger les mêmes données avec les joueurs par rapport à avant. Pour cela, la valeur "network-compression-threshold" doit également être ajustée dans la configuration "server.properties". La valeur doit être définie à 512 ici. Ici aussi, nous avons déjà une entrée dans notre documentation, qui peut être ici.

## Forge

Tout comme Vanilla, les options qui peuvent être faites sur le serveur lui-même sont malheureusement quelque peu limitées, car seuls de très petits fichiers de configuration sont disponibles. Cependant, l'installation de mods supplémentaires est possible, ce qui signifie que le serveur peut également être quelque peu optimisé.

### Préchargement des chunks

Une possibilité de soulager le serveur est que les chunks soient préchargés. Le serveur n'a alors qu'à charger les données de chunk enregistrées lors de l'exploitation ultérieure avec les joueurs et ne pas créer et générer tous les chunks. Ce processus peut être laissé fonctionner pendant la nuit, que vous commencez la veille au soir.

Un mod supplémentaire doit être installé pour cela. Un mod très approprié peut être installé [ici](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator).
Le mod peut ensuite être installé normalement sur le serveur comme décrit dans nos instructions.

Avant que le serveur ne soit redémarré, vous devez vous assurer que le "max-tick-time" dans le "server.properties" est défini sur "-1". Sinon, le serveur pourrait planter. Il est également conseillé que min. 8-10 Go de RAM soient disponibles, car ce processus nécessite malheureusement beaucoup de RAM. À cette fin, la RAM peut être brièvement augmentée pendant la nuit, puis réduite à nouveau après que ce processus a été complété.

:::info
Notez que le mod mentionné ci-dessus peut ne pas être compatible avec la version de Forge que vous utilisez et que le processus peut différer de celui décrit ici si vous utilisez un mod différent.
:::

Dès que le serveur est démarré avec le mod, la console doit être ouverte. Nous recommandons de créer une bordure pour le monde avec un rayon de 16 000 blocs. Pour cela, les commandes suivantes doivent être exécutées dans l'ordre :

- worldborder center 0 0
- worldborder set 16000

:::info
Si nécessaire, remplacez les coordonnées par votre propre centre du monde avec la commande center afin de ne pas "couper" votre monde (qui a peut-être déjà été construit).
:::

Dès que la bordure a été définie, le préchargement réel peut être lancé. Pour cela, la commande suivante doit être exécutée :

- pregen gen startWorldBorder

Maintenant, tous les chunks à l'intérieur de la bordure sont préchargés un par un. Ce processus peut prendre jusqu'à 8 heures selon le nombre de mods installés. L'avancement de ce processus est toujours affiché dans la console par des messages d'information à intervalles réguliers. Dès que le processus est terminé, cela est également affiché dans la console !

:::info
Le mod peut encore être installé sur le serveur même après que ce processus soit terminé. Il continuera à optimiser les chunks pendant l'exploitation et fonctionnera également lorsqu'il n'y a pas de joueur sur le serveur.
:::

### Visibilité

Une mesure qui est souvent prise est de réduire la portée de vision. La portée de vision standard est de 10 chunks, mais de nombreux joueurs jouent avec beaucoup moins, comme 6-8. Certains joueurs exagèrent avec les chunks et parfois le définissent à 32 chunks par exemple, ce qui signifie que le serveur doit alors charger et traiter tous ces chunks, ce qui coûte beaucoup de performances.

La visibilité d'un serveur Forge peut être ajustée dans la configuration "server.properties", pour cela la valeur "view-distance" doit être ajustée. Afin de ne pas restreindre trop l'expérience de jeu, il est recommandé de définir cette valeur à 5-6, ce qui soulage le serveur jusqu'à 50%.
Nous avons déjà une entrée dans notre documentation pour cela, qui peut être trouvée ici.

### Compression des données

Sur un serveur, il y a un échange permanent entre le serveur et les joueurs connectés. Les mouvements des joueurs eux-mêmes sont transmis au serveur et le serveur les renvoie ensuite à tous les autres joueurs. Mais aussi les actions des joueurs ou les événements dans le monde, comme des explosions par exemple, font partie des données qui sont transmises encore et encore.

Pour rendre la régularité de cet échange un peu plus élégante, la taille des données compressées peut être doublée, ce qui signifie que le serveur n'a à fournir que 50 % de l'effort pour échanger les mêmes données avec les joueurs par rapport à avant. Pour cela, la valeur "network-compression-threshold" doit également être ajustée dans la configuration "server.properties". La valeur doit être définie à 512 ici. Ici aussi, nous avons déjà une entrée dans notre documentation, qui peut être ici.

## Bukkit

### Visibilité

Une mesure qui est souvent prise est de réduire la portée de vision. La portée de vision standard est de 10 chunks, mais de nombreux joueurs jouent avec beaucoup moins, comme 6-8. Certains joueurs exagèrent avec les chunks et parfois le définissent à 32 chunks par exemple, ce qui signifie que le serveur doit alors charger et traiter tous ces chunks, ce qui coûte beaucoup de performances.

La visibilité d'un serveur Forge peut être ajustée dans la configuration "server.properties", pour cela la valeur "view-distance" doit être ajustée. Afin de ne pas restreindre trop l'expérience de jeu, il est recommandé de définir cette valeur à 5-6, ce qui soulage le serveur jusqu'à 50%.
Nous avons déjà une entrée dans notre documentation pour cela, qui peut être trouvée ici.

### Compression des données

Sur un serveur, il y a un échange permanent entre le serveur et les joueurs connectés. Les mouvements des joueurs eux-mêmes sont transmis au serveur et le serveur les renvoie ensuite à tous les autres joueurs. Mais aussi les actions des joueurs ou les événements dans le monde, comme des explosions par exemple, font partie des données qui sont transmises encore et encore.

Pour rendre la régularité de cet échange un peu plus élégante, la taille des données compressées peut être doublée, ce qui signifie que le serveur n'a à fournir que 50 % de l'effort pour échanger les mêmes données avec les joueurs par rapport à avant. Pour cela, la valeur "network-compression-threshold" doit également être ajustée dans la configuration "server.properties". La valeur doit être définie à 512 ici. Ici aussi, nous avons déjà une entrée dans notre documentation, qui peut être ici.

### Limites de spawn

À cette étape, les taux de spawn généraux des mobs sur le serveur sont réduits quelque peu. Il n'y a presque pas de différence perceptible par rapport aux valeurs normales. Néanmoins, il peut arriver à certains endroits avec des fermes de mobs par exemple que la ferme de mobs ne fonctionne pas comme prévu.

Pour ajuster les paramètres pour cela, la configuration "bukkit.yml" doit être modifiée. Les valeurs suivantes doivent alors être ajustées au point "spawn-limits" :
- monsters: 50 #Par défaut : 70
- animals: 10 #Par défaut : 15
- water-animals: 3 #Par défaut : 5
- ambient: 4 #Par défaut : 15

:::info
Vous êtes bien sûr toujours libre d'ajuster les valeurs vous-même si vous le souhaitez, sinon les valeurs ci-dessus sont une très bonne moyenne.
:::

Pour améliorer davantage le spawn, la valeur "monster-spawns" dans l'élément "ticks-per" doit également être changée dans la configuration "bukkit.yml" :
- monster-spawns: 2 #Par défaut : 1

S'il y a un problème général avec les monstres par exemple (comme cela peut être déterminé par exemple dans le rapport de timing), la valeur peut être augmentée jusqu'à 5. Le comportement du serveur doit alors être observé avec chaque valeur afin de trouver la meilleure valeur pour votre propre serveur.

### Traitement des chunks

Minecraft fonctionne avec ce qu'on appelle des chunks. Un chunk est toujours formé de 16x16 blocs, qui sont ensuite enchaînés et représentent visuellement le monde pour le client. Le serveur ne fonctionne donc qu'avec des chunks et charge ensuite les chunks requis dans la RAM. Plus il y a de chunks chargés et traités en permanence par le serveur, plus le serveur doit fournir de puissance pour cela, ce qui dans certains endroits met le serveur à genoux.

Les serveurs avec les paramètres par défaut ne déchargeront jamais les chunks chargés, ce qui signifie que la RAM est utilisée très intensément à certains endroits et qu'une quantité énorme est requise. Bien sûr, la performance du serveur est malheureusement très réduite ici, car de plus en plus doit être traité.

Pour s'assurer que le serveur ne charge que les chunks qui sont actuellement nécessaires, les options suivantes dans la configuration "bukkit.yml" sous "chunk-gc" doivent être ajustées :
- period-in-ticks: 300 #Par défaut : 600
- load-threshold: 300 #Par défaut : 0

L'option "period-in-ticks" détermine à quels intervalles en secondes les chunks doivent être déchargés. Si désiré, cette valeur peut également être réduite davantage, mais vous devez noter qu'un effet indésirable peut alors se produire : une boucle.

Dans le cas d'une boucle, le chunk serait déchargé, après quoi le chunk n'est nécessaire que quelques instants plus tard, ce qui signifie que le serveur doit alors investir à nouveau des performances et du temps pour recharger ce chunk. Cela se répéterait alors encore et encore, ce qui met une plus grande charge sur le serveur que si les chunks restaient chargés une minute de plus par exemple.

## Spigot

### Visibilité

Une mesure qui est souvent prise est de réduire la portée de vision. La portée de vision standard est de 10 chunks, mais de nombreux joueurs jouent avec beaucoup moins, comme 6-8. Certains joueurs exagèrent avec les chunks et parfois le définissent à 32 chunks par exemple, ce qui signifie que le serveur doit alors charger et traiter tous ces chunks, ce qui coûte beaucoup de performances.

Avec un serveur spigot, la visibilité peut être ajustée dans la configuration "spigot.yml", pour cela la valeur "view-distance" doit être ajustée. Afin de ne pas restreindre trop l'expérience de jeu, il est recommandé de définir cette valeur à 5-6, ce qui soulage le serveur jusqu'à 50%.

:::info
Selon vos préférences, la valeur peut également être définie à 4, ce qui par exemple aide très bien contre le lag lorsque vous exploitez des serveurs de monde de ferme qui sont opérés sur la version 1.13+
:::

### Compression des données

Sur un serveur, il y a un échange permanent entre le serveur et les joueurs connectés. Les mouvements des joueurs eux-mêmes sont transmis au serveur et le serveur les renvoie ensuite à tous les autres joueurs. Mais aussi les actions des joueurs ou les événements dans le monde, comme des explosions par exemple, font partie des données qui sont transmises encore et encore.

Pour rendre la régularité de cet échange un peu plus élégante, la taille des données compressées peut être doublée, ce qui signifie que le serveur n'a à fournir que 50 % de l'effort pour échanger les mêmes données avec les joueurs par rapport à avant. Pour cela, la valeur "network-compression-threshold" doit également être ajustée dans la configuration "server.properties". La valeur doit être définie à 512 ici. Ici aussi, nous avons déjà une entrée dans notre documentation, qui peut être ici.

### Limites de spawn

À cette étape, les taux de spawn généraux des mobs sur le serveur sont réduits quelque peu. Il n'y a presque pas de différence perceptible par rapport aux valeurs normales. Néanmoins, il peut arriver à certains endroits avec des fermes de mobs par exemple que la ferme de mobs ne fonctionne pas comme prévu.

Pour ajuster les paramètres pour cela, la configuration "bukkit.yml" doit être modifiée. Les valeurs suivantes doivent alors être ajustées au point "spawn-limits" :
- monsters: 50 #Par défaut : 70
- animals: 10 #Par défaut : 15
- water-animals: 3 #Par défaut : 5
- ambient: 4 #Par défaut : 15

:::info
Vous êtes bien sûr toujours libre d'ajuster les valeurs vous-même si vous le souhaitez, sinon les valeurs ci-dessus sont une très bonne moyenne.
:::

Pour améliorer davantage le spawn, la valeur "monster-spawns" dans l'élément "ticks-per" doit également être changée dans la configuration "bukkit.yml" :
- monster-spawns: 2 #Par défaut : 1

S'il y a un problème général avec les monstres par exemple (comme cela peut être déterminé par exemple dans le rapport de timing), la valeur peut être augmentée jusqu'à 5. Le comportement du serveur doit alors être observé avec chaque valeur afin de trouver la meilleure valeur pour votre propre serveur.

### Traitement des chunks

Minecraft fonctionne avec ce qu'on appelle des chunks. Un chunk est toujours formé de 16x16 blocs, qui sont ensuite enchaînés et représentent visuellement le monde pour le client. Le serveur ne fonctionne donc qu'avec des chunks et charge ensuite les chunks requis dans la RAM. Plus il y a de chunks chargés et traités en permanence par le serveur, plus le serveur doit fournir de puissance pour cela, ce qui dans certains endroits met le serveur à genoux.

Les serveurs avec les paramètres par défaut ne déchargeront jamais les chunks chargés, ce qui signifie que la RAM est utilisée très intensément à certains endroits et qu'une quantité énorme est requise. Bien sûr, la performance du serveur est malheureusement très réduite ici, car de plus en plus doit être traité.

Pour s'assurer que le serveur ne charge que les chunks qui sont actuellement nécessaires, les options suivantes dans la configuration "bukkit.yml" sous "chunk-gc" doivent être ajustées :
- period-in-ticks: 300 #Par défaut : 600
- load-threshold: 300 #Par défaut : 0

L'option "period-in-ticks" détermine à quels intervalles en secondes les chunks doivent être déchargés. Si désiré, cette valeur peut également être réduite davantage, mais vous devez noter qu'un effet indésirable peut alors se produire : une boucle.

Dans le cas d'une boucle, le chunk serait déchargé, après quoi le chunk n'est nécessaire que quelques instants plus tard, ce qui signifie que le serveur doit alors investir à nouveau des performances et du temps pour recharger ce chunk. Cela se répéterait alors encore et encore, ce qui met une plus grande charge sur le serveur que si les chunks restaient chargés une minute de plus par exemple.

### Plage de spawn

Les mobs peuvent toujours apparaître à partir des joueurs à certains intervalles. Ici, nous réduisons un peu ce taux afin qu'il n'y ait pas de problèmes avec le spawn des mobs. Ce paramètre est très important, car certains des paramètres de spawn ont déjà été ajustés, comme expliqué ci-dessus.

Nous changeons les paramètres suivants dans la configuration "spigot.yml" dans les "world-settings" :
- mob-spawn-range: 3 #Par défaut : 4

### Plage d'entités

À ce stade, nous définissons maintenant quand les entités - c'est-à-dire les animaux et les monstres - sont activées. Cela signifie que les animaux peuvent se déplacer par exemple ou que les monstres peuvent également reconnaître les joueurs. En gros, cela est activé pour tous les mobs, mais dans une sorte de mode veille. En mode veille, les mobs peuvent continuer à se déplacer et également reconnaître les joueurs, mais par exemple, les mobs ne peuvent se déplacer que très lentement, ce qui signifie que le serveur n'a pas à fournir beaucoup de puissance.

Ici aussi, les changements doivent être effectués dans la configuration "spigot.yml" sous l'élément "entity-activation-range". Nous recommandons d'utiliser les valeurs suivantes :
- animals: 6 #Par défaut : 32
- monsters: 16 #Par défaut : 32
- misc: 2 #Par défaut : 16
- water: 6 #Par défaut : 6
- tick-inactive-villagers: true #Par défaut : true

### Optimisations des entonnoirs

Les entonnoirs sont une partie très importante du jeu dans Minecraft. Mais pour les serveurs, ce sont de véritables poisons ! Pour chaque entonnoir réglé, le serveur doit vérifier 20 fois par seconde si un objet est prêt à être ramassé. Déplacer les objets d'un entonnoir à un autre ou dans une boîte coûte également un travail précieux !

Pour améliorer un peu la situation, nous augmentons les intervalles de temps auxquels le serveur doit effectuer de telles actions. Avec les valeurs utilisées ici, une telle action est effectuée et vérifiée toutes les 3 secondes. Les taux de transfert ne changent pas ici. Cependant, il peut arriver que des horloges en redstone créées avec des entonnoirs ne fonctionnent plus correctement.

Pour ajuster les paramètres, les valeurs suivantes doivent être ajustées dans la configuration "spigot.yml" :
- hopper-transfer: 24 #Par défaut : 8
- hopper-check: 24 #Par défaut : 8
- hopper-amount: 3 #Par défaut : 1

:::info
Assurez-vous que la valeur "use-hopper-check" est définie sur "true" dans la configuration "paper.yml" !
:::

### Collisions

Depuis la version 1.9 de Minecraft, il y a eu des collisions, ce qui signifie par exemple qu'aucun joueur ne peut se tenir dans un autre joueur. Ici, nous déterminons à quelle fréquence les entités peuvent entrer en collision en général. Surtout dans les fermes de mobs, où de nombreux mobs se rencontrent dans un espace étroit, cela peut parfois mettre une lourde charge sur le serveur.

Pour adapter le paramètre, la valeur suivante doit être ajustée dans "spigot.yml" :
- max-entity-collisions: 1 #Par défaut : 8

Comme les collisions n'ont pas d'effet réel sur les mobs, le paramètre peut être réduit ici. Cette valeur n'est pas utilisée pour les joueurs, seulement pour les mobs !

### Rayon de fusion

Le rayon de fusion détermine quels objets et XP sont fusionnés, ce qui signifie que le serveur doit traiter moins d'entités. Surtout avec des serveurs où de nombreux objets sont au sol, cela peut avoir un effet positif pour les joueurs si ce rayon est augmenté. Ici aussi, la règle est de trouver une bonne valeur moyenne, sinon un effet de lag peut se produire à nouveau, ce qui signifie que le serveur doit vérifier une plage plus élevée, ce qui nécessite alors trop de puissance !

Pour adapter le paramètre, les valeurs suivantes doivent être ajustées sous l'élément "merge-radius" dans le "spigot.yml" :
- item: 4.0 #Par défaut 2.5
- exp: 6.0 #Par défaut : 3.0

:::info
Les valeurs ici ne doivent pas être définies plus haut que 8, sinon l'effet de lag mentionné ci-dessus peut survenir !
:::

## Paper Spigot

### Visibilité

Une mesure qui est souvent prise est de réduire la portée de vision. La portée de vision standard est de 10 chunks, mais de nombreux joueurs jouent avec beaucoup moins, comme 6-8. Certains joueurs exagèrent avec les chunks et parfois le définissent à 32 chunks par exemple, ce qui signifie que le serveur doit alors charger et traiter tous ces chunks, ce qui coûte beaucoup de performances.

Avec un serveur (paper) spigot, la portée de vision peut être ajustée dans la configuration "spigot.yml", pour cela la valeur "view-distance" doit être ajustée. Afin de ne pas restreindre trop l'expérience de jeu, il est recommandé de définir cette valeur à 5-6, ce qui soulage le serveur jusqu'à 50%.

:::info
Selon vos préférences, la valeur peut également être définie à 4, ce qui par exemple aide très bien contre le lag lorsque vous exploitez des serveurs de monde de ferme qui sont opérés sur la version 1.13+
:::

### Compression des données

Sur un serveur, il y a un échange permanent entre le serveur et les joueurs connectés. Les mouvements des joueurs eux-mêmes sont transmis au serveur et le serveur les renvoie ensuite à tous les autres joueurs. Mais aussi les actions des joueurs ou les événements dans le monde, comme des explosions par exemple, font partie des données qui sont transmises encore et encore.

Pour rendre la régularité de cet échange un peu plus élégante, la taille des données compressées peut être doublée, ce qui signifie que le serveur n'a à fournir que 50 % de l'effort pour échanger les mêmes données avec les joueurs par rapport à avant. Pour cela, la valeur "network-compression-threshold" doit également être ajustée dans la configuration "server.properties". La valeur doit être définie à 512 ici. Ici aussi, nous avons déjà une entrée dans notre documentation, qui peut être ici.

### Limites de spawn

À cette étape, les taux de spawn généraux des mobs sur le serveur sont réduits quelque peu. Il n'y a presque pas de différence perceptible par rapport aux valeurs normales. Néanmoins, il peut arriver à certains endroits avec des fermes de mobs par exemple que la ferme de mobs ne fonctionne pas comme prévu.

Pour ajuster les paramètres pour cela, la configuration "bukkit.yml" doit être modifiée. Les valeurs suivantes doivent alors être ajustées au point "spawn-limits" :
- monsters: 50 #Par défaut : 70
- animals: 10 #Par défaut : 15
- water-animals: 3 #Par défaut : 5
- ambient: 4 #Par défaut : 15

:::info
Vous êtes bien sûr toujours libre d'ajuster les valeurs vous-même si vous le souhaitez, sinon les valeurs ci-dessus sont une très bonne moyenne.
:::

Pour améliorer davantage le spawn, la valeur "monster-spawns" dans l'élément "ticks-per" doit également être changée dans la configuration "bukkit.yml" :
- monster-spawns: 2 #Par défaut : 1

S'il y a un problème général avec les monstres par exemple (comme cela peut être déterminé par exemple dans le rapport de timing), la valeur peut être augmentée jusqu'à 5. Le comportement du serveur doit alors être observé avec chaque valeur afin de trouver la meilleure valeur pour votre propre serveur.

### Traitement des chunks

Minecraft fonctionne avec ce qu'on appelle des chunks. Un chunk est toujours formé de 16x16 blocs, qui sont ensuite enchaînés et représentent visuellement le monde pour le client. Le serveur ne fonctionne donc qu'avec des chunks et charge ensuite les chunks requis dans la RAM. Plus il y a de chunks chargés et traités en permanence par le serveur, plus le serveur doit fournir de puissance pour cela, ce qui dans certains endroits met le serveur à genoux.

Les serveurs avec les paramètres par défaut ne déchargeront jamais les chunks chargés, ce qui signifie que la RAM est utilisée très intensément à certains endroits et qu'une quantité énorme est requise. Bien sûr, la performance du serveur est malheureusement très réduite ici, car de plus en plus doit être traité.

Pour s'assurer que le serveur ne charge que les chunks qui sont actuellement nécessaires, les options suivantes dans la configuration "bukkit.yml" sous "chunk-gc" doivent être ajustées :
- period-in-ticks: 300 #Par défaut : 600
- load-threshold: 300 #Par défaut : 0

L'option "period-in-ticks" détermine à quels intervalles en secondes les chunks doivent être déchargés. Si désiré, cette valeur peut également être réduite davantage, mais vous devez noter qu'un effet indésirable peut alors se produire : une boucle.

Dans le cas d'une boucle, le chunk serait déchargé, après quoi le chunk n'est nécessaire que quelques instants plus tard, ce qui signifie que le serveur doit alors investir à nouveau des performances et du temps pour recharger ce chunk. Cela se répéterait alors encore et encore, ce qui met une plus grande charge sur le serveur que si les chunks restaient chargés une minute de plus par exemple.

### Plage de spawn

Les mobs peuvent toujours apparaître à partir des joueurs à certains intervalles. Ici, nous réduisons un peu ce taux afin qu'il n'y ait pas de problèmes avec le spawn des mobs. Ce paramètre est très important, car certains des paramètres de spawn ont déjà été ajustés, comme expliqué ci-dessus.

Nous changeons les paramètres suivants dans la configuration "spigot.yml" dans les "world-settings" :
- mob-spawn-range: 3 #Par défaut : 4

### Mob-Spawner

Surtout sur les serveurs de construction de villes, les spawners sont utilisés très souvent et parfois en grand nombre. Les spawners créent alors de plus en plus de mobs sur le serveur, ce qui peut entraîner de nombreux problèmes.

Cette option ajuste le comportement de spawn du spawner de manière à ce que le serveur active le spawner à de courts intervalles. Pour cela, la valeur suivante dans "paper.yml" doit être ajustée :
- mob-spawner-tick-rate: 3 #Par défaut : 1

:::info
La valeur utilisée ci-dessus ne change pas beaucoup le comportement et n'affecte pas vraiment le comportement de jeu.
:::

### Plage d'entités

À ce stade, nous définissons maintenant quand les entités - c'est-à-dire les animaux et les monstres - sont activées. Cela signifie que les animaux peuvent se déplacer par exemple ou que les monstres peuvent également reconnaître les joueurs. En gros, cela est activé pour tous les mobs, mais dans une sorte de mode veille. En mode veille, les mobs peuvent continuer à se déplacer et également reconnaître les joueurs, mais par exemple, les mobs ne peuvent se déplacer que très lentement, ce qui signifie que le serveur n'a pas à fournir beaucoup de puissance.

Ici aussi, les changements doivent être effectués dans la configuration "spigot.yml" sous l'élément "entity-activation-range". Nous recommandons d'utiliser les valeurs suivantes :
- animals: 6 #Par défaut : 32
- monsters: 16 #Par défaut : 32
- misc: 2 #Par défaut : 16
- water: 6 #Par défaut : 6
- tick-inactive-villagers: true #Par défaut : true

### Optimisation des entonnoirs

Les entonnoirs sont une partie très importante du jeu dans Minecraft. Mais pour les serveurs, ce sont de véritables poisons ! Pour chaque entonnoir réglé, le serveur doit vérifier 20 fois chaque seconde si un objet est prêt à être ramassé. Déplacer les objets d'un entonnoir à un autre ou dans une boîte coûte également un travail précieux !

Pour améliorer un peu la situation, nous augmentons les intervalles de temps auxquels le serveur doit effectuer de telles actions. Avec les valeurs utilisées ici, une telle action est effectuée et vérifiée toutes les 3 secondes. Les taux de transfert ne changent pas ici. Cependant, il peut arriver que des horloges en redstone créées avec des entonnoirs ne fonctionnent plus correctement.

Pour ajuster les paramètres, les valeurs suivantes doivent être ajustées dans la configuration "spigot.yml" :
- hopper-transfer: 24 #Par défaut : 8
- hopper-check: 24 #Par défaut : 8
- hopper-amount: 3 #Par défaut : 1

:::info
Assurez-vous que la valeur "use-hopper-check" est définie sur "true" dans la configuration "paper.yml" !
:::

### Collisions

Depuis la version 1.9 de Minecraft, il y a eu des collisions, ce qui signifie par exemple qu'aucun joueur ne peut se tenir dans un autre joueur. Ici, nous déterminons à quelle fréquence les entités peuvent entrer en collision en général. Surtout dans les fermes de mobs, où de nombreux mobs se rencontrent dans un espace étroit, cela peut parfois mettre une lourde charge sur le serveur.

Pour adapter le paramètre, la valeur suivante doit être ajustée dans "spigot.yml" :
- max-entity-collisions: 1 #Par défaut : 8

Comme les collisions n'ont pas d'effet réel sur les mobs, le paramètre peut être réduit ici. Cette valeur n'est pas utilisée pour les joueurs, seulement pour les mobs !

### Rayon de fusion

Le rayon de fusion détermine quels objets et XP sont fusionnés, ce qui signifie que le serveur doit traiter moins d'entités. Surtout avec des serveurs où de nombreux objets sont au sol, cela peut avoir un effet positif pour les joueurs si ce rayon est augmenté. Ici aussi, la règle est de trouver une bonne valeur moyenne, sinon un effet de lag peut se produire à nouveau, ce qui signifie que le serveur doit vérifier une plage plus élevée, ce qui nécessite alors trop de puissance !

Pour adapter le paramètre, les valeurs suivantes doivent être ajustées sous l'élément "merge-radius" dans le "spigot.yml" :
- item: 4.0 #Par défaut 2.5
- exp: 6.0 #Par défaut : 3.0

:::info
Les valeurs ici ne doivent pas être définies plus haut que 8, sinon l'effet de lag mentionné ci-dessus peut survenir !
:::

### Explosions

Avec Paper Spigot, de nombreuses parties des serveurs Minecraft ont été reprogrammées pour faire fonctionner le serveur mieux. Cela s'applique également aux explosions ! Ici, le logiciel gère mieux les explosions, de sorte que de plus grands lags sur le serveur sont évités.

Pour cela, la valeur suivante dans la configuration "paper.yml" doit être ajustée :
- optimize-explosions: true #Par défaut : false

### Coffres

Même avec les coffres, il y a une petite chose qui peut être optimisée ! Si un chat est assis sur le coffre, il ne peut pas être ouvert. Pour que le serveur puisse vérifier cela, il doit passer en revue tous les mobs dans un certain rayon et vérifier si l'un de ces mobs est assis sur le coffre, ce qui est malheureusement très chronophage et chaque fois qu'un coffre est ouvert !

L'option peut facilement être désactivée avec le changement suivant :
- disable-chest-cat-detection: true #Par défaut : false

### Inventaires

L'inventaire est beaucoup utilisé, mais l'inventaire n'est pas l'inventaire. Par exemple, un coffre ou une table de travail est également un inventaire. Avec ce changement, vous pouvez également donner au serveur un bel aspect sans que personne ne s'en aperçoive ! Ici, nous définissons essentiellement seulement le nombre de ticks après lesquels le serveur doit mettre à jour chaque inventaire.

Pour cela, la valeur suivante doit être modifiée dans la configuration "paper.yml" :
- container-update-tick-rate: 3 #Par défaut : 1

:::info
La valeur ne doit pas être définie plus haut que 5, sinon l'inventaire peut être un peu buggé ! Dans des modes de jeu tels que SurvivalGames, où tous les joueurs veulent accéder aux coffres au milieu et obtenir les meilleurs objets, la valeur ne doit pas être changée et doit rester à "1".
:::

### Mises à jour de lumière

Ici aussi, Paper Spigot offre une option alternative pour que les mises à jour de lumière dans le monde soient effectuées mieux. Avec cette méthode, les mises à jour de lumière ne sont pas effectuées dans un tick, ce qui peut alors, selon la taille de la mise à jour, parfois mettre le serveur à l'arrêt, mais en dehors du tick. Le tout s'appelle des threads asynchrones dans Minecraft.

Pour cela, le changement suivant doit également être effectué dans la configuration "paper.yml" :
- queue-light-updates: true #Par défaut : false

### Sauvegarde des données de chunk

Dès que des modifications ont été apportées dans un chunk, les modifications ne sont pas écrites directement sur le disque dur, mais sont d'abord chargées dans la RAM. Néanmoins, toutes les modifications sont enregistrées très souvent, ce qui peut parfois provoquer des lags extrêmes, surtout lorsque le serveur souhaite enregistrer des modifications massives.

Avec ce changement, nous réduisons le nombre maximum de chunks qui peuvent être sauvegardés dans un seul processus de sauvegarde. En changeant cette option, la RAM est utilisée davantage à certains endroits car les modifications restent plus longtemps dans la RAM !

Des modifications au paramètre suivant doivent être apportées dans la configuration "paper.yml" :
- max-auto-save-chunks-per-tick: 10 #Par défaut : 24

### Redstone

Le redstone est très souvent utilisé avec parfois des circuits extrêmement grands. Sur les serveurs publics, c'est parfois même le point le plus faible dans presque 90 % des serveurs, car des lags massifs peuvent être causés avec le redstone. Ici, nous utilisons également un traitement alternatif du redstone de Paper Spigot, qui rend le redstone presque inoffensif et a la même fonctionnalité que dans Vanilla !

Pour cela, le paramètre suivant doit être effectué dans "paper.yml" :
- use-faster-eigencraft-redstone: true #Par défaut : false

:::info
**Danger ! Dans certaines situations, cela peut changer considérablement le fonctionnement du redstone !**
:::

<InlineVoucher />