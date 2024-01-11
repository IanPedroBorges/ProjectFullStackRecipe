const { DrinksModel } = require('../models');

const getAllDrinks = async () => {
    const drinks = await DrinksModel.getAllDrinks();
    return drinks;
};

module.exports = {
    getAllDrinks,
};