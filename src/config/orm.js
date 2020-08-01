const connection = require("./connection");

const getFoods = (cbT, ) => {
    const query = "SELECT * FROM foods WHERE devoured=0";

    const onQuery = (err, rows) => {
        if (err) throw err;
        console.log(rows)
        cbT(rows)
    };

    connection.query(query, onQuery);
}
const getDevouredFoods = (cbF) => {
    const queryFalse = "SELECT * FROM foods WHERE devoured=1";

    const onQueryFalse = (err, rows) => {
        if (err) throw err;
        console.log(rows)
        cbF(rows)
    };

    connection.query(queryFalse, onQueryFalse);
}

const orm = {
    getFoods,
    getDevouredFoods,
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