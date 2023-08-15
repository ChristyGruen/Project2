const router = require("express").Router();
const { Question, Answer, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const questionData = await Question.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Answer,
        },
      ],
    });
    const questions = questionData.map((question) =>
      question.get({ plain: true })
    );

    res.render("question", {
      questions,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newQuestion = await Question.create({
      ...req.body,
      // topic: req.session.topic,
      // content: req.session.content,
      // upVote: req.session.upVote,
      // downVote: req.session.downVote,
      userId: req.session.userId,
    });

    res.status(200).json(newQuestion);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const questionData = await Question.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    if (!questionData) {
      res.status(404).json({ message: "No question found with this id!" });
      return;
    }

    res.status(200).json(questionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
