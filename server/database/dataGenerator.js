const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

const dataGenerator = () => {
  writer.pipe(fs.createWriteStream('./server/database/data.csv'));
  for (let i = 1; i <= 10000000; i += 1) {
    writer.write({
      id: i,
      reviews: (Math.floor(Math.random() * 550)),
      price: (Math.floor(Math.random() * 400) + 100),
      cleaning: (Math.floor(Math.random() * 80) + 40),
      service: (Math.floor(Math.random() * 60) + 100),
      tax: (Math.floor(Math.random() * 105)),
      maxGuests: (Math.floor(Math.random() * 9)),
      reviewScore: (Math.random() * 4 + 1).toPrecision(3).toString(),
    });
  }
  writer.end();
  console.log('finished!');
};

dataGenerator();
