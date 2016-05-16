var mongoose = require('mongoose');
var Category = require('./category');

var productSchema = {
  name: {type: String, required: true},
  pictures: [{type: String}],
  price: {
    amount: {type: Number, required: true},
    currency: {type: String, enum: ['EUR', 'DT', 'USD'], required: true}
  },
  category: Category.categorySchema
};

var currencySymbole = {
  'EUR': '£',
  'DT': 'DT',
  'USD': '$'
};

var Product =  new mongoose.Schema(productSchema);
Product.virtual('displayPrice').get(function() {
  return currencySymbole[this.price.currency]+' '+this.price.amount;
});

module.exports = Product;
module.exports.productSchema = Product;
