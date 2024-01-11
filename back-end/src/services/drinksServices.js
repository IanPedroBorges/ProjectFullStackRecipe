const { DrinksModel } = require('../models');

const getAllDrinks = async () => {
    const drinks = await DrinksModel.getAllDrinks();
    return drinks;
};
const getDrinksAllCategories = async () => {
    const drinks = await DrinksModel.getDrinksAllCategories();
    return drinks;
};

module.exports = {
    getAllDrinks,
    getDrinksAllCategories,
};