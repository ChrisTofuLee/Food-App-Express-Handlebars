const orm = require("../config/orm");

const meal = (cbT) => {
  orm.getFoods(cbT);
};
const devouredFoods = (cbF) => {
  orm.getDevouredFoods(cbF);
};
const newFood = ({ food }, cb) => {
  orm.insertNewFood(food, cb);
};
const devour = (id, cb) => {
    orm.update(id, cb)
}

const food = {
  meal,
  devouredFoods,
  newFood,
  devour,
};

module.exports = food;
