/* eslint-disable no-unused-vars */
'use strict';

const { seedAllDrinks } = require('../../utils/populationScripts');

// passar para outro arquivo, e importar o array ja populado;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('drinks', await seedAllDrinks());
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('drinks', null, {});
    }
};
