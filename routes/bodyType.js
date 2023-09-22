const express = require('express');
const router = express.Router();
const bodyTypes = require('../controllers/bodyTypes');
const catchAsync = require('../utils/catchAsync');

router.route('/').get(catchAsync(bodyTypes.get));

module.exports = router;