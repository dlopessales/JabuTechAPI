let mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: String,
    startDate: Date,
    endDate: Date,
    address: {
        street: String,
        number: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    active: Boolean,
    creator : { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' }
});

module.exports = mongoose.model('EventModel', EventSchema);