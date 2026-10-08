# Seavan — prototype HTML

Ouvrir `index.html` directement dans un navigateur. Toutes les ressources de rendu sont locales. Aucun outil de compilation ni installation n’est nécessaire.

Pour servir le dossier localement :

```sh
cd /workspace/dev-web
python3 -m http.server 8080 --bind 127.0.0.1
```

Sept pages : accueil, véhicules, California T7, fourgon, agences, voyages et demande de devis. Les autres liens ouvrent les pages existantes de sea-van.com.

Le formulaire valide les dates et l’agence du fourgon, puis prépare un lien e-mail. Il n’envoie rien automatiquement et ne consulte pas les disponibilités. Le formulaire WordPress actuel est également lié.

Images optimisées en WebP, polices système, aucun framework, traceur ou ressource de rendu distante. Total des images : environ 465 Kio ; HTML, CSS et JavaScript de toutes les pages : environ 44 Kio. Ces mesures ne sont pas une comparaison de vitesse avec WordPress.

Vérification Chromium : sept pages à 1440 et 390 pixels, sans débordement horizontal, images décodées et absence d’erreur JavaScript. Validation des dates, du choix d’agence et de la préparation du lien e-mail. Captures de l’accueil dans docs/.

Prototype statique : aucun déploiement du site ni publication de l’environnement effectué. Les fichiers sont versionnés sur la branche main du dépôt GitHub thibaultmahe/dev-web.
