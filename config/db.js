const dotenv = require('dotenv')
const mysql = require('mysql');
dotenv.config();

const connectionString = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

const db = mysql.createConnection(connectionString);

db.connect((err) => {
    if (err) console.log("connection failed...!");
    else console.log("connection success...!");
});

const createUserTable = `create table if not exists users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL
)`;

db.query(createUserTable, (err, result) => {
    if (err) console.log(err);
    // else console.log(result);
})

module.exports = db;