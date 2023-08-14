const router = require("express").Router();
const { Tipsquiz } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newTipsquiz = await Tipsquiz.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTipsquiz);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const tipsquizData = await Tipsquiz.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!tipsquizData) {
      res.status(404).json({ message: "No question found with this id!" });
      return;
    }

    res.status(200).json(tipsquizData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
