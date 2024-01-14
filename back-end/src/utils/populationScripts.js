const axios = require('axios');

const populationsAllDrinks = async () => {
    const { data: { drinks } } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    return drinks.data;
};

const populationsAllMeals = async () => {
    const { data: { meals } } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    return meals.data;
};

const getAllIngredients = async () => {
    const Meals = await axios({
        method: 'get',
        url: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
    });
    const Drinks = await axios({
        method: 'get',
        url: 'www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
    });

    return [...Meals.data, ...Drinks.data];
};

const seedAllDrinks = populationsAllDrinks().map((drink) => {
    const {
        strDrink,
        strDrinkAlternate,
        strDrinkCategory,
        strAlcoholic,
        strGlass,
        strInstructions,
        strDrinkThumb,
    } = drink;

    return {
        strDrink,
        strDrinkAlternate,
        strDrinkCategory,
        strAlcoholic,
        strGlass,
        strInstructions,
        strDrinkThumb,
    };
});

const seedAllMeals = populationsAllMeals().map((meal) => {
    const {
        strMeal,
        strDrinkAlternate,
        strCategory,
        strArea,
        strInstructions,
        strMealThumb,
        strTags,
        strYoutube,
    } = meal;

    return {
        strMeal,
        strDrinkAlternate,
        strCategory,
        strArea,
        strInstructions,
        strMealThumb,
        strTags,
        strYoutube,
    };
});

const seedAllIngredients = getAllIngredients().map((ingredient) => {
    const {
        strIngredient,
    } = ingredient;

    return {
        strIngredient,
    };
});

const seedAllMeasuresMeals = Object.entries(populationsAllMeals()).reduce((acc, curr) => {
    if (curr[0].includes('strMeasure') && curr[1] !== '' && curr[1] !== null) {
        acc.push(curr[1]);
    }
    return acc;
}, []);

const seedAllMeasuresDrinks = Object.entries(populationsAllDrinks()).reduce((acc, curr) => {
    if (curr[0].includes('strMeasure') && curr[1] !== '' && curr[1] !== null) {
        acc.push(curr[1]);
    }
    return acc;
});

const seedAllMeasures = [...seedAllMeasuresMeals, ...seedAllMeasuresDrinks];

module.exports = {
    seedAllDrinks,
    seedAllMeals,
    seedAllIngredients,
    seedAllMeasures,
};
