'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Student extends Model {

    fullName(){
      return this.first_name + " " + this.last_name
    }
  }

  Student.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birth_day: DataTypes.DATEONLY,
    grade: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, { sequelize });


  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsToMany(models.Subject, { through: models.StudentSubject })
  };
  return Student;
};