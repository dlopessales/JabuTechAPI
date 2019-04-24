let mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
  },
  birthDate: Date,
  phone: Number,
  address: {
    street: String,
    number: String,
    city: String,
    state: String,
    zipcode: String,
    country: String
  },
  events : { type: mongoose.Schema.Types.ObjectId, ref: 'EventModel' }
});

module.exports = mongoose.model('UserModel', UserSchema);