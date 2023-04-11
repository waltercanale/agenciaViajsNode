import  Sequelize  from "sequelize";
import db from "../config/db.js";

//abrimos {} como objeto de configuracion, en este caso hay que definir las tablas, pero como esta base de datos ya tiene tabla y contenido, pero usualmete aca es donde colocariamos lo que planeamos para nuestro proyecto
export const  Testimonial = db.define('testimoniales', {
    //Generalmente usariamo en una base de datos varchar, pero en sequelize utilizamos string
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje:{
        type: Sequelize.STRING
    },
})