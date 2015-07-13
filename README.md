Description de l'application myDinner
======

MyDinner est une application web pour organiser vos invitations.
- Retrouvez vos amis via vos comptes en ligne (Gmail, facebook, Apple)
- Envoyez vos invitation directement dans l'agenda connecté de vos amis
- Mémoriser vos recettes et apportez leur votre touche personnelle
- Gardez à l'esprit les préférences et intolérences de chaque personne 
- Proposer à chaque invitation une nouvelle recette pour éblouir vos amis

Demo : http://copocorp.free.fr/dinner

UTILISATEUR
======
Chaque utilisateur est identifié dès l'arrivée sur l'application.
Soit en créant un compte dédié à l'application myDinner, soit via l'authentification d'un système partenaire (Gmail, Facebook, Apple).
La base de donnée est unique, elle est partagée pour tous les utilisateurs mais le contenue de chaque personne est strictement réservé à celle-ci.

AMI
======
Un ami est une personne qui se caracterise par :
- un identifiant
- une photo
- un nom
- un prenom
- un commentaire
- une liste d'ingrédients IN
- une liste d'ingrédients OUT
Les personnes sont créées via l'application ou via une récupération d'un système tiers (Gmail, Facebook ou Apple).

RECETTE
======
Une recette se caracterise par :
- un identifiant
- une ou des photos
- un nom
- un commentaire
- un nombre de personne (information pour le dosage, par défaut 1)
- un temps de préparation post cuisson (en minute)
- un temps de cuisson (en minute)
- une liste d'ingrédients BASIQUE / quantité / Unité
- une liste d'ingrédients EXTRA / quantité / Unité

INGREDIENT
======
Un ingrédient se caracterise par :
- un identifiant
- un nom
- un commentaire
- une liste d'ingredient de substitution

REPAS
======
Une repas se caracterise par :
- un identifiant
- une date
- une localisation (un libellé)
- un commentaire
- une ou des photos
- une liste de recette/personne/note
- une liste de personne

L'APPLICATION
======
L'idée vient d'un monsieur génial du sud ouest de la France - cet homme est un fin gourmet au grand coeur qui partage sa passion avec ses amis - il sera notre utilisateur number1

Par contre l'utilisateur number1 n'est pas souvent en face d'un ordinateur - un brin plus devant son iPad ou son Galaxy Notes... De fait notre application devra être à la fois disponible sur PC, sur mobile et sur tablette. D'où l'utilisation d'un design responsive via Bootstrap (http://getbootstrap.com/)

De fait, l'utilisateur number1 ne voudra pas passer énormément de temps à configurer l'application. Aussi plusieurs idées me sont venues :
- Identification via Gmail et/ou Facebook et/ou Apple
- Récupération des contacts Gmail et/ou Facebook et/ou Apple
- Ajout des recettes de cuisine simplifié (via copier/coller avec extraction des mot clé par selection à la sourie, ou import via des sites de référence...)
- Intéraction avec les outils d'agenda GCalendar / Facebook Event / iAgenda...
