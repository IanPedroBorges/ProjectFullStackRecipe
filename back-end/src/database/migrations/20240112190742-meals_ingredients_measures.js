'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('meals_ingredients_measures', {
            idMeal: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'meals',
                    key: 'idMeal',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            idIngredient: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'ingredients',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            idMeasure: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'measures',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
        }, {
            timestamps: false,
        });
    },

    // eslint-disable-next-line no-unused-vars
    async down (queryInterface, sequelize) {
        await queryInterface.dropTable('meals_ingredients_measures');
    }
};
