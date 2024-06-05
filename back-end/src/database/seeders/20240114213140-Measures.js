/* eslint-disable no-unused-vars */
'use strict';

// const { seedAllMeasures } = require('../../utils/populationScripts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('measures', [
            {
                strMeasure: '1/2',
            },
            {
                strMeasure: '1',
            },
            {
                strMeasure: '2',
            },
            {
                strMeasure: '3',
            },
            {
                strMeasure: '4',
            },
            {
                strMeasure: '5',
            },
            {
                strMeasure: '6',
            },
            {
                strMeasure: '7',
            },
            {
                strMeasure: '8',
            },
            {
                strMeasure: '9',
            },
            {
                strMeasure: '10',
            },
            {
                strMeasure: '11',
            },
            {
                strMeasure: '12',
            },
            {
                strMeasure: '13',
            },
            {
                strMeasure: '14',
            },
            {
                strMeasure: '15',
            },
            {
                strMeasure: '16',
            },
            {
                strMeasure: '17',
            },
            {
                strMeasure: '18',
            },
            {
                strMeasure: '19',
            },
            {
                strMeasure: '20',
            },
            {
                strMeasure: '21',
            },
            {
                strMeasure: '22',
            },
            {
                strMeasure: '23',
            },
            {
                strMeasure: '24',
            },
            {
                strMeasure: '25',
            },
            {
                strMeasure: '26',
            },
            {
                strMeasure: '27',
            },
            {
                strMeasure: '28',
            },
            {
                strMeasure: '29',
            },
            {
                strMeasure: '30',
            },
            {
                strMeasure: '31',
            },
            {
                strMeasure: '32',
            },
            {
                strMeasure: '33',
            },
            {
                strMeasure: '34',
            },
            {
                strMeasure: '35',
            },
            {
                strMeasure: '36',
            },
            {
                strMeasure: '37',
            },
            {
                strMeasure: '38',
            },
            {
                strMeasure: '39',
            },
            {
                strMeasure: '40',
            },
            {
                strMeasure: '41',
            },
            {
                strMeasure: '42'
            }
        ]);
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('measures', null, {});
    }
};
