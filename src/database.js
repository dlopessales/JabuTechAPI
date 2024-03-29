const mongoose = require('mongoose');
const server = 'localhost:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'jabutechmongodb';    // REPLACE WITH YOUR DB NAME
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     console.log('on connnect')
     mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true })
       .then(() => {
         console.log('Database connection successful :)')
       })
       .catch(err => {
         console.error('Database connection error :(')
       })
  }
}
module.exports = new Database()