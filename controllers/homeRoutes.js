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

    res.render('homepage', { tips , loggedIn});
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
  

});

module.exports = router;
