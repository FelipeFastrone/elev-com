/* eslint-disable no-undef */

const express = require('express');
const {resolve} = require('path')
const port = process.env.PORT || 5000;
const app = express();

app.use('/', express.static(
     resolve(
      __dirname, './dist'
     )
  ))
app.listen(port, (err) => {
  if (err){return console.log(err)}
  console.log("Tudo ok")
});
