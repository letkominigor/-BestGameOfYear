module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Themes', [
      {
        title: 'Эльбрус',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Кино',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Алкоголь',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('Questions', [
      {
        description: 'Чья разогретая колбаса не понравилась Лейле?',
        answer: "Санина",
        point: 100,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Кто спит на всех лекциях?',
        answer: "Саня",
        point: 200,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Кто больше всего бесит Колю и не только его?',
        answer: "Саня",
        point: 400,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Кто получил легендарное спасибо?',
        answer: "Саня",
        point: 800,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Кто является "Колбасным королём"?',
        answer: "Саня",
        point: 1000,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        description: 'Кому принадлежал тот самый кот из «Крестного отца»?',
        answer: "никому",
        point: 100,
        theme_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Какого цвета полосатый свитер Фредди Крюгера?',
        answer: "красно-зеленого",
        point: 200,
        theme_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Кто на самом деле рисовал Розу в «Титанике»?',
        answer: "Кэмерон",
        point: 400,
        theme_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Сколько оставалось жить тем, кто смотрел проклятую видеокассету в «Звонке»?',
        answer: "7 дней",
        point: 800,
        theme_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Звуки спаривания каких животных были звуком общения велоцирапторов в «Парке Юрского периода»?',
        answer: "черепах",
        point: 1000,
        theme_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        description: 'Какой крепкий алкогольный напиток добавляется в классический коктейль Мохито?',
        answer: "Ром",
        point: 100,
        theme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Коктейль "Секс на пляже" обрёл всемирную популярность после его частого появления именно в этом сериале',
        answer: "Санта Барбара",
        point: 200,
        theme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Алкоголь — это...',
        answer: "седатив",
        point: 400,
        theme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Сколько алкоголя обычно содержится в вине?',
        answer: "12%",
        point: 800,
        theme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Что такое кальвадос?',
        answer: "яблочный бренди",
        point: 1000,
        theme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes');
    await queryInterface.bulkDelete('Questions');
  },
};
