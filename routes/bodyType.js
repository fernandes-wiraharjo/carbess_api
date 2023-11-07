const express = require('express');
const router = express.Router();
const bodyTypes = require('../controllers/bodyTypes');
const catchAsync = require('../utils/catchAsync');

router.route('/').get(catchAsync(bodyTypes.get));
router.route('/get-popular').get(catchAsync(bodyTypes.getPopular));

module.exports = router;