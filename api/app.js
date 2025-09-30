const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'bootcamp';
const collectionName = 'users';

app.use(express.json());

// Conexión a MongoDB
let db, usersCollection;
MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    usersCollection = db.collection(collectionName);
    app.listen(port, () => {
      console.log(`API escuchando en http://localhost:${port}`);
    });
  })
  .catch(err => console.error('Error conectando a MongoDB:', err));

// Ruta para obtener todos los usuarios
app.get('/users', async (req, res) => {
  try {
    const users = await usersCollection.find({}).toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error obteniendo usuarios' });
  }
});

// Ruta para obtener usuarios filtrados por query
app.get('/users/search', async (req, res) => {
  try {
    const query = {};
    if (req.query.name) query.name = req.query.name;
    if (req.query.email) query.email = req.query.email;
    if (req.query.age) query.age = parseInt(req.query.age);
    const users = await usersCollection.find(query).toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error en la búsqueda' });
  }
});


// Ruta para crear un nuevo usuario
app.post('/users', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }
    const result = await usersCollection.insertOne({ name, email, age });
    res.status(201).json({ message: 'Usuario creado', userId: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: 'Error creando usuario' });
  }
});

module.exports = app;
