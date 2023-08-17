const router = require("express").Router();
const { Question, Answer, User } = require("../../models");
const { addNewAnswers } = require("../answer.controller");
const { addNewQuestion } = require("../question.controller");
//const withAuth = require("../../utils/auth");

// Question Post Route

router.post("/", async (req, res) => {
  console.log("HELP!!!!!");
  try {
    const newQuestion = await Question.create({
      ...req.body,
      userId: req.session?.userId || 1,
    });

    const populateAnswers = await addNewAnswers(
      req.body.answers,
      newQuestion.id
    );

    res.status(200).json(newQuestion);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/question", async (req, res) => {
  // const questionData = await addNewQuestion(req.body)

  try {
    const questionData = await Question.Create({
      include: [
        {
          model: User,
          attributes: ["userName"],
        },
        { model: Question, attributes: ["content", "title"] },
      ],
    });

    const newQuestion = questionData.get({ plain: true });
    console.log(newQuestion);

    res.render("homepage", { newQuestion });
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.post("/", withAuth, async (req, res) => {
//   try {
//     const newQuestion = await Question.create({
//       ...req.body,
//       // topic: req.session.topic,
//       // content: req.session.content,
//       // upVote: req.session.upVote,
//       // downVote: req.session.downVote,
//       userId: req.session.userId,
//     });

//     res.status(200).json(newQuestion);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;
