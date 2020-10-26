require('newrelic');
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

// legacy request
app.get('/api/reviews/:id', (req, res) => {
  db.getReviews(req.query.text, req.params.id, (err, data) => {
    if (err) {
      res.status(401).send();
    } else {
      res.status(200).send(data);
    }
  });
});

// get request for businesses
app.get('/api/business/:businessId/reviews', (req, res) => {
  const businessId = req.params.businessId;
  db.getBusinessReviews(businessId, (err, data) => {
    if (err) {
      res.status(400).send('could not retrieve data');
    } else {
      res.status(200).send(data.rows);
    }
  });
});

// get request for users
app.get('/api/user/:userId/reviews', (req, res) => {
  const userId = req.params.userId;
  db.getUserReviews(userId, (err, data) => {
    if (err) {
      res.status(400).send('could not retrieve data');
    } else {
      res.status(200).send(data.rows);
    }
  });
});

// post request for creating reviews
app.post('/api/business/:businessId/users/:userId/review', (req, res) => {
  const review = req.body;
  review.userId = req.params.userId;
  review.businessId = req.params.businessId;
  db.createReview(review, (err, data) => {
    if (err) {
      res.status(400).send('could not retrieve data');
    } else {
      res.status(201).send('review added');
    }
  });
});

app.get('/test', (req, res) => {
  res.status(200).send('Test');
});