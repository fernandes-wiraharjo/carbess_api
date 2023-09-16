const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { currentTimestamp } = require('../utils/datetime');

const carSchema = new Schema({
    name: String,
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    },
    model: {
        type: Schema.Types.ObjectId,
        ref: 'Model'
    },
    price: Number,
    year: Number,
    color: {
        type: Schema.Types.ObjectId,
        ref: 'Color'
    },
    transmission: {
        type: Schema.Types.ObjectId,
        ref: 'Transmission'
    },
    kilometer: Number,
    body_type: {
        type: Schema.Types.ObjectId,
        ref: 'BodyType'
    },
    fuel: {
        type: Schema.Types.ObjectId,
        ref: 'Fuel'
    },
    wheel_drive: {
        type: Schema.Types.ObjectId,
        ref: 'WheelDrive'
    },
    machine_cc: Number,
    passenger: Number,
    door: Number,
    seller_note: String,
    is_sold: {
        type: Boolean,
        default: false
    },
    is_recommended: {
        type: Boolean,
        default: false
    },
    images: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CarImage'
        }
    ],
    created_at: {
        type: Date,
        default: currentTimestamp
    }
});

module.exports = mongoose.model('Car', carSchema);
