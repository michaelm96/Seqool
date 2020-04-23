'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('StudentSubjects', [
        {
          StudentId: 1,
          SubjectId: 1,
          Schedule: '2020-04-23',
          createdAt: new Date(),
          updatedAt: new Date(),
          subjectCode: '1_Mtk'
        },{
          StudentId: 1,
          SubjectId: 2,
          Schedule: '2020-04-24',
          createdAt: new Date(),
          updatedAt: new Date(),
          subjectCode: '2_Fis'
        },{
          StudentId: 2,
          SubjectId: 1,
          Schedule: '2020-04-25',
          createdAt: new Date(),
          updatedAt: new Date(),
          subjectCode: '1_Mtk'
        },{
          StudentId: 2,
          SubjectId: 2,
          Schedule: '2020-04-26',
          createdAt: new Date(),
          updatedAt: new Date(),
          subjectCode: '2_Fis'
        }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('StudentSubjects', null, {});
  }
};
