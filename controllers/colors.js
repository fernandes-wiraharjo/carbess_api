const Color = require('../models/color');

module.exports.get = async (req, res) => {
    const colors = await Color.find().sort('name');
    res.send(colors);
};
