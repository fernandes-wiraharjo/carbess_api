const express = require('express');
const router = express.Router();
const brands = require('../controllers/brands');
const catchAsync = require('../utils/catchAsync');
const Brand = require('../models/brand');

router.route('/home-list').get(catchAsync(brands.getHomeBrand));

module.exports = router;