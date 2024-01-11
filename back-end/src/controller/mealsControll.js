const { MealsService } = require('../services');

const getAllMeals = async (req, res) => {
    const meals = await MealsService.getAllMeals();
    res.status(200).json(meals);
};

module.exports = {
    getAllMeals,
};