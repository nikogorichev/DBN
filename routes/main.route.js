const router = require("express").Router();
const { User } = require("../db/models");

// главная страница
router.route("/").get((req, res) => {
  res.render("home", { home: false });
});
// login
router
  .route("/log")
  .get((req, res) => {
    res.render("partials/log");
  })
  .post(async (req, res) => {
    const { password, mail } = req.body;
    // проверочка подкатила на юзера в бд
    try {
      const user = await User.findOne({
        where: {
          mail,
        },
      });
      if (!user) {
        return res.render("partials/log", {
          invalidMail: "ошибочка",
        });
      }
    } catch (err) {
      console.log(err);
    }
  });

// регистрация

router
  .route("/registration")
  .get((req, res) => {
    res.render("partials/registration");
  })
  .post(async (req, res) => {
    const { nickname, password, mail } = req.body;

    // функция для проверки уникальности юзера
    try {
      const userUniq = await User.findOne({
        where: {
          mail,
        },
      });
      if (userUniq) {
        return res.render("registration", {
          invalidForm: "систему не одурачить",
        });
      }
    } catch (err) {
      console.log(err);
    }
  });

// ексит
router.get("/logout", (req, res) => {
  res.redirect("/");
});
module.exports = router;
