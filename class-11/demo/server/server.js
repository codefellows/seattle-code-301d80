'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Cat = require('./models/catModel');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected')
});

// set up a route that a client could hit to get db info about cats
// defining a route that a client could hit and saying what will happen if they do, kinda like a listener
app.get('/cats', handleGetCats);


async function handleGetCats(req, res) {
  // get a location back from the client... if they give me a location only find cats from that location
  let locationFromClient = {}
  if (req.query.location) {
    locationFromClient = { location: req.query.location }
    // locationFromClient = req.query
  }

  try {
    const catsFromDB = await Cat.find(locationFromClient);
    if (catsFromDB.length > 0) {
      res.status(200).send(catsFromDB);
    } else {
      res.status(404).send('no cats found');
    }
  } catch (e) {
    res.status(500).send('Server Error');
  }
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));