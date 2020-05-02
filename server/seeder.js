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

module.exports = fakeSchema;
