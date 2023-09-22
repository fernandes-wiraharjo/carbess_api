const Fuel = require('../models/fuel');

module.exports.get = async (req, res) => {
    const fuels = await Fuel.find().sort('name');
    res.send(fuels);
};
