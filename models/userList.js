const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class userList extends Model { }

userList.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
        charity_id: {
            type: DataTypes.STRING,
            allowNull: false,type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        charity_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },          
    }
);

module.exports = userList;