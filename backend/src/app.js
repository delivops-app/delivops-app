// Importe le framework Express, qui permet de créer un serveur web en Node.js
const express = require('express');

// Importe le middleware CORS (Cross-Origin Resource Sharing)
// Il permet au frontend (React, par exemple) d’appeler l’API même s’il est sur un autre domaine/port
const cors = require('cors');

// Initialise une application Express
const app = express();

// Charge les variables d'environnement depuis un fichier .env
require('dotenv').config();

// Active CORS pour toutes les routes de l'application
app.use(cors());

// Permet de parser automatiquement les requêtes JSON envoyées au serveur
app.use(express.json());

// Définit une route GET à la racine "/" qui renvoie un message simple
app.get('/', (req, res) => {
  res.send('API DELIVOPS OK');
});

// Définit le port d'écoute : prend la valeur dans .env si elle existe, sinon 3000 par défaut
const PORT = process.env.PORT || 3000;

// Lance le serveur et affiche un message dans la console quand il est prêt
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));