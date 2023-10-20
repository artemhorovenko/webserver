const messageModel = require('../models/messageModel');

function createMessage(req, res) {
    const message = messageModel.createMessage(req.body);
    res.status(201).json(message);
}

function updateMessage(req, res) {
    const index = parseInt(req.params.index);
    const updatedMessage = req.body;
    const message = messageModel.updateMessage(index, updatedMessage);
    if (message) {
        res.json(message);
    } else {
        res.status(404).json({ error: 'Повідомлення не знайдено' });
    }
}

function getMessage(req, res) {
    const index = parseInt(req.params.index);
    const message = messageModel.getMessage(index);
    if (message) {
        res.json(message);
    } else {
        res.status(404).json({ error: 'Повідомлення не знайдено' });
    }
}

function getMessages(req, res) {
    const messages = messageModel.getMessages();
    res.json(messages);
}

function deleteMessage(req, res) {
    const index = parseInt(req.params.index);
    const deletedMessage = messageModel.deleteMessage(index);
    if (deletedMessage) {
        res.json(deletedMessage);
    } else {
        res.status(404).json({ error: 'Повідомлення не знайдено' });
    }
}

module.exports = {
    createMessage,
    updateMessage,
    getMessage,
    getMessages,
    deleteMessage
};
