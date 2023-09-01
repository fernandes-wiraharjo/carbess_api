const mongoose = require('mongoose');
const brands = require('./brands');
const models = require('./models');
const colors = require('./colors');
const transmissions = require('./transmissions');
const bodyTypes = require('./bodyTypes');
const fuels = require('./fuels');
const wheelDrives = require('./wheelDrives');
const Brand = require('../models/brand');
const Model = require('../models/model');
const Color = require('../models/color');
const Transmission = require('../models/transmission');
const BodyType = require('../models/bodyType');
const Fuel = require('../models/fuel');
const WheelDrive = require('../models/wheelDrive');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/carbess', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    // brands
    await Brand.deleteMany({});
    for (let i = 0; i < brands.length; i++) {
        const brand = new Brand({
            name: brands[i].name,
            logo: brands[i].logo
        });
        await brand.save();
    }

    //models
    await Model.deleteMany({});
    for (let i=0; i < models.length; i++) {
        const model = new Model({
            name: models[i].name,
            brand: await Brand.findOne({ name: models[i].brandName }).select('_id')
        });
        await model.save();
    }

    //colors
    await Color.deleteMany({});
    for (let i=0; i < colors.length; i++) {
        const color = new Color({
            name: colors[i].name
        });
        await color.save();
    }

    //transmissions
    await Transmission.deleteMany({});
    for (let i=0; i < transmissions.length; i++) {
        const transmission = new Transmission({
            name: transmissions[i].name
        });
        await transmission.save();
    }

    //body types
    await BodyType.deleteMany({});
    for (let i=0; i < bodyTypes.length; i++) {
        const bodyType = new BodyType({
            name: bodyTypes[i].name
        });
        await bodyType.save();
    }

    //fuels
    await Fuel.deleteMany({});
    for (let i=0; i < fuels.length; i++) {
        const fuel = new Fuel({
            name: fuels[i].name
        });
        await fuel.save();
    }

    //whell drives
    await WheelDrive.deleteMany({});
    for (let i=0; i < wheelDrives.length; i++) {
        const wheelDrive = new WheelDrive({
            name: wheelDrives[i].name
        });
        await wheelDrive.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});
