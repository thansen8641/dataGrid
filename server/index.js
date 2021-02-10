const express = require('express')
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`Portfolio listening at http://localhost:${port}`)
})