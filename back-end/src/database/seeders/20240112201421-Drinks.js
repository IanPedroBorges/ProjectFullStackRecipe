'use strict';

const axios = require('axios');

const drinks = async () => {
    const allDrinks = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const drinks = allDrinks.data.drinks;
    const drinksArray = [];
    for (const drink of drinks) {
        const {
            idDrink,
            strDrink,
            strDrinkAlternate,
            strDrinkCategory,
            strAlcoholic,
            strGlass,
            strInstructions,
            strDrinkThumb,
        } = drink;
        drinksArray.push({
            idDrink,
            strDrink,
            strDrinkAlternate,
            strDrinkCategory,
            strAlcoholic,
            strGlass,
            strInstructions,
            strDrinkThumb,
        });
    }
    return drinksArray;
};

// passar para outro arquivo, e importar o array ja populado;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('drinks', await drinks());
    },

    async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    }
};
