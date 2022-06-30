const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Game }) {
      Theme.belongsTo(Game, { foreignKey: 'game_id' });
    }
  }
  Theme.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    modelName: 'Theme',
    tableName: 'Themes',
  });
  return Theme;
};
