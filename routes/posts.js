const express = require('express');
const router = express.Router();
const logger = require('../utilities/logger');
const pool = require('../database');

router.get('/', async (req, res) => {
    try {
        // Retrieve all posts from the database
        const [posts] = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
        
        if (posts.length === 0) {
            logger.warn('No posts found in the database');
            return res.status(404).json({ message: 'No posts found' });
        }

        res.json(posts);
        logger.info('Posts retrieved successfully');
    } catch (err) {
        // Log the error
        logger.error(`Error retrieving posts: ${err}`);

        // Check if it's a database error
        if (err.code === 'DATABASE_ERROR') {
            return res.status(500).json({ error: 'Database error occurred' });
        }

        // Handle other types of errors
        res.status(500).json({ error: 'Failed to retrieve posts' });
    }
});

module.exports = router;