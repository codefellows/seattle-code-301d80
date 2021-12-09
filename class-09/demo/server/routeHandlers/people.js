'use strict';

const axios = require('axios');


async function handleGetPeople(req, res) {
  try {
    const peopleResult = await axios.get(`${process.env.STARWARS_URL}/people`);
    const cleanedPeopleData = peopleResult.data.results.map(person => new Person(person));
    res.status(200).send(cleanedPeopleData);
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