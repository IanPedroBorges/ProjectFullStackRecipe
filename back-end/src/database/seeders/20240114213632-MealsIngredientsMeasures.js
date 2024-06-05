/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('meals_ingredients_measures', [
            {
                idMeal: 1,
                idIngredient: 1,
                idMeasure: 1,
            },
            {
                idMeal: 1,
                idIngredient: 2,
                idMeasure: 2,
            },
            {
                idMeal: 1,
                idIngredient: 3,
                idMeasure: 3,
            },
            {
                idMeal: 1,
                idIngredient: 4,
                idMeasure: 4,
            },
            {
                idMeal: 1,
                idIngredient: 5,
                idMeasure: 5,
            },
            {
                idMeal: 1,
                idIngredient: 6,
                idMeasure: 6,
            },
            {
                idMeal: 1,
                idIngredient: 7,
                idMeasure: 7,
            },
            {
                idMeal: 1,
                idIngredient: 8,
                idMeasure: 8,
            },
            {
                idMeal: 1,
                idIngredient: 9,
                idMeasure: 9,
            },
            {
                idMeal: 1,
                idIngredient: 10,
                idMeasure: 10,
            },
            {
                idMeal: 1,
                idIngredient: 11,
                idMeasure: 11,
            },
        ]);
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('meals_ingredients_measures', null, {});
    }
};
