const questionsRouter = require('express').Router();
const { Question } = require('../db/models');
const { Answer } = require('../db/models');

questionsRouter.get('/', async (req, res) => {
  const questions = await Question.findAll();
  const answers = await Answer.findAll();
  const result = questions.map(q => ({
    id: q.id,
    questions: q.questions,
    theme_id: q.theme_id,
    variants: answers.filter(x => x.question_id === q.id),
  }));
  // for (let i = 0; i < questions.length; i++) {
  //   const q = questions[i];
  //   questions[i].variants = answers.filter(x => x.question_id === q.id);
  // }
  //const answer = await Answer.findAll()

  //res.json({answers: answer})
  res.json({questions: result});
});



module.exports = questionsRouter;
