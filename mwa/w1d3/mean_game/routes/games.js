const express = require('express');
const router = express.Router();
require('dotenv');
router.route('/games')
    .get(function (req, res) {
        res.status(process.env.STATUS_OK).sendFile('../data/games.json');
    })
    .post(function (req, res) {
        res.status(200).sendFile('../data/games.json');
    });

router.route('/div/:num1')
    .get(function (req, res) {
        const num1 = parseInt(req.params.num1);
        const num2 = parseInt(req.query.num2);
        res.status(200).send("" +num1/num2);
    });
module.exports = router;