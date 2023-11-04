const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  description: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
}, { timestamps: true});


module.exports = mongoose.model('Post', postSchema);