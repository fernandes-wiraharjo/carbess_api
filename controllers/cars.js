const Car = require('../models/car');

module.exports.newArrival = async (req, res) => {
    const cars = await Car.find({is_sold: false}).sort('-created_at').limit(4);
    res.send(cars);
};

module.exports.recommendedItem = async (req, res) => {
    const cars = await Car.find({is_recommended: true, is_sold: false}).sort('-created_at').limit(5);
    res.send(cars);
};
