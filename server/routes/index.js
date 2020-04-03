const express = require('express');
const app = express();

// Importamos y usamos las rutas de la aplicación
app.use(require('./login'));
app.use(require('./usuario'));
app.use(require('./categoria'));
app.use(require('./producto'));
app.use(require('./upload'));
app.use(require('./images'));

module.exports = app;