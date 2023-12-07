'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Qestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
      // define association here
    }
  }
  Qestion.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      theme_id: {
        allowNull: false,
        type: DataTypes.BIGINT,
        references: {
          model: 'Themes',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Qestion',
    }
  );
  return Qestion;
};
