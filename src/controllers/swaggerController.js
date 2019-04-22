const swaggerSpec = require('../swaggerSpec')

exports.get = (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.status(200).send(swaggerSpec);
};
