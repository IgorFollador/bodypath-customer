'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Bernardo',
        lastName: 'Witkoski',
        email: 'bernardo@witkoski.com',
        password: '$2a$10$JlZS/tX617GHr9JM9dg9o.l/keUp1hKD9dKjFyZZzzbNkGnEBV55y',
        cpf: "123.456.789-10",
        phone: "(54) 99112-2334",
        address: "Avenida Floraino Peixoto, 881 - Erechim - RS",
        profile_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jaisson',
        lastName: 'Bassanesi',
        email: 'jaisson@bassanesi.com',
        password: '$2a$10$JlZS/tX617GHr9JM9dg9o.l/keUp1hKD9dKjFyZZzzbNkGnEBV55y',
        cpf: "109.876.543-21",
        phone: "(54) 99617-7754",
        address: "Rua Marcio Américo, 365 - Getúlio Vargas - RS",
        profile_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Diego',
        lastName: 'Gielda',
        email: 'diego@gielda.com',
        password: '$2a$10$JlZS/tX617GHr9JM9dg9o.l/keUp1hKD9dKjFyZZzzbNkGnEBV55y',
        cpf: "166.277.001-30",
        phone: "(54) 99845-6565",
        address: "Rua Oscar Salazar, 483 - Erechim - RS",
        profile_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Matheus',
        lastName: 'Grigoleto',
        email: 'matheus@grigoleto.com',
        password: '$2a$10$JlZS/tX617GHr9JM9dg9o.l/keUp1hKD9dKjFyZZzzbNkGnEBV55y',
        cpf: "022.644.719-55",
        phone: "(54) 99112-9611",
        address: "Avenida Paulo Cabral, 1002 - Getúlio Vargas - RS",
        profile_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Leonardo',
        lastName: 'Vicente',
        email: 'leonardo@vicente.com',
        password: '$2a$10$JlZS/tX617GHr9JM9dg9o.l/keUp1hKD9dKjFyZZzzbNkGnEBV55y',
        cpf: "322.643.332-88",
        phone: "(54) 99412-6622",
        address: "Rua Pedro Coelho, 3032 - Erechim - RS",
        profile_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Bernardo',
        lastName: 'Barro',
        email: 'bernardo@barro.com',
        password: '$2a$10$JlZS/tX617GHr9JM9dg9o.l/keUp1hKD9dKjFyZZzzbNkGnEBV55y',
        cpf: "232.444.749-22",
        phone: "(54) 99666-9612",
        address: "Rua Pernambuco, 6600 - Erechim - RS",
        profile_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Ryan',
        lastName: 'Covattis',
        email: 'ryan@covattis.com',
        password: '$2a$10$JlZS/tX617GHr9JM9dg9o.l/keUp1hKD9dKjFyZZzzbNkGnEBV55y',
        cpf: "111.444.333-22",
        phone: "(54) 99776-0612",
        address: "Rua Pernambuco, 3300 - Erechim - RS",
        profile_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Igor',
        lastName: 'Nutricionista',
        email: 'igor@follador.xyz',
        password: '$2a$10$JlZS/tX617GHr9JM9dg9o.l/keUp1hKD9dKjFyZZzzbNkGnEBV55y',
        cpf: "029.346.145-42",
        phone: "(54) 99671-1882",
        address: "Avenida Adão Kleber, 88 - Barão de Cotegipe - RS",
        profile_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
