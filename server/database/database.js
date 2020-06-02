const { Client } = require('pg');

const db = new Client({
  user: 'Max',
  host: 'localhost',
  database: 'sdc',
  port: 5432,
});

db.connect((err) => {
  if (err) console.error(err);
  else console.log('connection successful');
});

const Room = {};

Room.get = (id, cb) => {
  db.query(`select * from reservations where id = ${id}`, cb);
};

module.exports = {
  db,
  Room,
};
