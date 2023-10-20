const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);
router.put('/users/:index', userController.updateUser);
router.get('/users/:index', userController.getUser);
router.get('/users', userController.getUsers);
router.delete('/users/:index', userController.deleteUser);

module.exports = router;
