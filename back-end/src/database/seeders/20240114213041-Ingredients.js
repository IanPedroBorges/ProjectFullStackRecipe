/* eslint-disable no-unused-vars */
'use strict';

const { seedAllIngredients } = require('../../utils/populationScripts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('ingredients', seedAllIngredients);
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('ingredients', null, {});
    }
};
