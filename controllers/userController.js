const userModel = require('../models/userModel');

function createUser(req, res) {
    const user = userModel.createUser(req.body);
    res.status(201).json(user);
}

function updateUser(req, res) {
    const index = parseInt(req.params.index);
    const updatedUser = req.body;
    const user = userModel.updateUser(index, updatedUser);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'Користувач не знайдений' });
    }
}

function getUser(req, res) {
    const index = parseInt(req.params.index);
    const user = userModel.getUser(index);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'Користувач не знайдений' });
    }
}

function getUsers(req, res) {
    const users = userModel.getUsers();
    res.json(users);
}

function deleteUser(req, res) {
    const index = parseInt(req.params.index);
    const deletedUser = userModel.deleteUser(index);
    if (deletedUser) {
        res.json(deletedUser);
    } else {
        res.status(404).json({ error: 'Користувач не знайдений' });
    }
}

module.exports = {
    createUser,
    updateUser,
    getUser,
    getUsers,
    deleteUser
};
