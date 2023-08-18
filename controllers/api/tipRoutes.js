const router = require("express").Router();
const { Tip, User } = require("../../models");
const { addNewTip } = require("../tip.controller");
// const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
console.log(req.body)
    try {
      const newTip = await Tip.create({
        ...req.body,
        userId: req.session.userId
      });




      res.status(200).json({ status: "success" });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });


//////////////taken from homepage single question get///////////////
router.post("/tips", async (req, res) => {
  try {
    const tipData = await Tip.Create({
      include: [{
        model: User,
        attributes: ['userName'],
      },
      { model: Tip, attirbutes: ["content", "title"]}
    ],
    });

    const newTip = tipData.get({ plain: true });
    console.log(newTip)

    res.render('homepage', { newTip });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//////////////////////////////////////////////////////////

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





// router.delete("/:id", 
// // withAuth,
// async (req, res) => {
//   try {
//     const tipData = await Tip.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!tipData) {
//       res.status(404).json({ message: "No tip found with this id!" })
//       return;
//     }
//     res.status(200).json(tipData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });














module.exports = router;




