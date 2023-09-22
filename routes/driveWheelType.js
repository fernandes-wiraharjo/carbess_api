const express = require('express');
const router = express.Router();
const driveWheelTypes = require('../controllers/driveWheelTypes');
const catchAsync = require('../utils/catchAsync');

router.route('/').get(catchAsync(driveWheelTypes.get));

module.exports = router;