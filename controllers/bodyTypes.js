const BodyType = require('../models/bodyType');

module.exports.get = async (req, res) => {
    const bodyTypes = await BodyType.find().sort('name');
    res.send(bodyTypes);
};
