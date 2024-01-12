const axios = require('axios');

const getAllMeals = async () => {
    const meals = await axios({
        method: 'get',
        url: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    });
    return meals.data;
};

const getMealsAllCategories = async () => {
    const meals = await axios({
        method: 'get',
        url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    });
    return meals.data;
};

const getMealsByCategory = async (category) => {
    const meals = await axios({
        method: 'get',
        url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    });
    return meals.data;
};

const getMealById = async (id) => {
    const meals = await axios({
        method: 'get',
        url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    });
    return meals.data;
};

module.exports = {
    getAllMeals,
    getMealsAllCategories,
    getMealsByCategory,
    getMealById,
};

