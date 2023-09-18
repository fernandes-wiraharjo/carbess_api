const Brand = require('../models/brand');

module.exports.getHomeBrand = async (req, res) => {
    const brands = await Brand.find({ name: { $ne: 'Mazda' } }).sort('name');
    res.send(brands);
};
