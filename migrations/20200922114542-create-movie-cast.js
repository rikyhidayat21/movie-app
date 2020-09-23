'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MovieCasts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING
      },
      MovieId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Movies",
          key: "id"
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      CastId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Casts",
          key: "id"
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MovieCasts');
  }
};