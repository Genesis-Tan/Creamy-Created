const express = require('express');
const app = express();

app.get('/Menu', (req, res) => {
  //fetch db info
  console.log('Burger');
});

app.listen(3000);
