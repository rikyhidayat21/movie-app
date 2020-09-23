'use strict';
const movies = require('../movies.json')
movies.forEach(movie => {
  movie.createdAt = new Date()
  movie.updatedAt = new Date()
})
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', movies, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {})
  }
};
