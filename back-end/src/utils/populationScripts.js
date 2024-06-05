const axios = require('axios');

const populationsAllDrinks = async () => {
    const { data: { drinks } } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    return drinks;
};

const populationsAllMeals = async () => {
    const { data: { meals } } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    return meals;
};

const getAllIngredients = async () => {
    try {
        const Meals = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        const Drinks = await axios({
            method: 'get',
            url: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
        });
        return [...Meals.data.meals,Drinks.data.drinks];
    } catch (err) {
        console.log('error', err);
    }
};

const seedAllDrinks = async () => {
    const drinks = await populationsAllDrinks();
    const seedAllDrinks = drinks.map((drink) => {
        const {
            strDrink,
            strDrinkAlternate,
            strCategory,
            strAlcoholic,
            strGlass,
            strInstructions,
            strDrinkThumb,
        } = drink;
        return {
            strDrink,
            strDrinkAlternate,
            strCategory,
            strAlcoholic,
            strGlass,
            strInstructions,
            strDrinkThumb,
        };
    });
    return seedAllDrinks;
};

const seedAllMeals = async () => {
    const meals = await populationsAllMeals();
    const seedAllMeals = meals.map((meal) => {
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
    return seedAllMeals;
};

const seedAllIngredients = async () => {
    const allIngredients = await getAllIngredients();
    const seedAllIngredients = allIngredients.map((ingredient) => {
        const {
            strIngredient,
        } = ingredient;
    
        return {
            strIngredient,
        };
    });
    return seedAllIngredients;
};

const seedAllMeasures = async () => {
    const allMeals = await populationsAllMeals();
    console.log(allMeals);
    const seedAllMeasuresMeals = Object.entries(allMeals).reduce((acc, curr) => {
        if (curr[0].includes('strMeasure') && curr[1] !== '' && curr[1] !== null) {
            acc.push(curr[1]);
        }
        // console.log(curr)
        return acc;
    }, []);
    // console.log(seedAllMeasuresMeals);
    const allDrinks = await populationsAllDrinks();
    const seedAllMeasuresDrinks = Object.entries(allDrinks).reduce((acc, curr) => {
        if (curr[0].includes('strMeasure') && curr[1] !== '' && curr[1] !== null) {
            acc.push(curr[1]);
        }
        return acc;
    });
    
    const seedAllMeasures = [...seedAllMeasuresMeals, ...seedAllMeasuresDrinks];
    return seedAllMeasures;
};

seedAllMeasures();

module.exports = {
    seedAllDrinks,
    seedAllMeals,
    seedAllIngredients,
    seedAllMeasures
};


