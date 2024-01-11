const { MealsModel } = require('../models');

const getAllMeals = async () => {
    const meals = await MealsModel.getAllMeals();
    return meals;
};

module.exports = {
    getAllMeals,
};