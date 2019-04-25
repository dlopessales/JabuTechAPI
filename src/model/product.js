let mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  quantity: Number,
  active: {
    type: Boolean,
    default: true
  },
  event  : { type: mongoose.Schema.Types.ObjectId, ref: 'EventModel' }
})

module.exports = mongoose.model('ProductModel', ProductSchema);