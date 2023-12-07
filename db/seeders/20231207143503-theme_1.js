'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          name: 'Тема: Новогодние фильмы и мультфильмы',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Традиционные обычаи нового года',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
