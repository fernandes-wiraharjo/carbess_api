const Car = require('../models/car');
const CarImage = require('../models/carImage');

module.exports.newArrival = async (req, res) => {
    const cars = await Car.find({is_sold: false})
        .sort('-created_at')
        .limit(4)
        .populate({
            path: 'images',
            match: { is_main: true },
            select: 'image'
        });
    res.send(cars);
};

module.exports.recommendedItem = async (req, res) => {
    const cars = await Car.find({is_recommended: true, is_sold: false})
        .sort('-created_at')
        .limit(5)
        .populate({
            path: 'images',
            match: { is_main: true },
            select: 'image'
        });
    res.send(cars);
};
