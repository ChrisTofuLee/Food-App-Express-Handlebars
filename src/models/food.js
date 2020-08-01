const orm = require("../config/orm");

const meal = (cbT) => {
    orm.getFoods(cbT)
}
const devouredFoods = (cbF) => {
    orm.getDevouredFoods(cbF)
}

const food = {
    meal,
    devouredFoods,
};

module.exports = food;