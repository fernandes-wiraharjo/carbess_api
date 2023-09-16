const express = require('express');
const router = express.Router();
const cars = require('../controllers/cars');
const catchAsync = require('../utils/catchAsync');
const Car = require('../models/car');

router.route('/new-arrival').get(catchAsync(cars.newArrival));
router.route('/recommended-item').get(catchAsync(cars.recommendedItem));

module.exports = router;