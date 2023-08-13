const sequelize = require('../config/connection');
const { Answer, QnA, Question, Tip, User, Vote } = require('../models');

const answerData = require('./answerData.json');
const qnaData = require('./qnaData.json');
const questionData = require('./questionData.json');
const tipData = require('./tipData.json');
const userData = require('./userData.json');
const voteData = require('./voteData.json');

const tipQuizDB = async () => {
  await sequelize.sync({ force: true });

  const answers = await Answer.bulkCreate(answerData, {
    individualHooks: false,
    returning: true,
  });

  const qnas = await QnA.bulkCreate(qnaData, {
    individualHooks: false,
    returning: true,
  });

  const questions = await Question.bulkCreate(questionData, {
    individualHooks: false,
    returning: true,
  });

  const tips = await Tip.bulkCreate(tipData, {
    individualHooks: true,
    returning: true,
  });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const vote = await Vote.bulkCreate(voteData, {
    individualHooks: false,
    returning: true,
  });

  process.exit(0);
};

tipQuizDB();