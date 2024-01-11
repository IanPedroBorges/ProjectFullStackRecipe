const { MealsService } = require('../services');

const getAllMeals = async (req, res) => {
    const meals = await MealsService.getAllMeals();
    res.status(200).json(meals);
};
const getMealsAllCategories = async (req, res) => {
    const meals = await MealsService.getMealsAllCategories();
    res.status(200).json(meals);
};

module.exports = {
    getAllMeals,
    getMealsAllCategories,
};