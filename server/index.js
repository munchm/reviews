require('newrelic');

const express = require('express');
const db = require('../database/postgres');
const bodyParser = require('body-parser');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    // create worker
    cluster.fork();
  }
} else {
  const app = express();
  const port = 5555;
  app.use(express.static(__dirname + '/../client/dist'));

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.listen(port, () => {
    console.log(`Listening to reviews server on port ${port}`);
  });

  // get request for businesses
  app.get('/api/business/:businessId/reviews', (req, res) => {
    const businessId = req.params.businessId;
    db.getBusinessReviews(businessId, (err, data) => {
      if (err) {
        res.status(400).send('could not retrieve data');
      } else {
        res.status(200).send(data);
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
        res.status(200).send(data);
      }
    });
  });

  // get request for photos
  app.get('/api/review/:reviewId/photos', (req, res) => {
    const reviewId = req.params.reviewId;
    db.getPhotosReview(reviewId, (err, data) => {
      if (err) {
        res.status(400).send('could not retrieve data');
      } else {
        res.status(200).send(data);
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
}

cluster.on('exit', (worker, code, signal) => {
  console.log('Worker %d died with code/signal %s.', worker.process.pid, signal || code);
  cluster.fork();
});
