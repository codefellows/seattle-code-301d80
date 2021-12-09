'use strict';

const axios = require('axios');

async function handleGetStarships(req, res) {
  try {
    const starshipResult = await axios.get(`${process.env.STARWARS_URL}/starships`);
    const cleanedStarshipData = starshipResult.data.results.map(starship => new Ship(starship));
    res.status(200).send(cleanedStarshipData);
  } catch (e) {
    console.error(e);
    res.status(500).send('server error')
  }
}

class Ship {
  constructor(obj) {
    this.name = obj.name;
    this.model = obj.model;
  }
}

module.exports = { handleGetStarships, Ship: Ship }