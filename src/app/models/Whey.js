const mongoose = require('mongoose');
const Schema = mongoose.Schema;
slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Whey = new Schema({
  
  name: String,
  image: String,
  slug: { type: String, slug: "name", unique: true }
}, {timestamps: true});

module.exports = mongoose.model('Whey', Whey);