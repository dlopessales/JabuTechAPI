const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

router.get('/product/:id', controller.getByEvent);

module.exports = router;