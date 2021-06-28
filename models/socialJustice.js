const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class socialJustice extends Model {}

socialJustice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    charity_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    focus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    description: {
      type: DataTypes.STRING,
    },
    location_headquarters: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
     },
     website: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'socialJustice',
    }
);

module.exports = socialJustice;