const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class QnA extends Model {}

QnA.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    abcd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    questionsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'question',
        key:'id'
      }
    },
    answersId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'answer',
        key:'id'
      }
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'qna',
  }
);

module.exports = QnA;


/* 
template from 
C:\Users\chris\Documents\bootcamp\class-lessons\13-ORM\01-Activities\22-Stu_One-to-One\Unsolved\models\Reader.js

*/