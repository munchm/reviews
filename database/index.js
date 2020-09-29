const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews');

let db = mongoose.connection;

const reviewSchema = mongoose.Schema({

  productId: Number,
  userName: String,
  userAvatar: String,
  userLocation: String,
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
  // photo1: Photo,
  // Photo2: Photo,
  // Photo3: Photo
});


const Review = mongoose.model('Review', reviewSchema);



let getReviews = (id, callback) => {

  Review.find({ 'productId': id }, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });


};



module.exports.getReviews = getReviews;
module.exports.reviewModel = mongoose.model('Review', reviewSchema);
