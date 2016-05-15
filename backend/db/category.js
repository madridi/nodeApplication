var mongoose = require('mongoose');

var categorySchema = {
  _id: {type: String, required:true},
  parent: {type: String, ref: category},
  ancestors: [{type: String, ref: category}]
};

module.exports = new mongoose.Schema(categorySchema);
modul.exports.categorySchema = categorySchema;
