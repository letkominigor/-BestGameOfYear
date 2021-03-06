const authRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models/index');


// POST создать сессию (login, вход)
authRouter.post('/', async (req, res) => {
  let user;
  const { username, password } = req.body;
  try {
    user = await User.findOne({
      where: { username },
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
    res.json({ error: 'Error: password or login is incorrect' });
    return;
  }
  req.session.user = user; // Логин, создание сессии
  
  res.json({ user: req.session.user });
  
});

module.exports = authRouter;
