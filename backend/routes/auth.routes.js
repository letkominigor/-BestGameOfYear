const authRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models/');


// POST создать сессию (login, вход)
authRouter.post('/', async (req, res) => {
  let user;
  const { login, password } = req.body;
  try {
    user = await User.findOne({
      where: { login },
    });
  } catch (error) {
    res.json({ error: 'Server error' });
    return;
  }

  if (!user) {
    res.json({ error: 'Error: user does not exist. You should register first.' });
    return;
  }

  let isSame;
  try {
    isSame = await bcrypt.compare(password, user.password);
  } catch (error) {
    res.json({ error: 'Server error 2' });
    return;
  }

  if (!isSame) {
    res.send({islogin: false});
    return;
  }
  req.session.user = user; // Логин, создание сессии
  
  res.send(user);
  
});

module.exports = authRouter;
