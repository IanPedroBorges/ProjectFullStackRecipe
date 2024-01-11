const getAllDrinks = async () => {
    const drinks = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const drinksJson = await drinks.json();
    return drinksJson;
};
const getDrinksAllCategories = async () => {
    const drinks = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const drinksJson = await drinks.json();
    return drinksJson;
};
module.exports = {
    getAllDrinks,
    getDrinksAllCategories,
};

