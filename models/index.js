const User = require("./user");
const Answer = require("./answer");
const Tip = require("./tip");
const Question = require("./question");

////////////////User Tip
User.hasMany(Tip, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Tip.belongsTo(User, {
  foreignKey: "userId",
});

/////////////////User Question
User.hasMany(Question, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Question.belongsTo(User, {
  foreignKey: "userId",
});

/////////////////Question Answer
Question.hasMany(Answer, {
  foreignKey: "questionId",
  onDelete: "CASCADE",
});

Answer.belongsTo(Question, {
  foreignKey: "questionId",
});

module.exports = { User, Answer, Tip, Question };
