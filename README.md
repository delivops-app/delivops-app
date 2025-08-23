# DELIVOPS APP

## Description du projet
Delivops est une application web destinée aux acteurs du transport messagerie.
Elle facilite la gestion des chauffeurs, des livraisons et des flux administratifs.

## Note

Avant de faire le premier commit, penser à inviter les collaborateurs en amont afin qu'ils aient accès au repository.

## Arborescence du projet

* `frontend/` → application web (React + Vite + TypeScript)
* `backend/` → API et logique serveur (Node.js + Express)
* `README.md` → documentation du projet

---

## Installation de Node.js

**Node.js** est un environnement d’exécution JavaScript côté serveur.
Il permet d’exécuter du JavaScript en dehors du navigateur et sert de base pour lancer le backend ainsi que les outils de développement frontend.

1. Télécharger Node.js depuis [https://nodejs.org](https://nodejs.org)
   → Choisir la version **LTS** (recommandée).

2. Lancer le fichier `.msi` téléchargé :

   * Accepter la licence
   * Laisser les options par défaut
   * Vérifier que *Add to PATH* est coché
   * Installer

3. Vérifier l’installation dans un terminal :

   ```bash
   node -v
   npm -v
   ```

---

## Installation du frontend (Vite + React + TypeScript)

* **Vite** : outil de développement rapide pour créer et lancer des projets web modernes.
* **React** : bibliothèque JavaScript pour construire des interfaces utilisateur dynamiques.
* **TypeScript** : sur-ensemble de JavaScript qui ajoute le typage pour plus de robustesse.

### Étapes :

1. Créer le projet frontend :

   ```bash
   npm create vite@latest frontend
   ```

   → Choisir **React** dans la liste des frameworks
   → Choisir **TypeScript** dans la liste des variantes

2. Installer les dépendances :

   ```bash
   cd frontend
   npm install
   ```

3. Lancer le serveur de développement :

   ```bash
   npm run dev
   ```

---

## Installation du backend (Node.js + Express)

* **Express** est un framework minimaliste pour Node.js, utilisé pour créer des APIs et gérer les routes côté serveur.

### Étapes :

1. Créer le dossier backend :

   ```bash
   mkdir backend
   cd backend
   ```

2. Initialiser le projet Node.js :

   ```bash
   npm init -y
   ```

3. Installer Express et les dépendances utiles :

   ```bash
   npm install express dotenv cors body-parser
   ```

4. Créer un fichier `src/app.js` avec ce contenu :

   ```js
   const express = require('express');
   const cors = require('cors');
   const app = express();

   require('dotenv').config();

   app.use(cors());
   app.use(express.json());

   app.get('/', (req, res) => {
     res.send('API DELIVOPS OK');
   });

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
   ```

5. Lancer le serveur :

   ```bash
   node src/app.js
   ```

6. Vérifier dans un navigateur ou avec `curl` :

   ```
   http://localhost:3000/
   ```

   → doit afficher `API DELIVOPS OK`.

## Note

### Différence entre `package.json` et `package-lock.json`

Le fichier **`package.json`** décrit le projet et liste les dépendances principales (par exemple Express).
Le fichier **`package-lock.json`** enregistre la version exacte de chaque dépendance et sous-dépendance installée.
Cela garantit que tous les développeurs du projet réinstallent **exactement le même environnement**.
Les deux fichiers doivent être conservés et versionnés dans le repository.


### Utilisation de Nodemon

**Nodemon** est un outil qui relance automatiquement le serveur Node.js à chaque modification des fichiers du projet.
Il est utilisé uniquement en développement pour éviter de redémarrer le serveur manuellement après chaque changement.

* Installation :

  ```bash
  npm install --save-dev nodemon
  ```

* Script dans `package.json` :

  ```json
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  }
  ```

* Commande de lancement :

  ```bash
  npm run dev
  ```

En production, on utilise `npm start` (sans Nodemon).