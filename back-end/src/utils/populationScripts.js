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
        const Drinks = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
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
    const seedAllMeasuresMeals = allMeals.reduce((acc, curr) => {
        Object.keys(curr).filter((key) => key.includes('strMeasure')).forEach((key) => {
            if(curr[key] !== '' && curr[key] !== null) {
                if (acc.includes(curr[key])) {
                    return;
                }
                acc.push(curr[key]);
            }
        });
        return acc;
    }, []);
    const allDrinks = await populationsAllDrinks();
    const seedAllMeasuresDrinks = allDrinks.reduce((acc, curr) => {
        Object.keys(curr).filter((key) => key.includes('strMeasure')).forEach((key) => {
            if(curr[key] !== '' && curr[key] !== null) {
                if (acc.includes(curr[key])) {
                    return;
                }
                acc.push(curr[key]);
            }
        });
        return acc;
    }, []);
    const seedAllMeasures = [...seedAllMeasuresMeals, ...seedAllMeasuresDrinks];
    return seedAllMeasures.map((measure) => ({strMeasure: measure}));
};

seedAllMeasures();

module.exports = {
    seedAllDrinks,
    seedAllMeals,
    seedAllIngredients,
    seedAllMeasures
};


