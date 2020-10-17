// postgres index file
const express = require('express');
const app = express();
const port = 5555;
const db = require('../database/postgres');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening to reviews server on port ${port}`);
});

// get list of reviews from business id
app.get('/api/business/:businessId/reviews', (req, res) => {

});

// get a list of reviews from user id
app.get('/api/user/:userId/reviews/', (req, res) => {

});

// create a new review for a business
app.post('/api/business/:businessId/users/:userId/review', (req, res) => {

});
