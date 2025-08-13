const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const multer = require('multer');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Make sure this folder exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// POST /api/form (with file upload)
router.post('/', upload.single('picture'), controller.submitForm);

// GET /api/form
router.get('/', controller.getForms);

module.exports = router;
