const mongoose = require('mongoose');

const { Schema } = mongoose;

const catSchema = new Schema({
  name: String,
  color: String,
  hasClaws: Boolean,
  location: String
})

// make the schema, then define a model

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;