//from mini project for MVC; needs to be updated
//(quizzes, questions, tips, sign up):
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const questionRoutes = require("./questionRoutes");
//const projectRoutes = require('./projectRoutes');

router.use("/signup", userRoutes);
router.use("questions", questionRoutes);
//router.use('/projects', projectRoutes);

module.exports = router;
