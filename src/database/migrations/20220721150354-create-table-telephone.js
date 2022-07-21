'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('telephones', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name:{
        type: Sequelize.STRING(150),
        allowNull: false
      },
      last_name:{
        type: Sequelize.STRING(150),
        allowNull: false
      },
      telephone: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      email:{
        type: Sequelize.STRING(150),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('telephones');
  }
};
