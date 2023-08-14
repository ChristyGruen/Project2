const router = require('express').Router();
const { Tip, Question, Answer, User } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  
    try {
    const tipData = await Tip.findAll({
      include: [{
        model:User,
        attributes:['userName'],},],
    });

    const tips = tipData.map((tippy) => tippy.get({ plain: true }));
    console.log(tips)

    res.render('homepage', { tips });
  } catch (err) {
    res.status(500).json(err);
  }
});

// // get single post
router.get('/tip/:id', async (req, res) => {
  
  try {
  const tipData = await Tip.findByPk(req.params.id,{
    include: [{
      model:User,
      attributes:['userName'],},],
  });

  const oneTip = tipData.get({plain:true});
  console.log(oneTip)

  res.render('homepage', {oneTip});
} catch (err) {
  res.status(500).json(err);
}
});
// router.get('/post/:id', async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         User,
//         {
//           model: Comment,
//           include: [User],
//         },
//       ],
//     });

//     if (postData) {
//       const post = postData.get({ plain: true });

//       res.render('single-post', { post });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

// router.get('/signup', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('signup');
// });

module.exports = router;
