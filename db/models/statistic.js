'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Theme,User}) {
      
    }
  }
  Statistic.init({
    id_user: {
      type: DataTypes.INTEGER,
      references:{
        model: 'Users',
        key: 'id',
      }
    },
    id_theme: {
      type: DataTypes.INTEGER,
      references:{
        model: 'Themes',
        key: 'id',
      }
    },
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Statistic',
  });
  return Statistic;
};
