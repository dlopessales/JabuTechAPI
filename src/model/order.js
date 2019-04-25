let mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  event  : { type: mongoose.Schema.Types.ObjectId, ref: 'EventModel' },
  consumer  : { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
  products  : [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductModel' }]
})

module.exports = mongoose.model('OrderModel', OrderSchema);