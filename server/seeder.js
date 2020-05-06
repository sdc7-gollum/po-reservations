/* eslint-disable no-console */

require('dotenv').config();
const mongoose = require('mongoose');
const jsf = require('json-schema-faker');
const faker = require('faker');

jsf.extend('faker', () => faker); // Saved for work on the date array

const fakeSchema = {
  type: 'object',
  properties: {
    // reviewScore: {
    //   type: 'number',
    //   minimum: 1,
    //   maximum: 5,
    //   precision: 100,
    // },
    reviews: {
      type: 'integer',
      minimum: 0,
      maximum: 550,
    },
    price: {
      type: 'integer',
      minimum: 108,
      maximum: 500,
      exclusiveMaximum: true,
    },
    cleaning: {
      type: 'integer',
      minimum: 40,
      maximum: 120,
    },
    service: {
      type: 'integer',
      minimum: 107,
      maximum: 153,
    },
    tax: {
      type: 'integer',
      minimum: 0,
      maximum: 105,
    },
    maxGuests: {
      type: 'integer',
      minimum: 0,
      maximum: 8,
      exclusiveMinimum: true,
    },
    // blackouts: {
    //   type: 'array',
    //   uniqueItems: true,
    //   minItems: 4,
    //   maxItems: 25,
    //   items: {
    //     type: 'date',
    //     faker: 'date.future(1)',
    //     format: 'date',
    //     // faker: 'date.future(1)',
    //   },
    // },
    // dateTest: { /
    //   type: 'string',
    //   format: 'date',
    //   // faker: 'date.future(1)',
    // },
  },
  required: [
    'price',
    'cleaning',
    'service',
    'tax',
    'maxGuests',
    'reviews',
    // 'reviewScore',
    // 'blackouts',
  ],
};

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/fec`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.error.bind(console, 'connection error:', err);
  });

const roomSchema = {
  id: {
    type: Number,
    index: true,
    unique: true,
  },
  price: Number,
  cleaning: Number,
  service: Number,
  tax: Number,
  maxGuests: Number,
  // blackouts: [Date],
};

const Room = mongoose.model('Room', roomSchema);
const db = mongoose.connection;

const deposit = (seedData) => {
  Room.insertMany(seedData, (err) => {
    if (err) {
      console.error('Error seeding data!', err);
    }
    db.close()
      .then(() => {
        console.log('Seeding complete. Connection closed.');
      });
  });
};

const generate = (quantity) => {
  const seedPromises = [];
  for (let i = 0; i < quantity; i += 1) {
    const newSeed = () => jsf.resolve(fakeSchema);
    seedPromises.push(newSeed());
  }
  Promise.all(seedPromises)
    .then((dummyData) => {
      let counter = 1;
      return dummyData.map((item) => {
        const idItem = item;
        idItem.id = counter;
        idItem.reviewScore = (Math.random() * 4 + 1).toPrecision(3);
        counter += 1;
        return idItem;
      });
    })
    .catch((err) => {
      console.log('Promise resolution error:', err);
    });
};

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Database connection opened!');
  module.exports.db = db;
  // Wipe collection
  mongoose.connection.db.dropCollection('rooms')
    .catch((err) => {
      console.log('Error dropping collection:', err);
    })
    .finally(() => {
      generate(100)
        .then((data) => deposit(data));
    });
});

module.exports = {
  generate,
  deposit,
};
