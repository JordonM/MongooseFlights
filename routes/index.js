
const express = require('express');

const router = express.Router();

const indexCtrl = require('../controllers/indexControl');
// NEW route
router.get('/', indexCtrl.index); 
module.exports = router