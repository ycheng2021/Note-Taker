// express
const express = require('express');
// db route
const noteRouter = require('./notes');
// app
const app = express();
// app.use
app.use('/notes', noteRouter);
// module exports
module.exports = app;