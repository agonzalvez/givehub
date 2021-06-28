const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Women extends Model {}

Mhealth.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        charity_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hq_location: {
            type: DataTypes.STRING,//this includes adress so needs int type too?
            allowNull: false
        },
        contactperson: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER, //format phonenumber
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false
        },
        donation: {
            type: DataTypes.INTEGER,
        },
},
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
    }
);

module.exports = Women;


