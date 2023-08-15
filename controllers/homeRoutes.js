const router = require('express').Router();
const { Tip, Question, Answer, User } = require('../models/');

// get all tips for homepage
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

    ///add
      try {
       const questionData = await Question.findAll({
         include: [{
          model:User,
          attributes:['userName'],},],
       });

      const questions = questionData.map((questiony) => questiony.get({ plain: true }));
      console.log(questions)

      res.render('homepage', { questions });
    ///end add
  } catch (err) {
    res.status(500).json(err);
  }
});

// // get single tip
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


// // get all questions
// router.get('/', async (req, res) => {
  
//   try {
//   const questionData = await Question.findAll({
//     include: [{
//       model:User,
//       attributes:['userName'],},],
//   });

//   const questions = questionData.map((questiony) => questiony.get({ plain: true }));
//   console.log(questions)

//   res.render('homepage', { questions });

// } catch (err) {
//   res.status(500).json(err);
// }
// });

// // get single Question
router.get('/question/:id', async (req, res) => {

try {
const questionData = await Question.findByPk(req.params.id,{
  include: [{
    model:User,
    attributes:['userName'],},
    {model:Answer,
    attributes:[],},],
});

const oneQuestion = questionData.get({plain:true});
console.log(oneQuestion)

res.render('homepage', {oneQuestion});
} catch (err) {
res.status(500).json(err);
}
});

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
