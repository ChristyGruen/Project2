const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tip extends Model {}

Tip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    topic:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    upVote: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    downVote: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'user',
        key:'id'
      }
    }

    
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: 'tip',
  }
);

module.exports = Tip;


/* 
template from 
C:\Users\chris\Documents\bootcamp\class-lessons\13-ORM\01-Activities\22-Stu_One-to-One\Unsolved\models\Reader.js

*/