const { Answer } = require("../models");

async function addNewAnswers(answers, idOfQuestion) {
  const arrOfAnswers = answers.map({ ...answers, questionId: idOfQuestion });

  const newAnswer = await Answer.bulkCreate(arrOfAnswers);
  return { status: "success" };
}

module.exports = { addNewAnswers };
