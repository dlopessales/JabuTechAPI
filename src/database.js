const mongoose = require('mongoose');
const server = '172.17.0.2:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'jabutech';      // REPLACE WITH YOUR DB NAME
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     console.log('on connnect')
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()