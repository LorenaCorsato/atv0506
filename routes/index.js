const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("base",{
        title: "Página Inicial",
        view: "index",
    });
});

module.exports = router;