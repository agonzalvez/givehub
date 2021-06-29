const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mhealth extends Model {}

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
        focus: {
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
        phone: {
            type: DataTypes.INTEGER, 
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
            type: DataTypes.STRING,//website link to donate 
        },
        user_id: {
            type: DataTypes.INTEGER,
            refrences: {
               model: 'Mhealth',
               key: 'id',
            },
        }
},
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'mentalhealth',
    }
);

module.exports = Mhealth;


