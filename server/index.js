require('dotenv').config()
const express = require('express')
const app = express();
// const port = process.env.PORT || 3000
const path = require('path');
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../client/dist/') });
});
// app.get('/About', function (req, res) {
//   res.sendFile('index.html', { root: path.join(__dirname, '../client/dist/') });
// });

// app.get('/Projects', function (req, res) {
//   res.sendFile('index.html', { root: path.join(__dirname, '../client/dist/') });
// });
// app.get('/Contact', function (req, res) {
//   res.sendFile('index.html', { root: path.join(__dirname, '../client/dist/') });
// });
app.use(bodyParser.json())


app.listen(() => {
  console.log(`Portfolio listening at http://localhost:${process.env.PORT}`)
})