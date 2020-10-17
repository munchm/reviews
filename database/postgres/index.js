const { Client } = require('pg');
const config = { database: 'sdc' };
const client = new Client(config);

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected!');
  }
});

const getBusinessReviews = function(callback) {
  // Get all reviews from a business

  var sql = `SELECT reviews.id, stars, date, content, useful, funny, cool, photo_url FROM reviews INNER JOIN photos ON reviews.id = photos.review_id WHERE business_id = ${input}`;
  client.query(sql, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

const getUserReviews = function(callback) {
  // Get all reviews from a user
  var sql = `SELECT reviews.id, stars, date, content, useful, funny, cool, photo_url FROM reviews INNER JOIN photos ON reviews.id = photos.review_id WHERE user_id = ${input}`;
  client.query(sql, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

const createReview = function(params, callback) {
  // Create a review for a business from a user
  var sql = 'INSERT INTO reviews (id, business_id, users_id, stars, date, content, useful, funny, cool) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  client.query(sql, params, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  client,
  getBusinessReviews,
  getUserReviews,
  createReview
};