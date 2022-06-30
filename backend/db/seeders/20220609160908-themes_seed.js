module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Themes', [
      {
        title: 'IT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cinema',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Animals',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('Questions', [
      {
        description: 'Как вывести что-то в консоль?',
        answer: "Console.log()",
        point: 100,
        theme_id: 1,
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
