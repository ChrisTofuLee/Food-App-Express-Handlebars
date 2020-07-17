const orm = require("../config/orm");

const meal = (cb) => {
    orm.getFoods(cb)
}
const food = {
    meal,
};

module.exports = food;