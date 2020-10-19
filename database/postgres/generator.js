/* eslint-disable camelcase */
// data generation script
const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

// generate fake data to pick from using faker
const randomParagraph = [];
const randomCaption = [];
const randomAddress = [];
const randomCity = [];
const randomState = [];
const randomDate = [];
const randomName = [];
for (let i = 0; i < 1000; i++) {
  randomParagraph.push(faker.lorem.paragraph());
  randomCaption.push(faker.lorem.sentence());
  randomAddress.push(faker.address.streetAddress());
  randomCity.push(faker.address.city());
  randomState.push(faker.address.state());
  randomDate.push(faker.date.between('2020-07-01', '2020-10-05'));
  randomName.push(faker.name.findName());
}


// get a random number
const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const businessGen = () => {
  var writer = csvWriter();
  writer.pipe(fs.createWriteStream('./database/postgres/data/business.csv'));
  for (var i = 0; i < 1000000; i++) {
    writer.write({
      id: i,
      name: faker.company.companyName(),
      address: randomAddress[Math.floor(Math.random() * 1000)],
      city: randomCity[Math.floor(Math.random() * 1000)],
      state: randomState[Math.floor(Math.random() * 1000)],
      is_open: Math.random() >= 0.2,
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
  for (var i = 0; i < 7000000; i++) {
    writer.write({
      id: i,
      name: randomName[Math.floor(Math.random() * 1000)],
      location: randomCity[Math.floor(Math.random() * 1000)],
      friends: getRandomInt(100),
      review_count: getRandomInt(100),
      profile_pic: `https://loremflickr.com/g/320/240/face,picture/all/?random=${getRandomInt(1000)}`,
      photo_count: getRandomInt(100),
      elite: Math.random() >= 0.5
    });
  }
  writer.end();
  console.log('User data done!');
};

const reviewGen = () => {
  var writer = csvWriter();
  writer.pipe(fs.createWriteStream('./database/postgres/data/reviews.csv'));
  for (var i = 0; i < 10000000; i++) {
    writer.write({
      id: i,
      business_id: getRandomInt(100),
      users_id: getRandomInt(700),
      stars: getRandomInt(6),
      date: randomDate[Math.floor(Math.random() * 1000)],
      content: randomParagraph[Math.floor(Math.random() * 1000)],
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
  for (var i = 0; i < 30000000; i++) {
    writer.write({
      id: i,
      photo_url: `https://loremflickr.com/g/320/240/food,review/all/?random=${getRandomInt(1000)}`,
      review_id: getRandomInt(1000),
      caption: randomCaption[Math.floor(Math.random() * 1000)]
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

