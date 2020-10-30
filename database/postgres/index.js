const { Pool } = require('pg');
const config = { database: 'sdc' };
const client = new Pool(config);

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected!');
  }
});

const getBusinessReviews = function(businessId, callback) {
  // Get all reviews from a business
  var sql = `SELECT r.stars, r.date, r.content, r.useful, r.funny, r.cool FROM reviews r WHERE r.business_id = ${businessId};`;
  client.query(sql, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

const getPhotosReview = function(reviewId, callback) {
  // Get all photos for a review
  var sql = `SELECT photo_url, caption FROM photos WHERE review_id = ${reviewId}`;
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
  var sql = `SELECT r.stars, r.date, r.content, r.useful, r.funny, r.cool FROM reviews r WHERE r.users_id = ${userId};`;
  client.query(sql, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

const createReview = function(review, callback) {
  // Create a review for a business from a user
  var sql = `INSERT INTO reviews (business_id, users_id, stars, date, content, useful, funny, cool) VALUES (${review.businessId}, ${review.userId}, ${review.stars}, ${review.date}, ${review.content}, ${review.useful}, ${review.funny}, ${review.cool});`;
  client.query(sql, (err, data) => {
    if (err) {
      console.log('ERROR:', err);
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
  createReview,
};