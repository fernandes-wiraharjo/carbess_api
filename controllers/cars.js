const ExpressError = require('../utils/ExpressError');
const Car = require('../models/car');
const CarImage = require('../models/carImage');


module.exports.getList = async (req, res) => {
    try {
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

        if (filter.search) {
            filter.name = { $regex: new RegExp(filter.search, 'i') }
            delete filter.search;
        }

        filter.is_sold = false;

        let field = 'created_at';
        let sortOrder = -1
        if (filter.sort) {
            const sortField = filter.sort;
            [field, order] = sortField.split(' ');
            sortOrder = order === '-1' ? -1 : 1;
        }
        delete filter.sort
        
        const cars = await Car.find(filter)
            .sort({ [field]: sortOrder })
            .populate({
                path: 'images',
                match: { is_list: true },
                select: 'image'
            }).populate({
                path: 'transmission',
                select: 'name'
            });
        const result = {'cars': cars, 'count': cars.length};
        res.status(200).json(result);
    } catch (error) {
        throw(new ExpressError(error.message, 500));
    }
};

module.exports.getById = async (req, res) => {
    try {
        const carId = req.params.id;
        const car = await Car.findById(carId)
            .populate({
                path: 'images',
                match: { is_detail: true },
                select: 'image'
            }).populate({
                path: 'color',
                select: 'name'
            }).populate({
                path: 'transmission',
                select: 'name'
            }).populate({
                path: 'fuel',
                select: 'name'
            }).populate({
                path: 'bodyType',
                select: 'name'
            }).populate({
                path: 'driveWheelType',
                select: 'name'
            });
        const result = {'carInfo' : car};
        res.status(200).json(result);
    } catch (error) {
        throw(new ExpressError(error.message, 500));
    }
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
