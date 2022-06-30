const questionsRouter = require('express').Router();
const { Question } = require('../db/models');
const { Theme } = require('../db/models');

questionsRouter.get('/', async (req, res) => {
  const questions = await Question.findAll({
    raw: true,
  });

  const themes = await Theme.findAll({
    raw: true,
  });

  const result = {
    questions, themes
  }
  
  console.log(result);
  res.json(result);
});



module.exports = questionsRouter;
