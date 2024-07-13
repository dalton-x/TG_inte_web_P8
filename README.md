# KASA

Ce projet est une application React du projet 8 de la formation Integrateur web OpenClassrooms.

## Installation

1. Clonez le dépôt Git du projet :
git clone https://github.com/votre-utilisateur/mon-projet-react.git
2. Accédez au répertoire du projet :
```bach
cd TG_INTE_WEB_P8
```
3. Installez les dépendances du projet :
```bach
npm install
```
## Configuration des variables d'environnement

Le projet utilise des variables d'environnement pour stocker des informations sensibles, comme des clés d'API ou des paramètres de connexion à une base de données. Un fichier `.env.example` est fourni dans le dépôt pour vous guider sur les variables d'environnement nécessaires.

1. Créez un nouveau fichier `.env` à la racine du projet en vous basant sur le fichier `.env.example` :
```bach
cp .env.example .env
```
2. Ouvrez le fichier `.env` et renseignez les valeurs appropriées pour chaque variable d'environnement, par exemple :
```env
VITE_APP_NAME=Le nom de votre application
VITE_REACT_APP_ENV=Mettre dev ou prod
VITE_BASE_URL=src/
VITE_API=Lien vers votre api
```

## Démarrage du projet

Une fois les dépendances installées et les variables d'environnement configurées, vous pouvez démarrer l'application en exécutant la commande suivante :
```bach
npm run dev
```
Cela lancera l'application en mode développement sur `http://localhost:5173`.