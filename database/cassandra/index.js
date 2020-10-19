const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'sdc_keyspace'
});

const getBusinessReviews = function(businessId) {
  // Get all reviews from a business
  var sql = `SELECT * FROM reviews_to_business WHERE business_id = ${businessId}`;
  client.execute(sql)
    .then((result) => {
      console.log(result.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getUserReviews = function(userId) {
  // Get all reviews from a user
  var sql = `SELECT * FROM reviews_to_user WHERE user_id = ${userId}`;
  client.execute(sql)
    .then((result) => {
      console.log(result.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createReview = function(review) {
  // Create a review for a business from a user
  var businessSql = 'INSERT INTO reviews_to_business (business_id, stars, date, content, useful, funny, cool) VALUES (?, ?, ?, ?, ?, ?, ?)';
  var userSql = 'INSERT INTO reviews_to_user (user_id, stars, date, content, useful, funny, cool) VALUES (?, ?, ?, ?, ?, ?, ?)';

  client.execute(businessSql)
    .then(result => { client.execute(userSql); })
    .then(result => { console.log('Created Review!'); })
    .catch(err => { console.error(err); });
};

const updateReview = function(review) {

};

const deleteReview = function(reviewId) {
  // Delete a review (r-t-b, r-t-u, p-t-r)
  var businessSql = `DELETE * FROM reviews_to_business WHERE id = ${reviewId}`;
  var userSql = `DELETE * FROM reviews_to_user WHERE id = ${reviewId}`;
  var photoSql = `DELETE * FROM photos_to_review WHERE review_id = ${reviewId}`;

  client.execute(businessSql)
    .then(result => { client.execute(userSql); })
    .then(result => { client.execute(photoSql); })
    .then(result => { console.log('Deleted Review!'); })
    .catch(err => { console.error(err); });
};

module.exports = {
  client,
  getBusinessReviews,
  getUserReviews,
  createReview,
  updateReview,
  deleteReview
};