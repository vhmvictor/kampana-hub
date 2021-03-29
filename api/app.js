const express = require('express');
const app = express();
const path = require('path');
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

dotenv.config();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

app.listen(process.env.URL_PORT || 3000, () => {
  console.log('Express - API listening on port ' + process.env.URL_PORT || 3000 + '!');
});

module.exports = app;
