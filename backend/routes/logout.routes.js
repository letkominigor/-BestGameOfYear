const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    req.session.destroy()
    res.clearCookie('user_sid')
    res.send({succes: true})
  } catch (error) {
    res.send('error db')
  }

});

module.exports = router;
