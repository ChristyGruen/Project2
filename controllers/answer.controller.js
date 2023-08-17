const { Answer } = require("../models");

/*
{
  topic: 'HTML',
  content: 'Question #1',
  answer1: 'Correct answer',
  answer2: 'a',
  answer3: 'b',
  answer4: 'c',
  answerInput1: '1',
  answerInput2: '1',
  answerInput3: '1',
  answerInput4: '1'
}
*/

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
  //const newAnswer = await Answer.bulkCreate(arrOfAnswers);
  return { status: "success" };
}

module.exports = { addNewAnswers };
