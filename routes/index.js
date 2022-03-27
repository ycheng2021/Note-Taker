// express
const express = require('express');
// note route
const noteRouter = require('./notes');
// app
const app = express();
// app.use
// initialize notes route
app.use('/notes', noteRouter);
// module exports
module.exports = app;