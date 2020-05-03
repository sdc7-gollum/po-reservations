/* eslint-disable no-console */

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/fec`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.error.bind(console, 'connection error:', err);
  });

const db = mongoose.connection;

const roomSchema = {
  id: {
    type: Number,
    index: true,
    unique: true,
  },
  reviewScore: Number,
  reviews: Number,
  price: Number,
  cleaning: Number,
  service: Number,
  tax: Number,
  maxGuests: Number,
  // blackouts: [Date],
};
const Room = mongoose.model('Room', roomSchema);

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Database connection opened!');
});

module.exports = {
  db,
  Room,
};
