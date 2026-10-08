# Première étape : accueil HTML de Sea Van

## Objectif

Proposer une page d’accueil commerciale, claire et rapide, en HTML et CSS natifs. Limiter JavaScript au menu mobile et aux interactions utiles. Cette première étape sert à valider l’organisation et la direction visuelle avant de décliner les pages secondaires.

## 1. Examiner le site existant

- Recenser les pages publiques et les destinations de navigation.
- Identifier les offres, les publics, les coordonnées et le parcours de contact.
- Relever les éléments de confiance vérifiables, sans inventer de chiffres, d’avis ou de garanties.
- Extraire les images et le logo utilisés sur le site ; conserver un inventaire de leurs URL sources.
- Choisir les photographies adaptées à l’accueil et préparer des versions optimisées.

L’accès HTTPS a été rétabli. Dix pages ont été examinées et sept images récupérées et optimisées. Voir audit-site.md et images.json pour les sources.

## 2. Construire un parcours commercial

1. En-tête : identité, navigation concise et action principale visible.
2. Première section : proposition de valeur concrète, photographie et appel à l’action correspondant au parcours réel de vente.
3. Offres : présenter les choix avec un bénéfice clair et un lien par offre.
4. Réassurance : éléments vérifiés sur le service et l’entreprise.
5. Explication du parcours : les étapes nécessaires pour passer du projet à la prise de contact.
6. Questions fréquentes : répondre aux objections constatées dans les contenus actuels.
7. Contact : appel à l’action final et coordonnées vérifiées.
8. Pied de page : navigation secondaire et liens légaux existants.

Les liens des futures pages auront des destinations identifiées. Les interactions du prototype ne simuleront pas un envoi de formulaire réussi sans service d’envoi.

## 3. Réaliser le prototype

- `index.html`, une feuille CSS locale et JavaScript uniquement si nécessaire.
- Images locales optimisées, dimensions explicites et chargement différé sous la première section.
- Polices système ; aucun framework, constructeur de pages ou dépendance obligatoire.
- Navigation au clavier, contraste lisible et mise en page adaptée aux mobiles.
- Aucun traceur ni ressource externe nécessaire au rendu.

## 4. Vérifier et livrer

- Contrôler le rendu sur mobile et ordinateur, la navigation et les interactions.
- Vérifier les ressources locales et distinguer les liens opérationnels des pages à réaliser.
- Mesurer le poids des fichiers ; comparer les performances au site actuel seulement si une mesure comparable est disponible.
- Livrer l’accueil, l’inventaire des pages et images, les instructions pour l’ouvrir et les points à valider.

## Périmètre de cette livraison

Une page d’accueil proposée avec la navigation prévue. La migration des pages secondaires, l’envoi réel des formulaires et la mise en production viennent après validation.
