const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { currentTimestamp } = require('../utils/datetime');

const modelSchema = new Schema({
    name: String,
    idBrand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    },
    createdAt: {
        type: Date,
        default: currentTimestamp
    }
});

module.exports = mongoose.model('Model', modelSchema);
