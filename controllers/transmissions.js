const Trannsmission = require('../models/transmission');

module.exports.get = async (req, res) => {
    const transmissions = await Trannsmission.find().sort('name');
    res.send(transmissions);
};
