const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'sdc_keyspace'
});

const getBusinessReviews = function(businessId, callback) {
  // Get all reviews from a business
  var sql = `SELECT * FROM reviews_to_business WHERE business_id = ${businessId}`;
  client.query(sql, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

const getUserReviews = function(userId, callback) {
  // Get all reviews from a user
  var sql = `SELECT * FROM reviews_to_user WHERE user_id = ${userId}`;
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
  var businessSql = 'INSERT INTO reviews_to_business (id, business_id, stars, date, content, useful, funny, cool) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  var userSql = 'INSERT INTO reviews_to_user (id, user_id, stars, date, content, useful, funny, cool) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

  client.query(businessSql, params, (err, data) => {
    if (err) {
      callback(err);
    } else {
      client.query(userSql, params, (err, data) => {
        if (err) {
          callback(err);
        } else {
          callback(null, res);
        }
      });
    }
  });
};

module.exports = {
  client,
  getBusinessReviews,
  getUserReviews,
  createReview
};