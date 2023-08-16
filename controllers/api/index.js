//from mini project for MVC; needs to be updated
//(quizzes, questions, tips, sign up):
const router = require("express").Router();
const userRoutes = require("./userRoutes");
//const projectRoutes = require("./projectRoutes");

//router.use("/signup", userRoutes);
router.use("/user", userRoutes);


module.exports = router;
