const express = require('express');
const app = express();
const route = require('./route/moviesRoute');

app.use(express.json());
app.use('/filmes', route);

module.exports = app;