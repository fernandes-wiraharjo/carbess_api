const BodyType = require('../models/bodyType');

module.exports.get = async (req, res) => {
    const bodyTypes = await BodyType.find().sort('name');
    res.send(bodyTypes);
};

module.exports.getPopular = async (req, res) => {
    const bodyTypes = await BodyType.find({ name: { $in: ['Sedan', 'Trucks', 'MPV', 'SUV', 'Pick-up', 'Hatchback'] } }).sort('name');
    res.send(bodyTypes);
};
