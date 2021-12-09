'use strict';

const axios = require('axios');

async function handleGetPlanets(req, res) {
  try {
    const planetResult = await axios.get(`${process.env.STARWARS_URL}/planets`);
    const cleanedPlanetData = planetResult.data.results.map(planet => new Planet(planet));
    res.status(200).send(cleanedPlanetData);
  } catch (e) {
    console.error(e);
    res.status(500).send('server error')
  }
}

class Planet {
  constructor(obj) {
    this.name = obj.name;
    this.terrain = obj.terrain;
  }
}

module.exports = { Planet: Planet, handleGetPlanets: handleGetPlanets }