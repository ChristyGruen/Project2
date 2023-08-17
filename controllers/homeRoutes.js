const router = require("express").Router();
const { Tip, Question, Answer, User } = require("../models");

// get all tips for homepage
router.get("/", async (req, res) => {
  let tips, questions;

  try {
    const tipData = await Tip.findAll({
      include: [
        {
          model: User,
          attributes: ["userName"],
        },
      ],
    });
    tips = tipData.map((tippy) => tippy.get({ plain: true }));
  } catch (err) {
    res.status(500).json(err);
  }

  try {
    const questionData = await Question.findAll({
      include: [
        { model: User },
        {
          model: Answer,
          attributes: ["content"],
        },
      ],
    });
    questions = questionData.map((questiony) => questiony.get({ plain: true }));
  } catch (err) {
    res.status(500).json(err);
  }

  res.render("homepage", { tips, questions });
});

// // get single tip
// router.get("/tip/:id", async (req, res) => {
//   try {
//     const tipData = await Tip.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ["userName"],
//         },
//       ],
//     });

//     const oneTip = tipData.get({ plain: true });
//     console.log(oneTip);

//     res.render("homepage", { oneTip });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // // get single Question
// router.get("/question/:id", async (req, res) => {
//   try {
//     const questionData = await Question.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ["userName"],
//         },
//         { model: Answer, attributes: ["content"] },
//       ],
//     });

//     const oneQuestion = questionData.get({ plain: true });
//     console.log(oneQuestion);

//     res.render("homepage", { oneQuestion });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// "/notes" responds with the notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get(
  "/question",
  // withAuth,
  async (req, res) => {
    try {
      const questionData = await Question.findAll({
        include: [
          {
            model: User,
            attributes: ["userName"],
          },
        ],
        // include: [
        //   {
        //     model: User,
        //   },
        //   {
        //     model: Answer,
        //   },
        // ],
      });
      const questions = questionData.map((question) =>
        question.get({ plain: true })
      );

      res.render("question", {
        questions,
        //logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = router;