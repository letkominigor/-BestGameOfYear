const questionsRouter = require('express').Router();
const { Question } = require('../db/models');
const { Answer } = require('../db/models');

questionsRouter.get('/', async (req, res) => {
  const questions = await Question.findAll({
    raw: true,
    include: [Question.Theme],
  });
  console.log(questions);
  res.json(questions);
});



module.exports = questionsRouter;
