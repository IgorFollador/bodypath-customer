'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Bernardo',
        lastName: 'Witkoski',
        email: 'bernardo@witkoski.com',
        cpf: "123.456.789-10",
        phone: "(54) 99112-2334",
        address: "Avenida Floraino Peixoto, 881 - Erechim - RS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jaisson',
        lastName: 'Bassanesi',
        email: 'jaisson@bassanesi.com',
        cpf: "109.876.543-21",
        phone: "(54) 99617-7754",
        address: "Rua Marcio Américo, 365 - Getúlio Vargas - RS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Diego',
        lastName: 'Gielda',
        email: 'diego@gielda.com',
        cpf: "166.277.001-30",
        phone: "(54) 99845-6565",
        address: "Rua Oscar Salazar, 483 - Erechim - RS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Matheus',
        lastName: 'Grigoleto',
        email: 'matheus@grigoleto.com',
        cpf: "022.644.719-55",
        phone: "(54) 99112-9611",
        address: "Avenida Paulo Cabral, 1002 - Getúlio Vargas - RS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Leonardo',
        lastName: 'Vicente',
        email: 'leonardo@vicente.com',
        cpf: "322.643.332-88",
        phone: "(54) 99412-6622",
        address: "Rua Pedro Coelho, 3032 - Erechim - RS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Bernardo',
        lastName: 'Barro',
        email: 'bernardo@barro.com',
        cpf: "232.444.749-22",
        phone: "(54) 99666-9612",
        address: "Rua Pernambuco, 6600 - Erechim - RS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Ryan',
        lastName: 'Covattis',
        email: 'ryan@covattis.com',
        cpf: "111.444.333-22",
        phone: "(54) 99776-0612",
        address: "Rua Pernambuco, 3300 - Erechim - RS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
