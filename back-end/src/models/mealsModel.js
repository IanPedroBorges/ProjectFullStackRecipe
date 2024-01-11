const getAllMeals = async () => {
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const mealsJson = await meals.json();
    return mealsJson;
};

const getMealsAllCategories = async () => {
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const mealsJson = await meals.json();
    return mealsJson;
};

const getMealsByCategory = async (category) => {
    const meals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const mealsJson = await meals.json();
    return mealsJson;
};

const getMealById = async (id) => {
    const meals = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const mealsJson = await meals.json();
    return mealsJson;
};

module.exports = {
    getAllMeals,
    getMealsAllCategories,
    getMealsByCategory,
    getMealById,
};

