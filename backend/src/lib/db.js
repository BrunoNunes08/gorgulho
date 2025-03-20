import mysql from "mysql2";
import env from "../env/index.js";

const connection = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE
});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySQL Conectado");
});


export default connection;