const express = require('express');
const router = express.Router();

const flightCtrl = require('../controllers/flight');

router.get('/flight', flightCtrl.getFlight);

module.exports = router;