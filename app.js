const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Midlewares
app.use(bodyParser.json());

// Routers
app.use('/auth', require('./components/auth/router'));
app.use('/user', require('./components/user/router'));

module.exports = app;