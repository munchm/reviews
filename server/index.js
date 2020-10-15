const express = require('express');
const app = express();
const port = 5555;
// const db = require('../database');
// const db = require('../database/postgres');
// const db = require('../database/cassandra')
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening to reviews server on port ${port}`);
});

// get list of reviews from restaurant id
app.get('/api/reviews/:id', (req, res) => {
  db.getReviews(req.query.text, req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(401).send();
    } else {
      res.status(200).send(data);
    }
  });
});

// get review from review id
app.get('/api/reviews/:reviewId', (req, res) => {

});

// create review to specific business
app.post('/api/reviews/:businessId', (req, res) => {

});

// update review by review id
app.patch('/api/reviews/:reviewId', (req, res) => {

});

// delete review by review id
app.delete('/api/reviews/:reviewId', (req, res) => {

});