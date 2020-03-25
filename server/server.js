require('./config/config');

const express = require('express');

const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Configuración global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, {
    useCreateIndex: true,
    //autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
// mongoose.connect(environment.urlDB, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// }, (err) => {
// });
// mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
//     if (err) throw err;
//     console.log('Base de datos ONLINE');
// });

app.listen(process.env.PORT, () => {
    console.log(`Escuchando peticiones en el puerto ${process.env.PORT}`);
});