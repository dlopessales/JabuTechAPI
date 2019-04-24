const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 * definition:
 *   users:
 *     properties:
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       email:
 *         type: string
 */

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

router.get('/email/:email', controller.getByEmail);

module.exports = router;