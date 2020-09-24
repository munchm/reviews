const db = require('./index.js');
const mongoose = require('mongoose');
const faker = require('faker');

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


let seeder = () => {


  for (let i = 1; i <= 100; i++) {
    let randomReviews = Math.ceil(Math.random() * 10);
    for (let j = 0; j < randomReviews; j++) {
      reviewData = {
        productId: i,
        userName: faker.name.findName(),
        // User_avatar: Photo
        userFriends: Math.ceil(Math.random() * 25),
        userReviews: Math.ceil(Math.random() * 50),
        userPhotos: Math.ceil(Math.random() * 75),
        userEliteStatus: false,
        reviewRating: Math.ceil(Math.random() * 5),
        reviewBody: faker.lorem.sentences(Math.ceil(Math.random() * 8)),
        reviewDate: faker.date.past(),
        reviewPhotos: Math.ceil(Math.random() * 7),
        atrCool: Math.ceil(Math.random() * 3),
        atrUseful: Math.ceil(Math.random() * 3),
        atrFunny: Math.ceil(Math.random() * 3)
      };
      let review = new Review(reviewData);
      review.save();
    }
  }

  // for (let i = 1; i < 100; i++ ) {

  // }
};

seeder();
