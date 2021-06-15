const express = require('express');
const cors = require('cors');
const { config } = require('../config');

const app = express();
app.use(cors());

//const {config} = require('./config/index.js');

app.use(express.json());




//importar rutas
app.use('/api/usuarios',require('./routes/usuario'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/imagenes',require('./routes/imagenes'));
app.use('/api/inmuebles',require('./routes/inmuebles'));
app.use('/api/ciudades',require('./routes/ciudades'));
app.use('/api/operaciones',require('./routes/operaciones'));
app.use('/api/categorias',require('./routes/categorias'));
app.use('/api/partidos',require('./routes/partidos'));
app.use('/api/barrios',require('./routes/barrios'));
app.use('/api/contacto',require('./routes/contacto'));


app.listen(config.port, () => {
    console.log('Servidor escuchando en el puerto: ', config.port);
});
