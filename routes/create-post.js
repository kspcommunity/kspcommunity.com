const express = require('express');
const router = express.Router();
const multer = require('multer');
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
            logger.warn('Unauthorized attempt to create a post');
            return res.status(401).send('You must be logged in to create a post');
        }
        
        const { title, description } = req.body;
        const imagePath = req.files['image'][0].path;
        const craftPath = req.files['craft'][0].path;

        // Insert the new post into the database
        await pool.query('INSERT INTO posts (user_id, title, description, imagePath, craftPath) VALUES (?, ?, ?, ?, ?)', [req.session.user.id, title, description, imagePath, craftPath]);

        res.status(200).send('Post created successfully');
        logger.info(`Post created by user: ${req.session.user.username}`);
    } catch (err) {
        res.status(500).send('Failed to create post');
        logger.error(`An error occurred while creating post: ${err}`);
    }
});

module.exports = router;
