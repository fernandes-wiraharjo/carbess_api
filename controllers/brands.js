const Brand = require('../models/brand');

module.exports.getHomeBrand = async (req, res) => {
    const brands = await Brand.find({ name: { $ne: 'Mazda' } }).sort('name');
    res.send(brands);
};

module.exports.getBrands = async (req, res) => {
    const brands = await Brand.find().sort('name');
    res.send(brands);
};
