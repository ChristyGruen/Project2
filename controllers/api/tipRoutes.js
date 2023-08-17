const router = require("express").Router();
const { Tip, User } = require("../../models");
const { addNewTip } = require("../tip.controller");
// const withAuth = require("../../utils/auth");


////////////////////////////move to homeRoutes.js///////////////////
// router.get("/", // withAuth,
//   async (req, res) => {
//     try {
//       const tipData = await Tip.findAll({
//         include: [
//           {
//             model: User,
//             // do we need to udpate all cases of userName to username
//             attirbutes: ["userName"],
//           },
//         ],
//       });

//       const tips = tipData.map((tip) =>
//         tip.get({ plain: true })
//       );
//       // katys note: home routes should use res.render(), api rout should use res.json()
//       res.render("tips", {
//         tips,
//         // logged_in: req.session.logged_in,
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
// );
////////////////////////////move to homeRoutes.js///////////////////



router.post("/", // withAuth,
  async (req, res) => {
    console.log("yoyo")
    try {

      const newTip = await Tip.create({
        ...req.body,
                    // should the second userid be user_id
        userid: req.session?.userid || 1,
      });

      res.status(200).json(newTip);
    } catch (err) {
      res.status(400).json(err);
    }
  });


//////////////taken from homepage single question get///////////////
router.post("/tip/", async (req, res) => {
  try {
    const tipData = await Tip.Create({
      include: [{
        model: User,
        attributes: ['userName'],
      },
      { model: Tip, attirbutes: ["topic", "content"]}
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
////////////////////////////////////////////////////////////

// router.post("/", // withAuth,
//   async (req, res) => {
//     try {
//       const newTip = await Tip.create({
//         ...req.body,
//         user_id: req.session.user_id,
//       });

//       res.status(200).json(newTip);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });





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
      res.status(404).json({ message: "No tip found with this id!" })
      return;
    }
    res.status(200).json(tipData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;




