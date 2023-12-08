'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Qestions',
      [
        {
          name: '1',
          description:
            "Какой актер сыграл главную роль в фильме 'Один дома', популярном новогоднем фильме 1990-х?(PS.напиши Фамилию)",
          answer: 'Калкин',
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '2',
          description:
            "В каком году был выпущен анимационный фильм 'Гринч - похититель Рождества'??",
          answer: '2000',
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '3',
          description:
            '"Йиппи кай-эй, мазафака!" - откуда взялось (PS.Имя актера)??',
          answer: 'Брюс',
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '4',
          description:
            "Сколько уже вышло этих супер новогодних фильмов 'Елки?'?",
          answer: '10',
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '5',
          description:
            "Самый популярный новогодний фильм Леонида Гайдая: '... меняет профессию'??",
          answer: 'Иван',
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: '1',
          description: 'Как называется основное новогоднее блюдо в России?',
          answer: 'Оливье',
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '4',
          description:
            'Какое дерево обычно украшается и становится центральным элементом новогоднего декора в России??',
          answer: 'Ёлка',
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '5',
          description:
            'Как называется традиционная новогодняя игра, которую часто играют на новогодних вечеринках в России???',
          answer: 'Кляп',
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: '6',
          description:
            'Какой символ часто украшает новогоднюю елку в качестве благоприятного талисмана?',
          answer: 'Звезда',
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '7',
          description:
            'В какой стране традиционно устраивают фейерверки и салюты в честь Нового года?',
          answer: 'Китай',
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '8',
          description:
            'Как называется традиционный шотландский новогодний праздник, который длится с 31 декабря по 1 января??',
          answer: 'Хогмани',
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '9',
          description:
            'Какой стихотворный праздничный напиток традиционно употребляется во многих странах мира в преддверии Нового года?',
          answer: 'Шампанское',
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '10',
          description:
            'Какое животное символизирует год 2023 по китайскому календарю??',
          answer: 'Обезьяна',
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Qestions', null, {});
  },
};
