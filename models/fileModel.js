const files = [];

function createFile(file) {
    files.push(file);
    return file;
}

function updateFile(index, updatedFile) {
    if (index >= 0 && index < files.length) {
        files[index] = updatedFile;
        return updatedFile;
    }
    return null;
}

function getFile(index) {
    return files[index];
}

function getFiles() {
    return files;
}

function deleteFile(index) {
    if (index >= 0 && index < files.length) {
        return files.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    createFile,
    updateFile,
    getFile,
    getFiles,
    deleteFile
};
