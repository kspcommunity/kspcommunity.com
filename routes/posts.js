const express = require('express');
const router = express.Router();
const logger = require('../utilities/logger');
const pool = require('../database');

router.get('/', async (req, res) => {
    try {
        // Retrieve all posts from the database
        const [posts] = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
        res.json(posts);
        logger.info('Posts retrieved');
    } catch (err) {
        res.status(500).send('Failed to retrieve posts');
        logger.error(`An error occurred while retrieving posts: ${err}`);
    }
});

module.exports = router;
