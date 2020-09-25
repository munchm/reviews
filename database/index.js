const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews');

let db = mongoose.connection;

const reviewSchema = mongoose.Schema({

  productId: Number,
  userName: String,
  // User_avatar: Photo
  userFriends: Number,
  userReviews: Number,
  userPhotos: Number,
  userEliteStatus: Boolean,
  reviewRating: Number,
  reviewBody: String,
  reviewDate: Date,
  reviewPhotos: Number,
  atrCool: Number,
  atrUseful: Number,
  atrFunny: Number
  // Photo1: Photo,
  // Photo2: Photo,
  // Photo3: Photo
});


const Review = mongoose.model('Review', reviewSchema);



let getReviews = (callback) => {

  Review.find({'productId': 100}, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });


};



module.exports.getReviews = getReviews;
module.exports.reviewModel = mongoose.model('Review', reviewSchema);
