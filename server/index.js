//Importar express nuevo import y export
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const routes = require('./routes');
const configs = require('./config');
const db = require('./config/database');

require('dotenv').config({path: 'variables.env'})



//Configurar express
const app = express();

//Habilitar pug
app.set('view engine','pug');

//Anadir las vistas
app.set('views',path.join(__dirname, './views'));

//Cargar una carpeta estatica llamado public
app.use(express.static('public'));

//Validar si estamos en desarrollo o en produccion
const config = configs[app.get('env')];

//Creamos la variable para el sitio web.
app.locals.titulo = config.nombresitio;

//Muestra el año actual y genera la ruta
app.use((req,res,next) =>{
    //Crear una fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;

    return next();
})

//Ejecucion del body parser
app.use(bodyParser.urlencoded({extended: true}));

//Cargar las rutas.
app.use('/',routes());


//Puerto y Host para la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log("El servidor esta funcionando.");
});
