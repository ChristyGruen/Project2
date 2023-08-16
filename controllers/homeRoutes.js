const router = require('express').Router();
const { Tip, Question, Answer, User } = require('../models/');

// get all posts for homepage

router.get('/', async (req, res) => {
  console.log('made it this far')
    try {
    const tipData = await Tip.findAll({
      include: [User],
    });

    const tips = tipData.map((tippy) => tippy.get({ plain: true }));
    //console.log(tips)

    res.render('homepage', { tips });
  } catch (err) {
    res.status(500).json(err);
  }

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });
  

  // try {
  //   const postData = await Post.findAll({
  //     include: [User],
  //   });

  //   const posts = postData.map((post) => post.get({ plain: true }));

  //   res.render('all-posts', { posts });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

// // get single post
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

module.exports = router;
