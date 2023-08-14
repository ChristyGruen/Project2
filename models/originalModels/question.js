const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Question extends Model {}

Question.init(
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'user',
        key:'id'
      }
    },
    qnaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'qna',
        key: 'id'
      }
    }
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'question',
  }
);

module.exports = Question;


/* 
template from 
C:\Users\chris\Documents\bootcamp\class-lessons\13-ORM\01-Activities\22-Stu_One-to-One\Unsolved\models\Reader.js

*/