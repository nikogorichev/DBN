'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Question}) {
      Theme.belongsToMany(User, { through: Statistic, foreignKey: 'id_theme'})
      Theme.hasMany(Question, {foreignKey: 'id_theme' })
    }
  }
  Theme.init({
    title: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};
