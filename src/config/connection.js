const mysql = require("mysql");

let connection;

const productionOptions = {
  host: process.env.HOSTNAME,
  port: 3306,
  dialect: "mysql",
  use_env_variable: "JAWSDB_URL",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
};

const onConnect = (err) => {
  if (err) throw err;
  console.log("Successfully connected to DB");
};

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Password",
        database: "foods_db",
      });
}

connection.connect(onConnect);

module.exports = connection;
