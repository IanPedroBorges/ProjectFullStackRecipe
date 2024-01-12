'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('measures', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            strMeasure: {
                type: Sequelize.STRING,
                allowNull: true,
            },
        });
    },

    async down (queryInterface) {
        await queryInterface.dropTable('measures');
    }
};
