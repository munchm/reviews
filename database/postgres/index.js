const { Client } = require('pg');
const config = { database: 'sdc' };
const client = new Client(config);

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected!');
  }
})

const getBusinessReviews = function(callback) {
  // Get all reviews from a business

  var sql = `SELECT * FROM reviews WHERE business_id = ${input}`;
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
  var sql = `SELECT * FROM reviews WHERE users_id = ${input}`;
  client.query(sql, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

const createReview = function(callback) {
  // Create a review for a business from a user
  var sql = ``;
  client.query(sql, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  client,
  getBusinessReviews,
  getUserReviews,
  createReview
};