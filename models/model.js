const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { currentTimestamp } = require('../utils/datetime');

const modelSchema = new Schema({
    name: String,
    created_at: {
        type: Date,
        default: currentTimestamp
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    }
});

module.exports = mongoose.model('Model', modelSchema);
