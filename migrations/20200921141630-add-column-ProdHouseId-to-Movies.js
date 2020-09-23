'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Movies', // name of Source model
      'ProdHouseId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'ProductionHouses', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Movies', // name of Source model
      'ProdHouseId' // key we want to remove
    );
  }
};
