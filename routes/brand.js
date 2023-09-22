const express = require('express');
const router = express.Router();
const brands = require('../controllers/brands');
const catchAsync = require('../utils/catchAsync');

router.route('/').get(catchAsync(brands.get));
router.route('/home-list').get(catchAsync(brands.getHomeBrand));

module.exports = router;