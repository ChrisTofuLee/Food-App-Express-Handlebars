const express = require("express");
const food = require("../models/food");

const router = express.Router();

router.get("/api/foods", (req, res) => {
  const cb = (foods) => {
    res.json({ foods });
  };
  food.meal(cb);
});

router.post("/api/foods", (req, res) => {
  const payload = req.body;
  console.log(payload)
  const cb = (result) => {
    res.redirect('/view');
  }
  food.newFood(payload, cb)
});

router.post("/api/foods/:id", (req, res) => {
  const { id } = req.params;
  const cb = () => {
    res.redirect('/view');
  }
  
  food.devour(id, cb)
});

module.exports = router;
