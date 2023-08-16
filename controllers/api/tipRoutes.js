const router = require("express").Router();
const { Tip, User } = require("../../models");
// const withAuth = require("../../utils/auth");

router.get("/", // withAuth,
  async (req, res) => {
    try {
      const tipData = await Tip.findAll({
        include: [
          {
            model: User,
            attirbutes: ["userName"],
          },
        ],
      });

      const tips = tipData.map((tip) =>
        tip.get({ plain: true })
      );
      // katys note: home routes should use res.render(), api rout should use res.json()
      res.render("tips", {
        tips,
        // logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

router.post("/", // withAuth,
  async (req, res) => {
    try {
      const newTip = await Tip.create({
        ...req.body,
        user_id: req.session.user_id,
      });

      res.status(200).json(newTip);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.delete("/:id", 
// withAuth,
async (req, res) => {
  try {
    const tipData = await Tip.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!tipData) {
      res.status(404).json({ message: "No tip found wit this id!" })
      return;
    }
    res.status(200).json(tipData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;




