const mongoose = require('mongoose');
const Cat = require('./models/catModel.js');
require('dotenv').config();

// write a function that
// connects to the database
// adds cat records to the DB
// disconnects

// write function
// ANYTIME you do DB stuff it is async
async function seed() {
  mongoose.connect(process.env.DB_URL);

  const myCat = new Cat({
    name: 'Mya',
    color: 'Black and White',
    hasClaws: true,
    location: 'Seattle'
  });
  await myCat.save(function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('saved my cat, Mya');
    }
  });

  // alternatively
  await Cat.create({
    name: 'Poncho',
    color: 'Black and Brown',
    hasClaws: true,
    location: 'Seattle'
  })

  await Cat.create({
    name: 'Casper',
    color: 'White',
    hasClaws: true,
    location: 'Richmond'
  })


  mongoose.disconnect();
}





seed();


// call the function

// to seed the database:
// make sure your server is not running
// in terminal go to project root
// type `node seed.js`