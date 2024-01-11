const { DrinksService } = require('../services');

const getAllDrinks = async (_req, res) => {
    const drinks = await DrinksService.getAllDrinks();
    return res.status(200).json(drinks);
};
const getDrinksAllCategories = async (req, res) => {
    const { c } = req.query;
    if (!c) {
        const drinks = await DrinksService.getDrinksAllCategories();
        return res.status(200).json(drinks);
    }
    const drinks = await DrinksService.getDrinksByCategory(c);
    return res.status(200).json(drinks);
};

const getDrinkById = async (req, res) => {
    const { id } = req.params;
    const drinks = await DrinksService.getDrinkById(id);
    return res.status(200).json(drinks);
};

module.exports = {
    getAllDrinks,
    getDrinksAllCategories,
    getDrinkById,
};