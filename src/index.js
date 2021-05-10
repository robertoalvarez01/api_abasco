const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

//const {config} = require('./config/index.js');

app.use(express.json());

app.set('port', process.env.PORT || 3000);


//importar rutas
app.use('/api/usuarios',require('./routes/usuario'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/nosotros',require('./routes/quienesSomos'));
app.use('/api/imagenes',require('./routes/imagenes'));
app.use('/api/datos-tecnicos',require('./routes/datosTecnicos'));
app.use('/api/inmuebles',require('./routes/inmuebles'));
app.use('/api/localidades',require('./routes/localidades'));
app.use('/api/operaciones',require('./routes/operaciones'));
app.use('/api/categorias',require('./routes/categorias'));
//app.use('/api/filtros',require('./routes/filtros'));
app.use('/api/contacto',require('./routes/contacto'));
app.use('/api/partidos',require('./routes/partidos'));
app.use('/api/barrios',require('./routes/barrios'));
app.use('/api/servicios',require('./routes/servicios'));
app.use('/api/tasaciones',require('./routes/tasaciones'));


app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto: ', app.get('port'));
});
