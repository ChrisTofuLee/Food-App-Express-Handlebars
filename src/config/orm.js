const connection = require("./connection");

const getFoods = (cbT, ) => {
    const query = "SELECT * FROM foods WHERE devoured=0";

    const onQuery = (err, rows) => {
        if (err) throw err;
        
        cbT(rows)
    };

    connection.query(query, onQuery);
}
const getDevouredFoods = (cbF) => {
    const queryFalse = "SELECT * FROM foods WHERE devoured=1";

    const onQueryFalse = (err, rows) => {
        if (err) throw err;
        
        cbF(rows)
    };

    connection.query(queryFalse, onQueryFalse);
}

const insertNewFood = (food, cb) => {
//backticks might be required here as "name" is a protected field in SQL
    const query = `INSERT INTO foods (name) VALUES ("${food}")`;

    const onQuery = (err, rows) => {
        if (err) throw err;
        cb(rows)
    }
    connection.query(query, onQuery)
}

const update = (id, cb) => {
    const query = `UPDATE foods SET devoured=true WHERE id=${id}`;

const onQuery = (err, rows) => {
if (err) throw err;
cb(rows)
};

connection.query(query, onQuery);
}

const orm = {
    getFoods,
    getDevouredFoods,
    insertNewFood,
    update
}

module.exports = orm;

// const getFoods = (cb) => {
//     const queryTrue = "SELECT * FROM foods WHERE devoured=0";
//     const queryFalse = "SELECT * FROM foods WHERE devoured=1";
//     const onQuery = (err, rows) => {
//         if (err) throw err;
//         console.log(rows)
//         cb(rows)
//     };

//     connection.query(`${queryTrue}; ${queryFalse}`, onQuery);
// }