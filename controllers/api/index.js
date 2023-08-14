//from mini project for MVC; needs to be updated
//(quizzes, questions, tips, sign up):
const router = require("express").Router();
const userRoutes = require("./signupRoutes");
//const projectRoutes = require("./projectRoutes");

router.use("/signup", userRoutes);
//router.use("/projects", projectRoutes);

module.exports = router;
