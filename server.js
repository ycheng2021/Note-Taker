// express
const express = require('express');
// path
const path = require('path');
const db = require('./db/db.json')
// middleware
const { clog } = require('./middleware/clog')
// route to index
const api = require('./routes/index.js');
// port
const PORT = process.env.port || 3001;
// app
const app = express();
// middleware, "cLog"
app.use(clog);

// app.use
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// app.get
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);
app.get('/*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/api/notes/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});
app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    if (db.id === id){
        return true
    }
    return false
})


// app.listen
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
