const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { currentTimestamp } = require('../utils/datetime');

const brandSchema = new Schema({
    name: String,
    createdAt: {
        type: Date,
        default: currentTimestamp
    }
});

module.exports = mongoose.model('Brand', brandSchema);
