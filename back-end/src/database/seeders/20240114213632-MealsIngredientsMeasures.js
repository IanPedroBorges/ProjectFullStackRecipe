/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('meals_ingredients_measures', [
            {
                mealId: 1,
                ingredientId: 1,
                measureId: 1,
            },
            {
                mealId: 1,
                ingredientId: 2,
                measureId: 2,
            },
            {
                mealId: 1,
                ingredientId: 3,
                measureId: 3,
            },
            {
                mealId: 1,
                ingredientId: 4,
                measureId: 4,
            },
            {
                mealId: 1,
                ingredientId: 5,
                measureId: 5,
            },
            {
                mealId: 1,
                ingredientId: 6,
                measureId: 6,
            },
            {
                mealId: 1,
                ingredientId: 7,
                measureId: 7,
            },
            {
                mealId: 1,
                ingredientId: 8,
                measureId: 8,
            },
            {
                mealId: 1,
                ingredientId: 9,
                measureId: 9,
            },
            {
                mealId: 1,
                ingredientId: 10,
                measureId: 10,
            },
            {
                mealId: 1,
                ingredientId: 11,
                measureId: 11,
            },
        ]);
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('meals_ingredients_measures', null, {});
    }
};
