const express = require('express');
const router = express.Router();
const models = require('../controllers/models');
const catchAsync = require('../utils/catchAsync');

router.route('/brands/:id').get(catchAsync(models.getModelsByBrand));
router.route('/get-popular').get(catchAsync(models.getPopular));

module.exports = router;