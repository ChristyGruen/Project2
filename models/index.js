const User = require("./User");
const Answer = require("./Answer");
const Tip = require("./Tip");
const Question = require("./Question");

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
