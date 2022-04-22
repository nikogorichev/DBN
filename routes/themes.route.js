const router = require('express').Router();
const { Theme } = require('../db/models');

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const topics = await Theme.findAll({ raw: true });
  res.render('themes', { topics, userId });
  
});

module.exports = router;
