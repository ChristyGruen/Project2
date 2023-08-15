const router = require("express").Router();
const { Question } = require("../../models");
const withAuth = require("../../utils/auth");

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
