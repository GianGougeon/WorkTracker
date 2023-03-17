const express = require('express');
const app = express();

// Rutas de error para todos los métodos HTTP
app.all('/', (req, res) => {
  res.status(404).send({
    error: '404',
    descripcion: 'Ruta inexistente'
  });
});

module.exports = app;