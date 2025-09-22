---
id: 7d2d-becomeadmin
title: "7 Days to Die : Comment devenir administrateur pour 7 Days to Die"
description: Comment devenir administrateur pour les serveurs de jeu 7 Days to Die - Documentation ZAP-Hosting.com
sidebar_label: Devenir administrateur
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
L'attribution des permissions d'administrateur vous permet une administration simple et complète avec un contrôle total de votre serveur. En tant qu'administrateur, vous avez la possibilité d'utiliser toutes les options et fonctions disponibles fournies par le jeu directement dans le jeu. Toutes les étapes nécessaires pour attribuer les permissions d'administrateur à votre serveur seront décrites ci-dessous.  
<InlineVoucher />

## Configuration
L'ajout d'un administrateur se fait via le fichier de configuration **serveradmin.xml**, que vous pouvez trouver dans l'interface web sous Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/wXpLL2qyZE2zCYa/preview)

Vous pouvez trouver votre SteamID64 en allant sur votre profil Steam et en cliquant droit n'importe où dessus. Vous cliquez ensuite sur **Copier l'URL Steam**. 

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)

Ensuite, ouvrez l'une des pages suivantes et collez-y l'URL de votre profil : 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Cela vous fournira des informations générales ainsi que l'ID Steam de votre compte. Dans ce cas, nous avons seulement besoin du SteamID64. Le SteamID64 est ensuite spécifié sous ``<admins>...</admins>``. Cela ressemblera à ceci :

```
 <users>
    <user steamID="76561198021925107" name="Indice sur qui est cet utilisateur" permission_level="0" />
  </users>
```

:::danger  L'enregistrement de l'administrateur n'est pas reconnu ? 
Assurez-vous de retirer les caractères de commentaire `<!--` et `-->` pour rendre la ligne valide. Sinon, la ligne reste simplement un commentaire et ne sera pas prise en compte. Il suffit de supprimer les caractères au début et à la fin de la ligne pour l'activer.
:::

Le jeu offre la possibilité de définir différents niveaux de permission pour les droits d'administrateur. Cela signifie qu'il est possible de définir différents groupes d'administrateurs avec des permissions différentes. Le niveau est défini par l'option ``permission_level``. Celle-ci peut être réglée de 0 à 1000. Selon la configuration, les administrateurs ont alors accès aux permissions attribuées. Une fois cela fait, les permissions d'administrateur ont été attribuées avec succès. 



## Permissions

Les permissions pour toutes les commandes d'administrateur peuvent être définies sous ``permissions``. Pour cela, le ``permission_level`` doit être ajusté, tout comme lors de l'ajout des administrateurs. Cela ressemblera à ceci :

```
<permissions>
	<permission cmd="dm" permission_level="0" ></permission>
	<permission cmd="kick" permission_level="1" ></permission>
	<permission cmd="say" permission_level="1000" ></permission>
    <permission cmd="chunkcache" permission_level="1000" ></permission>
    <permission cmd="debugshot" permission_level="1000" ></permission>
    <permission cmd="debugweather" permission_level="1000" ></permission>
    <permission cmd="getgamepref" permission_level="1000" ></permission>
</permissions>
```

Un niveau de permission est une valeur comprise entre 0 et 1000 et détermine les permissions qu'un joueur possède. 1000 est le plus bas (aucune permission) et 0 est le plus élevé (permissions complètes d'administrateur). Selon la manière dont les permissions doivent être configurées à cet égard, cela doit être ajusté en conséquence. 


## Conclusion

Félicitations, vous avez configuré avec succès les permissions d'administrateur. Pour toute question ou assistance, n'hésitez pas à contacter notre équipe de support, disponible quotidiennement pour vous aider ! 🙂

<InlineVoucher />