const express = require("express");
const path = require("path")

const router = express.Router(); 
router.get("/", function (req, res) {
    // const filePath = path.join(__dirname, "../public/index.html")
    // res.sendFile(filePath)
    res.render("food", {})
});
// router.get("/route2", function (req, res) {});

module.exports = router;