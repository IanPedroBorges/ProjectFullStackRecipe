'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('drinks', {
            idDrink: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            strDrink: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            strDrinkAlternate: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            strCategory: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            strAlcoholic: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            strGlass: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            strInstructions: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            strDrinkThumb: {
                type: Sequelize.STRING,
                allowNull: true,
            },
        }, {
            timestamps: false,
        });
    },

    // eslint-disable-next-line no-unused-vars
    async down (queryInterface, sequelize) {
        await queryInterface.dropTable('drinks');
    }
};
