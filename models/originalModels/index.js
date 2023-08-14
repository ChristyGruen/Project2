const User = require('./user');
const Answer = require('./answer');
const Tip = require('./tip');
const Question = require('./question');
const Vote = require('./vote');
const QnA = require ('./qna');


////////////////User Tip
User.hasMany(Tip, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Tip.belongsTo(User,{
  foreignKey: 'userId'
});

/////////////////User Question
User.hasMany(Question, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Question.belongsTo(User,{
  foreignKey: 'userId'
});

/////////////////User Answer
User.hasMany(Answer,{
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Answer.belongsTo(User,{
  foreignKey:'userId'
});
///////////////Tip Vote
Tip.hasOne(Vote,{
  foreignKey: 'tipsId',
  onDelete:'CASCADE'
});

Vote.belongsTo(Tip,{
  foreignKey: 'tipsId',
});

///////////////Tip Vote
Question.hasOne(Vote,{
  foreignKey: 'questionId',
  onDelete:'CASCADE'
});

Vote.belongsTo(Question,{
  foreignKey: 'questionId',
});

/////////// Question QnA Answer

Question.belongsToMany(Answer,{
  through: {
    model:QnA,
    unique: false
  },
  as: "questionsAnswers"
});

Answer.belongsToMany(Question,{
  through:{
    model: QnA,
    unique: false
  },
  as: "answersQuestions"
})

module.exports = { User, Answer, Tip, Question, Vote, QnA  };