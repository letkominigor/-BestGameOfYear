const regRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

regRouter.route('/')
  .put(async (req, res) => {
    const { score, login } = req.body;
    const user = await User.findOne({ where: { login } });
    user.scores += score;
    user.save();
    if (user) {
      res.send({ok: true});
    } else {
      res.send({ok: false});
    }
  });

module.exports = regRouter;