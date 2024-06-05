/* eslint-disable no-unused-vars */
'use strict';

const { seedAllMeasures } = require('../../utils/populationScripts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('measures', await seedAllMeasures() );
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('measures', null, {});
    }
};
