const express = require('express');
const app = express();
const port = 5555;
const db = require('../database');
var AWS = require('aws-sdk');


AWS.config.loadFromPath('./config.json');

// Create S3 service object
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket: 'photoreviews',
};

s3.listObjects(bucketParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Contents);
    console.log(data.Contents.length);
  }
});

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`Listening to reviews server on port ${port}`);

});


app.get('/api/reviews', (req, res) => {

  db.getReviews((err, data) => {
    if (err) {
      console.log(err);
      res.status(401).send();
    } else {
      res.status(200).send(data);
    }

  });


});