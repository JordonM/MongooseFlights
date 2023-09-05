// We need express
const express = require('express');
// Wer need to isolate the router
const router = express.Router();
const flightCtrl = require('../controllers/flightsControl');


router.get('/new', flightCtrl.new); 


router.post('/', flightCtrl.create)


router.get('/', flightCtrl.index)

module.exports = router