const { Answer } = require("../models");

async function addNewAnswers(answers, idOfQuestion) {
  console.log(answers);
  let answersArr = [];

  for (let i = 1; i <= 4; i++) {
    let content, isCorrect;
    const contentKey = `answer${i}`;
    const correctKey = `answerInput${i}`;
    content = answers[contentKey];
    isCorrect = answers[correctKey] === "1";
    answersArr.push({
      content: content,
      correct: isCorrect,
      questionId: idOfQuestion,
    });
  }

  console.log(answersArr);
  const newAnswer = await Answer.bulkCreate(answersArr);
  return { status: "success" };
}

module.exports = { addNewAnswers };
