const express = require('express');
const router = express.Router();

const gamesController = require('../controllers/gamesController');

require('dotenv');
router.route('/games')
    .get(gamesController.getAll);


router.route('/div/:num1')
    .get(function (req, res) {
        const num1 = parseInt(req.params.num1);
        const num2 = parseInt(req.query.num2);
        res.status(200).send("" +num1/num2);
    });

module.exports = router;