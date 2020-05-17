/* eslint-disable no-console */

require('dotenv').config();
const path = require('path');
const express = require('express');
const { Room } = require('./database.js');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded());

app.route('/api/room/:id')
  .get((req, res) => {
    Room.findOne({ id: req.params.id }, (err, record) => {
      if (err) {
        // console.log('Retrieval error:', err);
        res.sendStatus(500);
      }
      res.status(200).send(record);
    });
  });

// app.listen(process.env.PORT, () => console.log(`Reservation listening at http://${process.env.HOST}:${process.env.PORT}`));
app.listen(process.env.PORT);
