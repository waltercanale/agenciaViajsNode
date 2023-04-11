import  Sequelize  from "sequelize";
import db from "../config/db.js";

//abrimos {} como objeto de configuracion, en este caso hay que definir las tablas, pero como esta base de datos ya tiene tabla y contenido, pero usualmete aca es donde colocariamos lo que planeamos para nuestro proyecto
export const  Viaje = db.define('viajes', {
    //Generalmente usariamo en una base de datos varchar, pero en sequelize utilizamos string
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida:{
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
})