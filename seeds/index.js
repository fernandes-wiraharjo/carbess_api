const mongoose = require('mongoose');
const brands = require('./brands');
const Brand = require('../models/brand');

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
            name: brands[i].name
        });
        await brand.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});
