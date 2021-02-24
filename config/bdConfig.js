// Eequerimos mysql
const mysql = require('mysql'); 

// definimos base de datos
const options = {
    host: 'localhost',
    user: 'root',
    password:'root', //password para Mac
    database: 'dream_trip', //base de datos
    port:8889 //puerto para Mac
};

// Creamos conexión a base de datos
const conexion_db = mysql.createConnection(options);

// Conectamos base de datos
conexion_db.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Conexión a base de datos exitosa');
    }
})

// Exportamos
module.exports = { options, conexion_db }