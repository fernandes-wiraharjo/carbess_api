const express = require('express');
const router = express.Router();
const transmissions = require('../controllers/transmissions');
const catchAsync = require('../utils/catchAsync');

router.route('/').get(catchAsync(transmissions.get));

module.exports = router;