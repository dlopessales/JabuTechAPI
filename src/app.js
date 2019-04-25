const express = require('express');
const database = require('./database')
const swaggerUi = require('swagger-ui-express');

const app = express();
const router = express.Router();


// Api routes
const userRoute = require('./routes/usersRoute');
const eventRoute = require('./routes/eventsRoute');
const productRoute = require('./routes/productsRoute');
const orderRoute = require('./routes/orderRoute');

const swaggerRoute = require('./routes/swaggerRoute');

app.use(express.json({
    limit: '100kb',
    type: 'application/json'
}));

app.use('/users', userRoute);
app.use('/events', eventRoute);
app.use('/products', productRoute);
app.use('/orders', orderRoute);

app.use('/swagger.json', swaggerRoute);


var options = {
  swaggerUrl: 'http://localhost:3000/swagger.json'
}
app.use('/', swaggerUi.serve, swaggerUi.setup(null, options));
console.log('API DOC: http://localhost:3000/')
module.exports = app;
