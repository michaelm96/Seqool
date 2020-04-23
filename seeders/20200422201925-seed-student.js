'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Students', [
        {
          first_name: 'Al',
          last_name: 'Ace',
          gender: 'male',
          birth_day: '1990-01-01',
          grade: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          first_name: 'Bellamy',
          last_name: 'Brooks',
          gender: 'female',
          birth_day: '1991-02-02',
          grade: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          first_name: 'Cynthia',
          last_name: 'Crystal',
          gender: 'female',
          birth_day: '1999-09-01',
          grade: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          first_name: 'Dormamu',
          last_name: 'Dream',
          gender: 'male',
          birth_day: '1996-05-02',
          grade: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Students', null, {});
  }
};
