const connection = require("./connection");

const getFoods = (cb) => {
    const query = "SELECT * FROM foods";

    const onQuery = (err, rows) => {
        if (err) throw err;
        console.log(rows)
        cb(rows)
    };

    connection.query(query, onQuery);
}
const orm = {
    getFoods,
}

module.exports = orm;