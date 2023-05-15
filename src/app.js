require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const {router} = require('./routes');
const initDB = require('./config/db')

app.use(cors());
// Inicializando a la base de datos
initDB();
// Invocacion de todas las rutas de manera automatica
app.use('/v1', router);
// Especificando el puerto en el que correra el servidor
const port = process.env.PORT || 3000;
// Levantando el servicio
app.listen(port, () => console.log(`API corriendo en el puerto ${port}`));
