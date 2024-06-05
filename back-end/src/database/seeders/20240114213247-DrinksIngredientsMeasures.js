'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    // eslint-disable-next-line no-unused-vars
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('drinks_ingredients_measures', [
            {
                idDrink: 1,
                idIngredient: 1,
                idMeasure: 1,
            },
            {
                idDrink: 1,
                idIngredient: 2,
                idMeasure: 2,
            },
            {
                idDrink: 1,
                idIngredient: 3,
                idMeasure: 3,
            },
            {
                idDrink: 1,
                idIngredient: 4,
                idMeasure: 4,
            },
            {
                idDrink: 1,
                idIngredient: 5,
                idMeasure: 5,
            },
            {
                idDrink: 1,
                idIngredient: 6,
                idMeasure: 6,
            },
            {
                idDrink: 1,
                idIngredient: 7,
                idMeasure: 7,
            },
            {
                idDrink: 1,
                idIngredient: 8,
                idMeasure: 8,
            },
            {
                idDrink: 1,
                idIngredient: 9,
                idMeasure: 9,
            },
            {
                idDrink: 1,
                idIngredient: 10,
                idMeasure: 10,
            },
            {
                idDrink: 1,
                idIngredient: 11,
                idMeasure: 11,
            },
            {
                idDrink: 1,
                idIngredient: 12,
                idMeasure: 12,
            },
            {
                idDrink: 1,
                idIngredient: 13,
                idMeasure: 13,
            },
            {
                idDrink: 1,
                idIngredient: 14,
                idMeasure: 14,
            },
            {
                idDrink: 1,
                idIngredient: 15,
                idMeasure: 15,
            },
        ]);
    },

    // eslint-disable-next-line no-unused-vars
    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('drinks_ingredients_measures', null, {});
    }
};
