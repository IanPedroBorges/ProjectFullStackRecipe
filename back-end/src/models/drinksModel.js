const axios = require('axios');

const getAllDrinks = async () => {
    const drinks = await axios({
        method: 'get',
        url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    });
    return drinks.data;
};

const getDrinksAllCategories = async () => {
    const drinks = await axios({
        method: 'get',
        url: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    });
    return drinks.data;
};


const getDrinksByCategory = async (category) => {
    const drinks = await axios({
        method: 'get',
        url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
    });
    return drinks.data;
};

const getDrinkById = async (id) => {
    const drinks = await axios({
        method: 'get',
        url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    });
    return drinks.data;
};

module.exports = {
    getAllDrinks,
    getDrinksAllCategories,
    getDrinksByCategory,
    getDrinkById,
};

