const express = require('express');
const app = express();

app.get('/Menu', (req, res) => {
  //initialize DB instance
  //Read MENU table from DB
  //Place into JSON string
  //Set 'res' to JSON string
});

app.post('/Checkout', (req, res) => {
  //Unwrap 'req'
  //Write to DB table "orders"
  //Send JSON of Order to KitchenDisplay
  // Set 'res' to 'Success'
});

app.listen(3000);
