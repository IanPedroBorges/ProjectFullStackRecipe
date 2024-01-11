const { DrinksService } = require('../services');

const getAllDrinks = async (req, res) => {
    const drinks = await DrinksService.getAllDrinks();
    res.status(200).json(drinks);
};

module.exports = {
    getAllDrinks,
};