const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    req.session.destroy()
    res.clearCookie('user_sid')
    res.redirect('/')
  } catch (error) {
    res.send('hueta')
  }

});

module.exports = router;
