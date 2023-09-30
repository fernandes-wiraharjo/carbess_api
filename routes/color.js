const express = require('express');
const router = express.Router();
const colors = require('../controllers/colors');
const catchAsync = require('../utils/catchAsync');

router.route('/').get(catchAsync(colors.get));

module.exports = router;