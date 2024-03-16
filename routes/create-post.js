const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const logger = require('../utilities/logger');
const pool = require('../database');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

router.post('/', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'craft', maxCount: 1 }]), async (req, res) => {
    try {
        if (!req.session.user) {
            const errorMessage = 'Unauthorized attempt to create a post';
            logger.warn(errorMessage);
            return res.status(401).send(errorMessage);
        }
        
        const { title, description } = req.body;

        if (!title || !description || !req.files || !req.files['image'] || !req.files['craft']) {
            const errorMessage = 'Incomplete post data or missing files';
            logger.error(errorMessage);
            return res.status(400).send(errorMessage);
        }

        const imagePath = req.files['image'][0].path;
        const craftPath = req.files['craft'][0].path;

        // Insert the new post into the database
        await pool.query('INSERT INTO posts (user_id, title, description, imagePath, craftPath) VALUES (?, ?, ?, ?, ?)', [req.session.user.id, title, description, imagePath, craftPath]);

        const successMessage = 'Post created successfully';
        res.status(200).send(successMessage);
        logger.info(`${successMessage} by user: ${req.session.user.username}`);
    } catch (err) {
        const errorMessage = 'Failed to create post';
        res.status(500).send(errorMessage);
        logger.error(`${errorMessage}: ${err.message}`);
    }
});

module.exports = router;
