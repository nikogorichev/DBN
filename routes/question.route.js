const router = require('express').Router();
const { Question } = require('../db/models');



router.get('/:userId/:topicId', (req, res) => {
  res.render('questions', req.params);
});

router.post('/:userId/:topicId', async (req, res) => {
  const { topicId } = req.params;
  console.log(topicId);
  const questions = await Question.findAll({ raw: true, attributes: ['quest', 'answer'], where: { id_theme: topicId } });
  console.log(questions);
  res.json(questions)
})

// router.get('/:userId/:topicId/:questId', async (req, res) => {
//   try {
//     const { topicId } = req.params;
//     const questions = await Question.findAll({ where: { id_theme: topicId } });
//     res.render('questions', {questions});
//   } catch (err) {
//     res.status(500);
//     res.json({ message: err.message });
//   }
// });

// router.get('/:topicId', async (req, res) => {
//   try {
//     const { topicId } = req.params;
//     const qa = await Question.findAll({ where: { id_theme: topicId } });
//     res.json(qa);
//   } catch (err) {
//     res.status(500);
//     res.json({ message: err.message });
//   }
// });

module.exports = router;
