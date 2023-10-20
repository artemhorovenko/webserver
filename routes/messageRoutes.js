const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/messages', messageController.createMessage);
router.put('/messages/:index', messageController.updateMessage);
router.get('/messages/:index', messageController.getMessage);
router.get('/messages', messageController.getMessages);
router.delete('/messages/:index', messageController.deleteMessage);

module.exports = router;
