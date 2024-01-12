'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('drinks_ingredients_measures', {
            idDrink: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'drinks',
                    key: 'idDrink',
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

    async down (queryInterface) {
        await queryInterface.dropTable('drinks_ingredients_measures');
    }
};
