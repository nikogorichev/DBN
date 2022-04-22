'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Statistic,Theme}) {
      
      User.belongsToMany(Theme, { through: Statistic, foreignKey: 'id_user'})
    }
  }
  User.init({
    nickname: DataTypes.TEXT,
    password: DataTypes.TEXT,
    mail: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
