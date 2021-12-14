# Lecture Notes

server.js
require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const axios = require('axios');

const PORT = process.env.PORT;

app.get('/books', getBooks);

function getBooks(request, response) {
  const url = `someurl.com`
  axios
    .get(url)
    .then(results => {
      response.status(200).send(results.data);
    })
    .catch((e) => {
      console.log(e)
    })
}

app.listen(PORT, () => console.log(`Running on port, ${PORT}`))