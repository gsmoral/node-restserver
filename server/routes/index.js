const express = require('express');
const app = express();

// Importamos y usamos las rutas de la aplicación
app.use(require('./login'));
app.use(require('./usuario'));
app.use(require('./categoria'));
app.use(require('./producto'));

module.exports = app;