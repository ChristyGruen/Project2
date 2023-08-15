//from mini project for MVC; needs to be updated
//(quizzes, questions, tips, sign up):
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const questionRoutes = require("./questionRoutes");
//const projectRoutes = require('./projectRoutes');

router.use("/signup", userRoutes);
<<<<<<< HEAD
//router.use("/projects", projectRoutes);
router.use("/api/tip", userRoutes);

=======
router.use("/question", questionRoutes);
//router.use('/projects', projectRoutes);
>>>>>>> fa6b7d6d8c682d9b213f016dc8fbdd300dc8a563

module.exports = router;
