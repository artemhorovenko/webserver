const users = [];

function createUser(user) {
    users.push(user);
    return user;
}

function updateUser(index, updatedUser) {
    if (index >= 0 && index < users.length) {
        users[index] = { ...updatedUser };
        return users[index];
    }
    return null;
}

function getUser(index) {
    return users[index];
}

function getUsers() {
    return users;
}

function deleteUser(index) {
    if (index >= 0 && index < users.length) {
        return users.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    createUser,
    updateUser,
    getUser,
    getUsers,
    deleteUser
};