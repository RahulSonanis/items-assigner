import express from 'express';
import logger from 'morgan';
import path from 'path';

import routes from './routes';

const app = express();
const SERVER_PORT = process.env.PORT || 3000;

// Logger Setup
app.use(logger('dev'));

// view engine setup
app.set('views', path.join(__dirname, '../', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../', 'public')));

// parser setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Setup
app.use('/', routes());

app.listen(SERVER_PORT, () =>
  console.log(`Your server is running on port ${SERVER_PORT}`)
);
