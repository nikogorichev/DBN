const router = require('express').Router();
const {
  Theme,
} = require('../db/models');

router.get('/:userId', async (req, res) => {
  try {
    const {
      userId,
    } = req.params;
    const topics = await Theme.findAll({
      raw: true,
      attributes: ['id', 'title'],
    });
    res.render('themes', {
      topics,
      userId,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
