require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded());


app.route('/api/room/:id')
  .get((req, res) => {
    // database retrieval goes here
    // placeholder:
    res.sendStatus(200);
  })
  .post((req, res) => {
    // database insertion goes here
    // placeholder:
    res.sendStatus(201);
  });

app.listen(process.env.PORT, () => console.log(`Reservation listening at http://${process.env.HOST}:${process.env.PORT}`));
