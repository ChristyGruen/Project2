const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}

Vote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    upVote: {
      type: DataTypes.INTEGER,
    },
    downVote: {
      type: DataTypes.INTEGER,
    },
    tipsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model:'tip',
        key: 'id'
      }
    },
    questionsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references:{
        model:'question',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vote',
  }
);

module.exports = Vote;


/* 
template from 
C:\Users\chris\Documents\bootcamp\class-lessons\13-ORM\01-Activities\22-Stu_One-to-One\Unsolved\models\Reader.js

*/