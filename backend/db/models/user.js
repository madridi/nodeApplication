var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  profile: {
    name: {type: String, required: true, lowercase: true},
    picture: {type: String}
  },
  date: {
    oauth: {type:String},
    cart: [{
      product: {type: ObjectId},
      quantity: {
        type: Number,
        default: 1,
        min: 1
      }
    }]
  }
});
