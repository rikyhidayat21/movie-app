'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    fullname() {
      return `${this.first_name} ${this.last_name}`
    }

    static associate(models) {
      // define association here
      Cast.belongsToMany(models.Movie, {through: models.MovieCast, foreignKey: 'CastId'})
    }
  };
  Cast.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cast',
  });

  Cast.beforeCreate((cast, options) => {
    if (!cast.last_name) {
      cast.last_name = cast.first_name
    }
  })

  Cast.beforeUpdate((cast, options) => {
    if (!cast.last_name) {
      cast.last_name = cast.first_name
    }
  })
  
  return Cast;
};