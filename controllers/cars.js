const Car = require('../models/car');
const CarImage = require('../models/carImage');

module.exports.getList = async (req, res) => {
    const jsonData = req.body;

    const filter = {};
    for (const key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
            if (jsonData[key] !== '') {
                filter[key] = jsonData[key];
            }
        }
    }

    if (filter.priceStart) {
        filter.price = { $gte: filter.priceStart };        

        if (filter.priceEnd) {
            filter.price = { $gte: filter.priceStart, $lte: filter.priceEnd };
            delete filter.priceEnd;
        }

        delete filter.priceStart;
    }

    if (filter.yearStart) {
        filter.year = { $gte: filter.yearStart };        

        if (filter.yearEnd) {
            filter.year = { $gte: filter.yearStart, $lte: filter.yearEnd };
            delete filter.yearEnd;
        }

        delete filter.yearStart;
    }

    if (filter.kilometerStart) {
        filter.kilometer = { $gte: filter.kilometerStart };        

        if (filter.kilometerEnd) {
            filter.kilometer = { $gte: filter.kilometerStart, $lte: filter.kilometerEnd };
            delete filter.kilometerEnd;
        }

        delete filter.kilometerStart;
    }
    
    const cars = await Car.find(filter);
    const result = {'cars': cars, 'count': cars.length};
    res.status(200).json(result);
};

module.exports.newArrival = async (req, res) => {
    const cars = await Car.find({is_sold: false})
        .sort('-created_at')
        .limit(4)
        .populate({
            path: 'images',
            match: { is_main: true },
            select: 'image'
        });
    res.send(cars);
};

module.exports.recommendedItem = async (req, res) => {
    const cars = await Car.find({is_recommended: true, is_sold: false})
        .sort('-created_at')
        .limit(5)
        .populate({
            path: 'images',
            match: { is_main: true },
            select: 'image'
        });
    res.send(cars);
};
