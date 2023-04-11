import { Viaje } from "../models/viaje.js";
import { Testimonial } from '../models/testimoniales.js'

//de esta manera se van a ir colocando las rutas dentro del router de express y despues lo vamos agregar al app del index.js que esta fuera de la carpeta de router.Solamente tenemos que tener una instancia de express porque de otra forma se va a reiniciar el servidor y no va a estar conectado una parte con la otra
const paginaInicio = async (req, res) => { 

    //consultar 3 viajes del modelo viaje
    const promiseDB = []

    promiseDB.push = Viaje.findAll({ limit :3})
    promiseDB.push = Testimonial.findAll({ limit: 3})

    try {

        const resultado = await new Promise.all( promiseDB )

        res.render('inicio', {
        pagina: 'Inicio',
        clase: 'home',
        viajes: resultado[0],
        testimoniales: resultado[1]
    });

    } catch (error) {
        console.log(error)
  
 }
}

const paginaNosotros = (req, res) => { 
    //Escribimos nosotros y tomo el archivo nosotros.pug y lo muestra en pantalla
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => {
    //consultar DB
    //findAll se trae todos los resultados de la table
    const viajes = await Viaje.findAll()

    console.log(viajes)
  

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes,
    })
}

const paginaTestimoniales = async (req, res) =>{
   const testimoniales = await Testimonial.findAll();

    try {
        res.render('testimoiales', {
            pagina: 'Testimoniales',
            //de esta forma lo pasamos hacia la vista
            testimoniales
        });

    } catch (error) {
        console.log(error);
    }
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    //ese params se relacione con el comodin que tenes en index el mismo de paginaDetalleViaje
    const { slug } = req.params;

    //en caso que haya un error que no pudo hacer la consulta a la base de datos

    try {
        const viaje = await Viaje.findOne({ where : {  slug } })
        res.render('Viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}
