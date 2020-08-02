const express = require("express");
const food = require("../models/food");
const { devouredFoods } = require("../models/food");

const router = express.Router();

router.get("/view", function (req, res) {
  // const filePath = path.join(__dirname, "../public/index.html")
  // res.sendFile(filePath)
  const cbT = (foods) => {
    const cbF = (devouredFoods) => {
res.render("food", { foods, devouredFoods });
    }
    food.devouredFoods(cbF);
    
  };
  
  food.meal(cbT);
});
// router.get("/route2", function (req, res) {});

module.exports = router;
