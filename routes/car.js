const express = require('express');
const router = express.Router();
const cars = require('../controllers/cars');
const catchAsync = require('../utils/catchAsync');

router.route('/get-list').post(catchAsync(cars.getList));
router.route('/get-by-id/:id').get(catchAsync(cars.getById));
router.route('/new-arrival').get(catchAsync(cars.newArrival));
router.route('/recommended-item').get(catchAsync(cars.recommendedItem));

module.exports = router;