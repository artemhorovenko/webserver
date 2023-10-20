const fileModel = require('../models/fileModel');

function createFile(req, res) {
    const file = fileModel.createFile(req.body);
    res.status(201).json(file);
}

function updateFile(req, res) {
    const index = parseInt(req.params.index);
    const updatedFile = req.body;
    const file = fileModel.updateFile(index, updatedFile);
    if (file) {
        res.json(file);
    } else {
        res.status(404).json({ error: 'Файл не знайдено' });
    }
}

function getFile(req, res) {
    const index = parseInt(req.params.index);
    const file = fileModel.getFile(index);
    if (file) {
        res.json(file);
    } else {
        res.status(404).json({ error: 'Файл не знайдено' });
    }
}

function getFiles(req, res) {
    const files = fileModel.getFiles();
    res.json(files);
}

function deleteFile(req, res) {
    const index = parseInt(req.params.index);
    const deletedFile = fileModel.deleteFile(index);
    if (deletedFile) {
        res.json(deletedFile);
    } else {
        res.status(404).json({ error: 'Файл не знайдено' });
    }
}

module.exports = {
    createFile,
    updateFile,
    getFile,
    getFiles,
    deleteFile
};
