const router = require('express').Router();
const { Question } = require('../db/models');

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.render('questions');
});

router.get('/questions/:id', async (req, res) => {
  const questionsArr = await Question.findAll({
    raw: true,
    where: { id_theme: req.params.id },
    attributes: ['quest', 'answer', 'id'],
  });
  res.send({ questionsArr });
});

module.exports = router;
