const express = require('express');
var router = express.Router();

router.use(function(req, res, next) {

    console.log('interceptacao pela middleware');
    next();
});

router.get('/', (req, res) => res.json({ message: "Rota teste OK" }));

module.exports = router;