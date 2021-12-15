'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Cat = require('./models/catModel');

const app = express();
app.use(cors());
app.use(express.json());
// lets us see what is in the req.body

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
app.post('/cats', handlePostCats);
app.delete('/cats/:id', handleDeleteCats);
// app.delete('/cat/:id')
// localhost:3001/cats/8675309
// req.params === { id: 8675309 }
// RESTful Methods: get, post, put/patch, delete
app.put('/cats/:id', handlePutCats)

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

async function handlePostCats(req, res) {
  // console.log(req.body);
  try {
    const catWeMade = await Cat.create(req.body)
    res.status(201).send(catWeMade);
  } catch (e) {
    res.status(500).send('Server Error');
  }
}

async function handleDeleteCats(req, res) {
  const { id } = req.params
  // const id = req.params.id
  try {
    //delete the record
    await Cat.findByIdAndDelete(id);
    res.status(204).send('success')
    // send back success
  } catch (e) {
    res.status(500).send('Server Error');
  }
}

async function handlePutCats(req, res) {
  const { id } = req.params
  // req.body is going to have the updated object
  try {
    const updatedCat = await Cat.findByIdAndUpdate(id, req.body, { new: true, overwrite: true });
     // new replies with the NEW version of the document
    // overwrite updates the record with only the new object - overwritting the old record with the current object.. (put) overwrite: false only changes the properties of the object provided (patch)
    res.status(200).send(updatedCat);
  } catch (e) {
    res.status(500).send('Server Error');
  }

}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));