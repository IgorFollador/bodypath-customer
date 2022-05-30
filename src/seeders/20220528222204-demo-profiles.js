'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Profiles', [
      {
        descr_profile: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_profile: 'NUTRITIONIST',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_profile: 'PHYSICAL_EDUCATOR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_profile: 'STUDENT',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profiles', null, {});
  }
};
