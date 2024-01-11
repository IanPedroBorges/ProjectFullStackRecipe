const { MealsModel } = require('../models');

const getAllMeals = async () => {
    const meals = await MealsModel.getAllMeals();
    return meals;
};
const getMealsAllCategories = async () => {
    const meals = await MealsModel.getMealsAllCategories();
    return meals;
};

module.exports = {
    getAllMeals,
    getMealsAllCategories,
};