'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const handleGetPeople = require('./routeHandlers/people.js');
const { handleGetStarships, Ship } = require('./routeHandlers/starships.js');
const planets = require('./routeHandlers/planets.js');
// planets === { Planet: Planet, handleGetPlanets: handleGetPlanets }


const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001


app.get('/hello', ((req, res) => res.send('hello!')));

app.get('/people', handleGetPeople);
app.get('/starships', handleGetStarships);
app.get('/planets', planets.handleGetPlanets);



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));