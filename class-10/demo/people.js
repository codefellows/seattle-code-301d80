'use strict';

const axios = require('axios');

const cache = require('./peopleCache.js');

// const cache = {}

async function handleGetPeople(req, res) {
  const { id_number } = req.query;
  console.log(cache);
  // import { Component } from 'react'
  // object deconstruction
  // const id_number = req.quer.id_number

  // when a client asks for data about a person we will look in our cache for that key
  // if we have the key in the cache we will grab the data associated with the key 
  // and send it to the user
  // if we do have it we make an api request, get the data back, THEN store it in the cache for next time, and send the data

  // think about how to time stamp your data... if it's ok, past a certain time replace it
  if (cache[id_number]) {
    console.log('cache hit on', id_number)
    res.status(200).send(cache[id_number])
    return
  }

  try {
    console.log('cache miss on', id_number)
    const peopleResult = await axios.get(`${process.env.STARWARS_URL}/people/${id_number}`);
    const cleanedPersonData = new Person(peopleResult.data)
    cache[id_number] = cleanedPersonData
    res.status(200).send(cleanedPersonData);
  } catch (e) {
    console.error(e);
    res.status(500).send('server error');
  }
}

class Person {
  constructor(obj) {
    this.name = obj.name;
    this.eye_color = obj.eye_color;
    this.hair_color = obj.hair_color === 'n/a' || obj.hair_color === 'none' ? 'non-existant': obj.hair_color;
  }
}

module.exports = handleGetPeople;