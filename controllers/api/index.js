//from mini project for MVC; needs to be updated
//(quizzes, questions, tips, sign up):
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const questionRoutes = require("./questionRoutes");
const tipRoutes = require("./tipRoutes");

router.use("/signup", userRoutes);
router.use("/question", questionRoutes);
router.use("/tips", tipRoutes);
//router.use('/projects', projectRoutes);

module.exports = router;
