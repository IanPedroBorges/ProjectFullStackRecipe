'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('drinks', {
            idDrink: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            strDrink: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            strDrinkAlternate: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            strDrinkCategory: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            strAlchoholic: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            strGlass: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            strInstructions: {
                type: Sequelize.STRING,
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

    async down (queryInterface) {
        await queryInterface.dropTable('drinks');
    }
};
