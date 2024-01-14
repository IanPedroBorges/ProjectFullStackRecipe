'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('meals', {
            idMeal: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            strMeal: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            strDrinkAlternate: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            strCategory: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            strArea: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            strInstructions: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            strMealThumb: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            strTags: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            strYoutube: {
                type: Sequelize.STRING,
                allowNull: true,
            },
        }, {
            timestamps: false,
        });
    },

    // eslint-disable-next-line no-unused-vars
    async down (queryInterface, sequelize) {
        await queryInterface.dropTable('meals');
    }
};
