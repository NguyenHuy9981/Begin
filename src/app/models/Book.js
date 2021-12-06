const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator')
const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.plugin(slug)


const Book = new Schema({
  _id: Number,
  name: String,
  image: String,
  slug: { type: String, slug: "name", unique: true}
}, {
  _id:false,
  timestamps:true,
});
Book.plugin(AutoIncrement);

module.exports = mongoose.model('Book', Book);