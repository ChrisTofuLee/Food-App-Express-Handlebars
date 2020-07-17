const mysql = require("mysql");

const dpOptions = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password",
    database: "foods_db"
}

const connection = mysql.createConnection(dpOptions);

const onConnect = (err) => {
    if (err) throw err;
    console.log("Successfully connected to DB");
}

connection.connect(onConnect);

module.exports = connection;