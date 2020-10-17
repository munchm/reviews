/* eslint-disable camelcase */
// data generation script
const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

// get a random number
const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const businessGen = () => {
  var writer = csvWriter();
  writer.pipe(fs.createWriteStream('./database/postgres/data/business.csv'));
  for (var i = 0; i < 100; i++) {
    writer.write({
      id: i,
      name: faker.company.companyName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      is_open: faker.random.boolean(75),
      review_count: getRandomInt(100),
      stars: getRandomInt(6)
    });
  }
  writer.end();
  console.log('Business data done!');
};

const userGen = () => {
  var writer = csvWriter();
  writer.pipe(fs.createWriteStream('./database/postgres/data/users.csv'));
  for (var i = 0; i < 700; i++) {
    writer.write({
      id: i,
      name: faker.name.findName(),
      location: faker.address.city(),
      friends: getRandomInt(100),
      review_count: getRandomInt(100),
      profile_pic: `https://loremflickr.com/g/320/240/face,picture/all/?random=${getRandomInt(1000)}`,
      photo_count: getRandomInt(100),
      elite: faker.random.boolean(25)
    });
  }
  writer.end();
  console.log('User data done!');
};

const reviewGen = (database) => {
  var writer = csvWriter();
  writer.pipe(fs.createWriteStream('./database/postgres/data/reviews.csv'));
  for (var i = 0; i < 1000; i++) {
    writer.write({
      id: i,
      business_id: getRandomInt(100),
      users_id: getRandomInt(700),
      stars: getRandomInt(6),
      date: faker.date.between('2020-07-01', '2020-10-05'),
      content: faker.lorem.paragraph(),
      useful: getRandomInt(10),
      funny: getRandomInt(10),
      cool: getRandomInt(10)
    });
  }
  writer.end();
  console.log('Review data done!');
};

const photoGen = () => {
  var writer = csvWriter();
  writer.pipe(fs.createWriteStream('./database/postgres/data/photos.csv'));
  for (var i = 0; i < 3000; i++) {
    writer.write({
      id: i,
      photo_url: `https://loremflickr.com/g/320/240/food,review/all/?random=${getRandomInt(1000)}`,
      review_id: getRandomInt(1000),
      caption: faker.lorem.sentence()
    });
  }
  writer.end();
  console.log('Photo data done!');
};

const dataGen = () => {
  businessGen();
  userGen();
  reviewGen();
  photoGen();
};

dataGen();

