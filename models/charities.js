const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Charities extends Model { }

Charities.init(
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
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING(5000),
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        donation: {
            type: DataTypes.STRING(5000),
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Charities',
    }
);

    
module.exports = Charities;
