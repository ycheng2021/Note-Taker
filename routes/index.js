// express
const express = require('express');
// db route
const noteRouter = require('./notes');
const idRouter = require('./id');
// app
const app = express();
// app.use
app.use('/notes', noteRouter);
app.use('/notes/:id', idRouter);
// module exports
module.exports = app;