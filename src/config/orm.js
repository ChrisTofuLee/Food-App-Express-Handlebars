const connection = require("./connection");

//function that collects the information necessary from the foods table from the foods_db to populate with the handlebars
const getFoods = (cbT, ) => {
    const query = "SELECT * FROM foods WHERE devoured=0";

    const onQuery = (err, rows) => {
        if (err) throw err;
        
        cbT(rows)
    };

    connection.query(query, onQuery);
}

//second function that is run straight after to make sure that the 'devoured' list is loaded up in the right section of the page
const getDevouredFoods = (cbF) => {
    const queryFalse = "SELECT * FROM foods WHERE devoured=1";

    const onQueryFalse = (err, rows) => {
        if (err) throw err;
        
        cbF(rows)
    };

    connection.query(queryFalse, onQueryFalse);
}

//function to add extra foods that have been submited by the user into the table then runs the callback function which renders the homepage again with the new submited food showing under the yummy foods list
const insertNewFood = (food, cb) => {
//backticks might be required here as "name" is a protected field in SQL
    const query = `INSERT INTO foods (name) VALUES ("${food}")`;

    const onQuery = (err, rows) => {
        if (err) throw err;
        cb(rows)
    }
    connection.query(query, onQuery)
}

//function to update the foods table and the renders the page again to show the food moved from yummy foods to devoured
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