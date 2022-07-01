const regRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

regRouter.route('/')
  .post(async (req, res) => {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (user) {
      res.send({isRegistration: false});
    } else {
      const newUser = await User.create({
        login, password: await bcrypt.hash(password, 7),
      });
      req.session.user = newUser;
      res.send(newUser);
    }
  });

module.exports = regRouter;
