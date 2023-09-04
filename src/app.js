const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const { helmet } = require('helmet');
const app = express();

// init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

//init db

//init routes

module.exports = app;
