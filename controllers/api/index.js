//from mini project for MVC; needs to be updated
//(quizzes, questions, tips, sign up):
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const questionRoutes = require("./questionRoutes");
const tipRoutes = require("./tipRoutes");

<<<<<<< HEAD
router.use("/signup", userRoutes);
router.use("/question", questionRoutes);
router.use("/tips", tipRoutes);
//router.use('/projects', projectRoutes);
=======
router.use("/user", userRoutes);
router.use("/question", questionRoutes);
>>>>>>> 4f748d3117338f4c678b13d57bcaae042abfb638

module.exports = router;
