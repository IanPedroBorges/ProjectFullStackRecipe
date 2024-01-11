const { MealsService } = require('../services');

const getAllMeals = async (req, res) => {
    const meals = await MealsService.getAllMeals();
    res.status(200).json(meals);
};
const getMealsAllCategories = async (req, res) => {
    const { c } = req.query;
    if (!c) {
        const meals = await MealsService.getMealsAllCategories();
        return res.status(200).json(meals);
    }
    const meals = await MealsService.getMealsByCategory(c);
    return res.status(200).json(meals);
};

const getMealById = async (req, res) => {
    const { id } = req.params;
    const meals = await MealsService.getMealById(id);
    return res.status(200).json(meals);
};

module.exports = {
    getAllMeals,
    getMealsAllCategories,
    getMealById,
};