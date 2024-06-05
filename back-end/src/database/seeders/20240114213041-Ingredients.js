/* eslint-disable no-unused-vars */
'use strict';

// const { seedAllIngredients } = require('../../utils/populationScripts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('ingredients', [
            {
                strIngredient: 'Light rum',
            },
            {
                strIngredient: 'Applejack',
            },
            {
                strIngredient: 'Gin',
            },
            {
                strIngredient: 'Dark rum',
            },
            {
                strIngredient: 'Sweet Vermouth',
            },
            {
                strIngredient: 'Strawberry schnapps',
            },
            {
                strIngredient: 'Scotch',
            },
            {
                strIngredient: 'Apricot brandy',
            },
            {
                strIngredient: 'Triple sec',
            },
            {
                strIngredient: 'Southern Comfort',
            },
            {
                strIngredient: 'Orange bitters',
            },
            {
                strIngredient: 'Brandy',
            },
            {
                strIngredient: 'Lemon vodka',
            },
            {
                strIngredient: 'Blended whiskey',
            },
            {
                strIngredient: 'Dry Vermouth',
            },
            {
                strIngredient: 'Amaretto',
            },
            {
                strIngredient: 'Tea',
            },
            {
                strIngredient: 'Champagne',
            },
            {
                strIngredient: 'Coffee liqueur',
            },
            {
                strIngredient: 'Bourbon',
            },
            {
                strIngredient: 'Tequila',
            },
            {
                strIngredient: 'Vodka',
            },
            {
                strIngredient: 'Añejo rum',
            },
            {
                strIngredient: 'Bitters',
            },
            {
                strIngredient: 'Sugar',
            },
            {
                strIngredient: 'Kahlua',
            },
            {
                strIngredient: 'demerara Sugar',
            },
            {
                strIngredient: 'Dubonnet Rouge',
            },
            {
                strIngredient: 'Lime juice',
            },
            {
                strIngredient: 'Irish whiskey',
            },
            {
                strIngredient: 'Apple brandy',
            },
            {
                strIngredient: 'Carbonated water',
            },
            {
                strIngredient: 'Cherry brandy',
            },
            {
                strIngredient: 'Creme de Cacao',
            },
            {
                strIngredient: 'Grenadine',
            },
            {
                strIngredient: 'Port',
            },
            {
                strIngredient: 'Coffee brandy',
            },
            {
                strIngredient: 'Red wine',
            },
            {
                strIngredient: 'Rum',
            },
        ]);
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('ingredients', null, {});
    }
};
