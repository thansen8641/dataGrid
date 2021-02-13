const express = require('express')
const app = express();
// const port = 3000;
require('dotenv').config()
const path = require('path');
const bodyParser = require('body-parser')
const morgan = require('morgan')

// app.get('/', function (req, res) {
//   res.send('hello world')
// })

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(() => {
  console.log(`Portfolio listening at http://localhost:${process.env.PORT}`)
})