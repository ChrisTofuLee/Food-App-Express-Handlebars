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
  res.json({ message: "post foods" });
});

router.put("/api/foods/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `put foods - ${id}` });
});

module.exports = router;
