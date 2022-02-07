const express = require('express')
const app = express ()
const PORT = process.env.PORT || 3001
const db = require('./config/connection')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world')
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

db.once('open', () => {
    app.listen(PORT, ()=> console.log(`now listening on ${PORT}`))
})