const { MealsModel } = require('../models');

const getAllMeals = async () => {
    const meals = await MealsModel.getAllMeals();
    return meals;
};

const getMealsAllCategories = async () => {
    const meals = await MealsModel.getMealsAllCategories();
    return meals;
};

const getMealsByCategory = async (category) => {
    const meals = await MealsModel.getMealsByCategory(category);
    return meals;
};

const getMealById = async (id) => {
    const meals = await MealsModel.getMealById(id);
    return meals;
};

module.exports = {
    getAllMeals,
    getMealsAllCategories,
    getMealsByCategory,
    getMealById,
};