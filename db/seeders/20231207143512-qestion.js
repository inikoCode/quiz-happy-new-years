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
          photo: 'https://b1.filmpro.ru/c/259929.700xp.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '2',
          description:
            "В каком году был выпущен анимационный фильм 'Гринч - похититель Рождества'??",
          answer: '2000',
          theme_id: 1,
          photo:
            'https://i5.walmartimages.com/seo/The-Grinch-Who-Stole-Christmas-The-Grinch-Deluxe-Furry-Costume-Plush-84-Tall-One-Size-Fits-Most_d0c63177-52ee-440d-906c-f1a96e0d21bc.4814a16eb3d24e815b33bd53db626a3e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '3',
          description:
            '"Йиппи кай-эй, мазафака!" - откуда взялось (PS.Имя актера)??',
          answer: 'Брюс',
          theme_id: 1,
          photo:
            'https://cs12.pikabu.ru/post_img/big/2022/12/26/6/167204411517818981.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '4',
          description:
            "Сколько уже вышло этих супер новогодних фильмов 'Елки?'?",
          answer: '10',
          theme_id: 1,
          photo: 'https://aif-s3.aif.ru/images/025/970/b7cc5bd1d170af7194b1037c79d6f9ec.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '5',
          description:
            "Самый популярный новогодний фильм Леонида Гайдая: '... меняет профессию'??",
          answer: 'Иван',
          theme_id: 1,
          photo: 'https://s.rfi.fr/media/display/a18b92fa-0fdb-11ea-a6ca-005056a99247/w:1280/p:4x3/kinopoisk.ru-ivan-vasilevich-menyaet-professiyu-1537241.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: '1',
          description: 'Как называется основное новогоднее блюдо в России?',
          answer: 'Оливье',
          theme_id: 2,
          photo: 'https://memepedia.ru/wp-content/uploads/2021/12/mem-goda-768x512.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '4',
          description:
            'Какое дерево обычно украшается и становится центральным элементом новогоднего декора в России??',
          answer: 'Ёлка',
          theme_id: 2,
          photo: 'https://cs12.pikabu.ru/post_img/big/2020/12/29/6/1609230498187391066.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '5',
          description:
            'Как называется традиционная новогодняя игра, которую часто играют на новогодних вечеринках в России???',
          answer: 'Кляп',
          theme_id: 2,
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSIzYx26gmNvZD-2Xg_Rm6s94kALxKezEng&usqp=CAU',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: '6',
          description:
            'Какой символ часто украшает новогоднюю елку в качестве благоприятного талисмана?',
          answer: 'Звезда',
          theme_id: 2,
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkfrRy4YLlKMi7GtweoPGOKLfQlyDirb_Cs3y4LEoTX5eWz-Z',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '7',
          description:
            'В какой стране традиционно устраивают фейерверки и салюты в честь Нового года?',
          answer: 'Китай',
          theme_id: 2,
          photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGZq0K6WoqLs1bx5CtJGb61NSXn8lkd9q5j4I3tTO4RCW1759v',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '8',
          description:
            'Как называется традиционный шотландский новогодний праздник, который длится с 31 декабря по 1 января??',
          answer: 'Хогмани',
          theme_id: 2,
          photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTeAASTTGX3w011W68FgxOC4aBBZoNh8ZCaS_iiar9T3l4MmfaK',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '9',
          description:
            'Какой стихотворный праздничный напиток традиционно употребляется во многих странах мира в преддверии Нового года?',
          answer: 'Шампанское',
          theme_id: 2,
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP69rWTwaA025PnX-cQbUMxvO2Y6xq3gzqfbG8E-gHmlT9PY2V',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '10',
          description:
            'Какое животное символизирует год 2023 по китайскому календарю??',
          answer: 'Обезьяна',
          theme_id: 2,
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0L58_HyKY_Kb6pHR7tUjiOYPuH2BXye93g&usqp=CAU',
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
