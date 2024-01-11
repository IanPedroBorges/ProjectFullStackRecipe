const getAllMeals = async () => {
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const mealsJson = await meals.json();
    return mealsJson;
};

module.exports = {
    getAllMeals,
};