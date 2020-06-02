/* eslint-disable no-console */

require('newrelic');
require('dotenv').config();
const path = require('path');
const express = require('express');
const { Room } = require('./database/database.js');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded());

app.route('/api/room/:id')
  .get((req, res) => {
    Room.get(Number(req.params.id), (err, record) => {
      if (err) {
        console.log('Retrieval error:', err);
        res.sendStatus(500);
      }
      res.status(200).send(record.rows[0]);
    });
  })
  .post((req, res) => {
    const room = new Room(req.body);
    room.save((err) => {
      if (err) {
        // console.log('Post error:', err);
        res.sendStatus(500);
      }
      res.status(201).end();
    });
  })
  .put((req, res) => {
    Room.updateOne({ id: req.params.id }, (err, record) => {
      if (err) {
        // console.log('Update error:', err);
        res.sendStatus(500);
      }
      res.status(200).send(record);
    });
  })
  .delete((req, res) => {
    Room.deleteOne({ id: req.params.id }, (err) => {
      if (err) {
        // console.log('Delete error:', err);
        res.sendStatus(500);
      }
      res.status(200).end();
    });
  });
app.listen(process.env.PORT, () => console.log(`Reservation listening at http://${process.env.HOST}:${process.env.PORT}`));
