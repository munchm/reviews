const db = require('./index.js');
const mongoose = require('mongoose');
const faker = require('faker');
const model = require('./index.js');

mongoose.connect('mongodb://localhost/reviews');

let Review = model.reviewModel;

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
      review.save(() => {
        if(i === 100 && j === randomReviews - 1) {
          mongoose.disconnect();
        }
      });
    }
  }


};

seeder();
