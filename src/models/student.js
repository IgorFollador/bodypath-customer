'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsTo(models.Users, {
        foreignKey: 'user_id'
      });
      Student.belongsTo(models.Professionals, {
        foreignKey: 'professional_id'
      });
    }
  }
  Student.init({
    // atributes 
  }, {
    sequelize,
    modelName: 'Students',
  });
  return Student;
};