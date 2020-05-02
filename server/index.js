/* eslint-disable no-console */

require('dotenv').config();
const path = require('path');
const express = require('express');
const { Room } = require('./database.js');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded());


app.route('/api/room/:id') // /:id
  .get((req, res) => {
    // database retrieval goes here
    // placeholder:
    console.log('ID:', req.params.id);
    Room.find({ id: req.params.id }, (err, record) => {
      if (err) {
        console.log('Retrieval error:', err);
        res.sendStatus(500);
      }
      res.status(200).send(record);
    });
  })
  .post((req, res) => {
    // database insertion goes here
    // placeholder:
    res.sendStatus(201);
  });

app.listen(process.env.PORT, () => console.log(`Reservation listening at http://${process.env.HOST}:${process.env.PORT}`));
