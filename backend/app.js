require('dotenv').config();
require('@babel/register');
const express = require('express');
const config = require('./config/config');

const questionsRouter = require('./routes/question.routes');
const authRouter = require('./routes/auth.routes');
const regRouter = require('./routes/reg.routes');
const logoutRouter = require('./routes/logout.routes');


const app = express();
config(app);

const PORT = process.env.PORT || 2500;

app.locals.count = 0;
app.use('/logout', logoutRouter);
app.use('/', questionsRouter);
app.use('/auth', authRouter);
app.use('/registrate', regRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
