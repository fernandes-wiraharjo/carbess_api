const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { currentTimestamp } = require('../utils/datetime');

const bodyTypeSchema = new Schema({
    name: String,
    created_at: {
        type: Date,
        default: currentTimestamp
    }
});

module.exports = mongoose.model('BodyType', bodyTypeSchema);
