const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

//const {config} = require('./config/index.js');

app.use(express.json());

app.set('port', process.env.PORT || 3000);


// Routes
const quienesSomosApi = require('./routes/quienesSomos');
const serviciosApi = require('./routes/servicios');
const imagenesApi = require('./routes/imagenes');
const datostecnicosApi = require('./routes/datosTecnicos');
const inmueblesApi = require('./routes/inmuebles');
const localidadesApi = require('./routes/localidades');
const operacionesApi = require('./routes/operaciones.js');
const categoriasapi = require('./routes/categorias.js');
const filtrosApi = require('./routes/filtros.js');
const contactoApi = require('./routes/contacto');
const partidosApi = require('./routes/partidos');

quienesSomosApi(app);
serviciosApi(app);
imagenesApi(app);
datostecnicosApi(app);
inmueblesApi(app);
localidadesApi(app);
operacionesApi(app);
categoriasapi(app);
filtrosApi(app);
contactoApi(app);
partidosApi(app);

app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto: ', app.get('port'));
});
