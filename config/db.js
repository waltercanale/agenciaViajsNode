import  Sequelize from "sequelize";
import dotenv from 'dotenv/config'

//importandolo y colocando esta linea va a leer este archivo
// dotenv.config() esto es igual a colocar el config = import dotenv from 'dotenv/config'

console.log(process.env.DB_HOST)


const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        //esto ponemos por que tiende a agregar un par de columnas, cuando fue creado y actualizado
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false

});

export default db;