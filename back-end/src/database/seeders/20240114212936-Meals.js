/* eslint-disable no-unused-vars */
'use strict';

const { seedAllMeals } = require('../../utils/populationScripts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('meals', await seedAllMeals());
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('meals', null, {});
    }
};
