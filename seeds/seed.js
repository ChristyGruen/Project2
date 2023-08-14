const sequelize = require('../config/connection');
const { Answer, Question, Tip, User } = require('../models');

const answerData = require('./answerData.json');
const questionData = require('./questionData.json');
const tipData = require('./tipData.json');
const userData = require('./userData.json');

const tipQuizDB = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: false,
    returning: true,
  });

  const questions = await Question.bulkCreate(questionData, {
    individualHooks: false,
    returning: true,
  });

  console.log(questions)

  const tips = await Tip.bulkCreate(tipData, {
    individualHooks: true,
    returning: true,
  });


  const answers = await Answer.bulkCreate(answerData);

  process.exit(0);
};

tipQuizDB();