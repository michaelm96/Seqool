'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class StudentSubject extends Model {}

  StudentSubject.init({
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    Schedule: DataTypes.DATE
  }, { sequelize });

  
  StudentSubject.associate = function(models) {
    // associations can be defined here
  };
  return StudentSubject;
};