const express = require("express");

const router = express.Router();

router.get("/api/foods", (req, res) => {
    res.json({message: "get foods"})
});

router.post("/api/foods", (req, res) => {
res.json({message: "post foods"})
});

router.put("/api/foods/:id", (req, res) => {
    const { id } = req.params;
    res.json({message: `put foods - ${id}`})
});

module.exports = router;