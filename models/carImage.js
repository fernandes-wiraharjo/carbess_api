const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { currentTimestamp } = require('../utils/datetime');

const carImageSchema = new Schema({
    image: String,
    is_main: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: currentTimestamp
    }
});

carImageSchema.index({ image: 1, car: 1 }, { unique: true });

module.exports = mongoose.model('CarImage', carImageSchema);
