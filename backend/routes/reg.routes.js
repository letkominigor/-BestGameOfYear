const regRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

regRouter.route('/')
  .post(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (user) {
      res.send('Такой  уже зарегистрирован');
    } else {
      const newUser = await User.create({
        username, password: await bcrypt.hash(password, 7),
      });
      req.session.user = newUser;
      res.send(newUser);
    }
  });

module.exports = regRouter;
