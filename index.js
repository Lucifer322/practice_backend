require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const controllers = require('./controllers');
const { db } = require('./database');
const cors = require('cors');
const middlewares = require('./middlewares');

db.once('open', () => {
  app.listen(process.env.PORT, () => {
    console.log('Server in running');
  });
});

app.use(
  cors({
    'Access-Control-Allow-Origin': '*',
  })
);

app.use(express.json());

app.route('/users').get(controllers.users.getUsersForTable);

app.route('/cvs').get(controllers.cvs.getCvs).post(controllers.cvs.addNewCv);

app.get('/', (req, res) => {
  res.redirect('/users');
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use(middlewares.errorHandler);
