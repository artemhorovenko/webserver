const messages = [];

function createMessage(message) {
    messages.push(message);
    return message;
}

function updateMessage(index, updatedMessage) {
    if (index >= 0 && index < messages.length) {
        messages[index] = { ...messages[index], ...updatedMessage };
        return messages[index];
    }
    return null;
}

function getMessage(index) {
    return messages[index];
}

function getMessages() {
    return messages;
}

function deleteMessage(index) {
    if (index >= 0 && index < messages.length) {
        return messages.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    createMessage,
    updateMessage,
    getMessage,
    getMessages,
    deleteMessage
};
