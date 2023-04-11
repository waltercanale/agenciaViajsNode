//importamos express lo asignamos a esta variable
import express from "express"
import router from "./routes/index.js"
import db from './config/db.js'

//express() contiene una funcion para ejecutar express y se la asignamos a app
const app = express()

//conectar base de datos
db.authenticate()
    .then( () => console.log('base de datos conectada'))
    .catch( error => console.log(error));

//definimos el puerto, process.env.PORT se lo conoce como variable de entorno
const port = process.env.PORT || 4000

//habilitar pug
app.set('view engine', 'pug')

//Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();

    //Local son variables internas de express
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = "Agencia de Viajes";

    console.log(res.locals);
    

    //next es para que salte a la siguiente linea del middleware, si no no nos cargaria nunca la pagina, en caso que next no funcione ponemos return next();
    next();
})

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//definir carpeta publica, le decimos que agregue la carpeta publica como los archivos estaticos de express
app.use(express.static('public'))

//agregar router(use soporta todos los verbos path, delete, put todos) y '/' seria la pagina principal
app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})

