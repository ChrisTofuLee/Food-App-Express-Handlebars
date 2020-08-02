const express = require("express");
const food = require("../models/food");

const router = express.Router();

// route to get information from the foods table
router.get("/api/foods", (req, res) => {
  const cb = (foods) => {
    res.json({ foods });
  };
  food.meal(cb);
});

//route for when user submits a new food into the input box then redirects to the html view route to re-render the page
router.post("/api/foods", (req, res) => {
  const payload = req.body;
  console.log(payload)
  const cb = (result) => {
    res.redirect('/view');
  }
  food.newFood(payload, cb)
});

//route for when user clicks on a devour button for a specific food then redirects to the html view route to re-render the page to show the 'devoured' food on the devoured list
router.post("/api/foods/:id", (req, res) => {
  const { id } = req.params;
  const cb = () => {
    res.redirect('/view');
  }
  
  food.devour(id, cb)
});

module.exports = router;
