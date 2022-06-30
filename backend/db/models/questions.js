const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme }) {
      Question.belongsTo(Theme, { foreignKey: 'theme_id' });
    }
  }
  Question.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    questions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    theme_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Games',
        key: 'id', // необязательно при дефолтном названии `id`
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'Questions',
  });
  return Question;
};
