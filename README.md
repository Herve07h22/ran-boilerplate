# Un site pour gérer un collectif de professionnels

Vous animez un réseau de professionnels dans votre région ?

Cet outil open-source permet de construire un site Internet simple pour partager la liste des membres.

Fonctionnalités :
- formulaire d'inscription
- validation des demandes d'inscription
- accès avec authentification à la liste des membres validés

La base de données comportant la liste des membres est gérées par AirTable.
C'est une sorte de Excel en ligne. L'outil est payant, mais dispose d'une version gratuite en générale sufficante pour un collectif de quelques dizaines de membres. 

Le site Internet interroge AirTable via son API pour récupérer la liste à afficher.
Mais l'accès est restreint : seul un membre validé peut accéder à la liste. 

L'hébergement du site est assurée par Netlify. 
C'est aussi un service en ligne dont la version gratuite est suffisante. 
L'authentification par login/mot de passe est également gérée par Netlify.

# Installation

## Etape 1 : AirTable

Voici comment procéder :

Créer un compte sur [AirTable](https://airtable.com/).

Copier ensuite la base de données qui servira à stocker la liste des membres, à partir de [cet exemple](https://airtable.com/shrpiZM7Oz16H5VQb). Ouvrir la base de données ainsi copiée, et observer la structure de l'url qui ressemble à `https://airtable.com/appxxxxxxxxxx/`.
Cet identifiant `appxxxxxxxxxx` est l'id de la base de données.

Aller ensuite dans [votre compte AirTable](https://airtable.com/account) pour générer une clé d'API. 

Enfin, ouvrir le formulaire d'inscription Airtable (il a été copié avec la base) et noter son URL (de la frome https://airtable.com/xxxxx)

Ces 3 informations sont à verser dans un fichier de configuration `.env` :
- `AIRTABLE_KEY` : la clé d'API
- `AIRTABLE_DATABASE` : l'id de la base
- `REACT_APP_FORM_URL` : l'url du formulaire Airtable pour s'inscrire

Le fichier `.env` devrait ressembler à ceci :
```
REACT_APP_FORM_URL=https://airtable.com/xxxxxx
AIRTABLE_KEY=xxxxx
AIRTABLE_DATABASE=xxxxx
```

# Etape 2 : Netlify

Créer un compte sur [Netlify](https://netlify.com)

Déployer le site en cliquant sur ce bouton :

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Herve07h22/ran-boilerplate)

L'authentification est gérée par Netlify.

# Support

[contact@camilab.co](https://camilab.co)
