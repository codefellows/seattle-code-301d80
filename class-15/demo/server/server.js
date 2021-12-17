'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/bookModel');
const verifyUser = require('./auth.js');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.DB_URL);


app.get('/test', (request, response) => {
  response.send('test request received')
})

app.get('/books', handleGetBooks);
app.post('/books', handlePostBooks);
app.delete('/books/:id', handleDeleteBooks);
app.put('/books/:id', handlePutBooks);
app.get('/user', handleGetUser);

async function handleGetBooks(req, res) {
  // const searchObject = {}
  // if (req.query.email) {
  //   searchObject.email = req.query.email;
  // }
  verifyUser(req, async (err, user) => {
    if (err) {
      console.error(err);
      res.send('invalid token');
    } else {
      try {
        const booksFromDb = await Book.find({ email: user.email });
        if (booksFromDb.length > 0) {
          res.status(200).send(booksFromDb);
        } else {
          res.status(404).send('error');
        }
      } catch (e) {
        console.error(e);
        res.status(500).send('server error');
      }
    }
  })
}


async function handlePostBooks(req, res) {
  const { email } = req.query;
  const { title, description, status } = req.body;
  try {
    const newBook = await Book.create({ ...req.body, email })
    res.status(200).send(newBook)
  } catch (e) {
    res.status(500).send('server error');
  }
}

function handleDeleteBooks(req, res) {

  verifyUser(req, async (err, user) => {
    if (err) {
      res.send('bad token');
    } else {
      const { id } = req.params;
    
      try {
        const book = await Book.findOne({ _id: id, email: user.email });
        if (!book) res.status(400).send('unable to delete book');
        else {
          await Book.findByIdAndDelete(id);
          res.status(204).send('bye book');
        }
      } catch (e) {
        res.status(500).send('server error');
      }
    }
  })
}

async function handlePutBooks(req, res) {
  const { id } = req.params;
  const { email } = req.query;
  try {
    const book = await Book.findOne({ _id: id, email });
    if (!book) res.status(400).send('unable to update book');
    else {
      const updatedBook = await Book.findByIdAndUpdate(id, { ...req.body, email }, { new: true, overwrite: true });
      res.status(200).send(updatedBook);
    }
  } catch (e) {
    res.status(500).send('server error');
  }
}

function handleGetUser(req, res) {
  verifyUser(req, (err, user) => {
    if (err) {
      console.error(err);
      res.send('invalid token');
    } else {
      res.send(user);
    }
  })
}

// function verifyUser(req, errFirstOrUserCallbackFunction) {
//   try {
//     // define the token from the header on the request
//     const token = req.headers.authorization.split(' ')[1];
//     console.log(token)
//     // this line comes from the docs for jsonWebToken
//     jwt.verify(token, getKey, {}, errOrUserCallback);
//   } catch (error) {
//     errFirstOrUserCallbackFunction('not Authorized')
//   }
// }

app.listen(PORT, () => console.log(`listening on ${PORT}`));

