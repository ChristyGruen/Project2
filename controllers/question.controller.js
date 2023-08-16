async function addNewQuestion(data) {
  const questionData = await Question.create({
    include: [
      {
        model: User,
        attributes: ["userName"],
      },
      { model: Question, attributes: ["content", "title"] },
    ],
  });

  return questionData;
}

module.exports = { addNewQuestion };
