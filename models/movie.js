'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.ProductionHouse, {foreignKey: "ProdHouseId", targetKey: "id"})
      Movie.belongsToMany(models.Cast, {through: models.MovieCast, foreignKey: 'MovieId'})
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    released_year: {
      type: DataTypes.INTEGER,
      validate: {
        isNotLeapYear(year) {
          if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
            throw new Error('Tahun rilis tidak boleh tahun kabisat!')
          }
        }
      }
    },
    genre: DataTypes.STRING,
    ProdHouseId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};