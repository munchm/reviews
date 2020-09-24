const express = require('express');
const app = express();
const port = 5555;
const db = require('../database');


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