'use strict';

//import blah from 'blah'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const list = require('./dummyData.json');

const app = express();

app.use(cors());

const PORT = process.env.PORT


// set up routes

app.get('/test', handleGetTest);
app.get('/christmaslist', handleGetChristmasList);
// if any route other than the ones I defined above get hit return status(500)
app.get('/*', someHandler)


function handleGetChristmasList(req, res) {
  console.log(req);
  console.log(req.query);
  const userName = req.query.name;
  let newItemList = list.map(person => new ShoppingList(person))
  res.status(200).send(newItemList);
}

function handleGetTest(request, response) {
  response.send('your test worked!');
}

class ShoppingList {
  constructor(obj) {
    this.item = obj.item;
  }
}



app.listen(PORT, () => console.log('server is listening on port ', PORT));