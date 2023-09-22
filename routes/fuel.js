const express = require('express');
const router = express.Router();
const fuels = require('../controllers/fuels');
const catchAsync = require('../utils/catchAsync');

router.route('/').get(catchAsync(fuels.get));

module.exports = router;