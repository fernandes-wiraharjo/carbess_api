const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { currentTimestamp } = require('../utils/datetime');

const brandSchema = new Schema({
    name: String,
    logo: String,
    created_at: {
        type: Date,
        default: currentTimestamp
    }
});

module.exports = mongoose.model('Brand', brandSchema);
