const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher3');

let db = mongoose.connection;
db.once('open', function() {
  console.log('we are connected');
});

module.exports = db;