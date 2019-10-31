const express = require('express');
const app = express();
const route = require('./route/moviesRoute');

app.use('/filmes', route);
app.use(express.json());

module.exports = app;