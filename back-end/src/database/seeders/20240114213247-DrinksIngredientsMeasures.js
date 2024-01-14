'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    // eslint-disable-next-line no-unused-vars
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('drinks_ingredients_measures', [
            {
                drink_id: 1,
                ingredient_id: 1,
                measure_id: 1,
            },
            {
                drink_id: 1,
                ingredient_id: 2,
                measure_id: 2,
            },
            {
                drink_id: 1,
                ingredient_id: 3,
                measure_id: 3,
            },
            {
                drink_id: 1,
                ingredient_id: 4,
                measure_id: 4,
            },
            {
                drink_id: 1,
                ingredient_id: 5,
                measure_id: 5,
            },
            {
                drink_id: 1,
                ingredient_id: 6,
                measure_id: 6,
            },
            {
                drink_id: 1,
                ingredient_id: 7,
                measure_id: 7,
            },
            {
                drink_id: 1,
                ingredient_id: 8,
                measure_id: 8,
            },
            {
                drink_id: 1,
                ingredient_id: 9,
                measure_id: 9,
            },
            {
                drink_id: 1,
                ingredient_id: 10,
                measure_id: 10,
            },
            {
                drink_id: 1,
                ingredient_id: 11,
                measure_id: 11,
            },
            {
                drink_id: 1,
                ingredient_id: 12,
                measure_id: 12,
            },
            {
                drink_id: 1,
                ingredient_id: 13,
                measure_id: 13,
            },
            {
                drink_id: 1,
                ingredient_id: 14,
                measure_id: 14,
            },
            {
                drink_id: 1,
                ingredient_id: 15,
                measure_id: 15,
            },
        ]);
    },

    // eslint-disable-next-line no-unused-vars
    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('drinks_ingredients_measures', null, {});
    }
};
