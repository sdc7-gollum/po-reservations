require('dotenv').config();
const mongoose = require('mongoose');
const jsf = require('json-schema-faker');
const faker = require('faker');
/* eslint-disable no-console */
jsf.extend('faker', () => faker);

// const { db, Room } = require('./database.js');

const fakeSchema = {
  type: 'object',
  properties: {
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
    // }, I'm going to come back to make the date list work
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

const db = mongoose.connection;

const roomSchema = {
  id: {
    type: Number,
    index: true,
  },
  price: Number,
  cleaning: Number,
  service: Number,
  tax: Number,
  maxGuests: Number,
  // blackouts: [Date],
};
const Room = mongoose.model('Room', roomSchema);

const seed = () => {
  const seedPromises = [];
  for (let i = 0; i < 100; i += 1) {
    const newSeed = () => jsf.resolve(fakeSchema);
    seedPromises.push(newSeed());
  }
  Promise.all(seedPromises)
    .then((dummyData) => {
      let counter = 1;
      return dummyData.map((item) => {
        item.id = counter;
        counter += 1;
        return item;
      });
    })
    .then((seedData) => {
      const sprouts = [];
      for (let i = 0; i < 100; i += 1) {
        const pod = () => Room.create(seedData[i]);
        sprouts.push(pod());
      }
      return sprouts;
    })
    .then((sprouts) => {
      Promise.all(sprouts)
        .then(() => {
          db.close()
            .then(() => {
              console.log('Seeding complete. Connection closed.');
            });
        })
        .catch((err) => {
          db.close()
            .then(() => {
              console.log('Failed to seed:', err);
            });
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
      seed();
    })
    .then(() => {
      // Database insertion
      seed();
    });
});
