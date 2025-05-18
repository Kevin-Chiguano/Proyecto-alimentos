const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/Prueba', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('🟢 Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));
app.use(cors());
app.use(express.json());

app.get('/mensaje', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend!' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
