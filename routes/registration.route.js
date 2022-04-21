
const router = require('express').Router();

// this registration =)

router
  .get('/registration', (req, res) => {
  res.render('registration')
})
  .post(async (req , res) => {
    const { 
      nickname , 
      password,
      mail
    } = req.body;

    
   })

module.exports = router;
