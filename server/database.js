const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fec', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const roomSchema = {
  price: Number,
  cleaning: Number,
  Service: Number,
  tax: Number,
  maxGuests: Number,
  blackouts: [Date],
};

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  const Room = mongoose.model('Room', roomSchema);

  module.exports = Room;
  module.exports.db = db;
});
