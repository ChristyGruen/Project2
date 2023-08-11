//from mini project for MVC; needs to be updated
//(quizzes, questions, tips, sign up):
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);

module.exports = router;
