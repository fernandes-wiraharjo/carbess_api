const Model = require('../models/model');

module.exports.getModelsByBrand = async (req, res) => {
    const {id} = req.params;
    const models = await Model.find({ brand: id }).sort('name');
    res.send(models);
};

module.exports.getPopular = async (req, res) => {
    const models = await Model.find({ name: { $nin: ['Camry', 'Fortuner', 'Raize'] } }).sort('name');
    res.send(models);
};
