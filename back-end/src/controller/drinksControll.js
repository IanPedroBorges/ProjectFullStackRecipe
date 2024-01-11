const { DrinksService } = require('../services');

const getAllDrinks = async (req, res) => {
    const drinks = await DrinksService.getAllDrinks();
    res.status(200).json(drinks);
};
const getDrinksAllCategories = async (req, res) => {
    const drinks = await DrinksService.getDrinksAllCategories();
    res.status(200).json(drinks);
};

module.exports = {
    getAllDrinks,
    getDrinksAllCategories,
};