const express = require('express');
const router = express.Router();
// api manda informação
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "node Store API",
        version: "0.0.1"
    })
});
module.exports = router