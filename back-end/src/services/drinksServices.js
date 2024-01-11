const { DrinksModel } = require('../models');

const getAllDrinks = async () => {
    const drinks = await DrinksModel.getAllDrinks();
    return drinks;
};

const getDrinksAllCategories = async () => {
    const drinks = await DrinksModel.getDrinksAllCategories();
    return drinks;
};

const getDrinksByCategory = async (category) => {
    const drinks = await DrinksModel.getDrinksByCategory(category);
    return drinks;
};

const getDrinkById = async (id) => {
    const drinks = await DrinksModel.getDrinkById(id);
    return drinks;
};

module.exports = {
    getAllDrinks,
    getDrinksAllCategories,
    getDrinksByCategory,
    getDrinkById,
};