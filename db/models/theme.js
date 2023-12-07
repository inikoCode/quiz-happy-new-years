'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Qestion, User }) {
      this.hasMany(Qestion, { foreignKey: 'theme_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });

      // define association here
    }
  }
  Theme.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.BIGINT,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Theme',
    }
  );
  return Theme;
};
