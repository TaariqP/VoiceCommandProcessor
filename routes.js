const express = require('express');

const router = express.Router();

router.get("/todos", function(req, res) {
    res.json("hello");
});

module.exports = router;