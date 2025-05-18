const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/Prueba')
  .then(() => console.log('🟢 Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.get('/mensaje', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend!' });
});

// Servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
