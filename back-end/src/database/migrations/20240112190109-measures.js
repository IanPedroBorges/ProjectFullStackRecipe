'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('measures', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            strMeasure: {
                type: Sequelize.STRING,
                allowNull: true,
            },
        }, 
        {
            timestamps: false,
        });
    },

    // eslint-disable-next-line no-unused-vars
    async down (queryInterface, sequelize) {
        await queryInterface.dropTable('measures');
    }
};
