'use strict';
const prodHouse = require('../production-houses.json')
prodHouse.forEach(ph => {
  ph.createdAt = new Date()
  ph.updatedAt = new Date()
})
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductionHouses', prodHouse, {})

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductionHouses', null, {})
  }
};
