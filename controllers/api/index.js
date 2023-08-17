//from mini project for MVC; needs to be updated
//(quizzes, questions, tips, sign up):
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const questionRoutes = require("./questionRoutes");

router.use("/user", userRoutes);
router.use("/question", questionRoutes);

module.exports = router;
