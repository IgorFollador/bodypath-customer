'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Professionals', [
      {
        graduatedKey: '358896',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        graduatedKey: '884562',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        graduatedKey: '145421',
        user_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Professionals', null, {});
  }
};
