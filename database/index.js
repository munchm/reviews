const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews');




let db = mongoose.connection;
// db.once('open', function () {
//   console.log('Connected db');
// });

