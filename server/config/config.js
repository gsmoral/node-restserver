// =======================
//  Puerto
// =======================
process.env.PORT = process.env.PORT || 3000;

// =======================
//  Entorno
// =======================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =======================
//  Vencimiento del Token
// =======================
// 1000 ms * 60 segundos * 60 minutos * 24 horas * 30 días = expira en 30 días
process.env.CADUCIDAD_TOKEN = 1000 * 60 * 60 * 24 * 30;
//process.env.CADUCIDAD_TOKEN = '48h';

// =======================
//  SEED de autenticación
// =======================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// =======================
//  Base de datos
// =======================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// =======================
//  Ggogle ClientID
// =======================
process.env.CLIENT_ID = process.env.CLIENT_ID || '101940766650-ofacm20rkpmkgs0mpqjjti9uoh0t5meo.apps.googleusercontent.com';