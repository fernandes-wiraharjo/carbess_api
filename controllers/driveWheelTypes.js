const DriveWheelType = require('../models/wheelDrive');

module.exports.get = async (req, res) => {
    const driveWheelTypes = await DriveWheelType.find().sort('name');
    res.send(driveWheelTypes);
};
