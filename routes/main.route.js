const router = require('express').Router();
const {
  User
} = require('../db/models');

// главная страница
router.route('/').get((req, res) => {
  res.render('home', {
    home: false
  });
});

// login
router
  .route('/log')
  .get((req, res) => {
    res.render('partials/log');
  })
  .post(async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    // проверочка подкатила на юзера в бд
    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      res.redirect(`/themes/${user.id}`)
      if (!user) {
        return res.render('partials/log', {
          invalidEmail: 'ошибочка',
        });
      }
    } catch (err) {
      console.log(err);
    }
  });

// регистрация

router
  .route('/registration')
  .get((req, res) => {
    res.render('partials/registration');
  })
  .post(async (req, res) => {
    const {
      login,
      email,
      password,
    } = req.body;
console.log(req.body);
    // функция для проверки уникальности юзера
    try {
      const userUniq = await User.findOne({
        where: {
          email,
        },
      });
      if (userUniq) {
        return res.render('registration', {
          invalidForm: 'ИНВАЛИДКА НАШЕ всё)',
        });
      }

      await User.create({
       login,
       email,
      password,
      });
      res.redirect('/log')
    } catch (err) {
      console.log(err);
    }
  });


// екси-т
router.get('/logout', (req, res) => {
  res.redirect('/');
});

module.exports = router;


