import { Testimonial } from "../models/testimoniales.js";

const guadarTestimoniales = async (req, res) => {

    //validar

    const { nombre, email, mensaje } = req.body

    const errores = []

    if(nombre.trim ===''){
        // console.log('El nombre esta vacio')
        errores.push({mensaje: 'El nombre esta vacio'});
    }
    if(email.trim ===''){
        // console.log('El email esta vacio')
        errores.push({mensaje: 'El email esta vacio'});
    }
    if(mensaje.trim ===''){
        // console.log('El mensaje esta vacio')
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    if(errores.lenght > 0){
        //consultar los testimoniales existentes
       const testimoniales = await Testimonial.findAll()

        //render toma dos parametros, la vista y lo que desa mostrar en esa vista
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            email,
            mensaje,
            testimoniales

        })
    } else {
        //Almacenar en la base de datos
        try{
           await Testimonial.create({
               nombre,
               correo,
               mensaje
           });
           
           //esto va enviarlo a testitmoiales y como tenemos un get a testimoniales va mostrar la pagina de testimoniales
           res.redirect('/testimonial')

        }catch (error){

        }
    }
}

export {
    guadarTestimoniales
}