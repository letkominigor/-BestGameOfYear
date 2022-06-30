module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      questions: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      theme_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Themes',
          key: 'id', // необязательно при дефолтном названии `id`
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Questions');
  },
};
