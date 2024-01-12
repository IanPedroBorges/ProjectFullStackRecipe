'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('ingredients', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            strIngredient: {
                type: Sequelize.STRING,
                allowNull: true,
            },
        }, {
            timestamps: false,
        });
    },

    async down (queryInterface) {
        await queryInterface.dropTable('ingredients');
    }
};
