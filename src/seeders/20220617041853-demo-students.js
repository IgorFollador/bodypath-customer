'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [
      {
        user_id: 5,
        professional_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 6,
        professional_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 7,
        professional_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
