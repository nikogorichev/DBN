'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Theme}) {
      Question.belongsTo(Theme, {foreignKey: 'id_theme' })
    }
  }
  Question.init({
    id_theme: {
      type: DataTypes.INTEGER,
      references:{
        model:'Themes',
        key: 'id',
      }
    },
    quest: DataTypes.TEXT,
    answer: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
