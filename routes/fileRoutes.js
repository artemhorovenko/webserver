const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

router.post('/files', fileController.createFile);
router.put('/files/:index', fileController.updateFile);
router.get('/files/:index', fileController.getFile);
router.get('/files', fileController.getFiles);
router.delete('/files/:index', fileController.deleteFile);

module.exports = router;
