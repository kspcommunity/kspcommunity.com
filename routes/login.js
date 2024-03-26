const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const logger = require('../utilities/logger');
const pool = require('../database');

router.post('/', 
    body('username').trim().escape(),
    body('password').trim().escape(), 
    async (req, res) => {
        if (!req.body.username || !req.body.password) {
            return res.status(400).send('Username and password are required');
        }
        try {
            // Check for validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                logger.error('Login validation failed:', errors.array());
                return res.status(400).json({ errors: errors.array() });
            }

            // Extract username and password from request body
            const { username, password } = req.body;

            // Retrieve user from the database
            const [userResult] = await pool.poolQuery('SELECT * FROM users WHERE username = ?', [username]);

            // Check if user exists
            if (userResult.length === 0) {
                logger.error(`User not found: ${username}`);
                return res.status(401).send('Username or password incorrect');
            }

            const user = userResult[0];

            // Compare passwords
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                logger.error(`Incorrect password for user: ${username}`);
                return res.status(401).send('Username or password incorrect');
            }

            // Set the user session
            req.session.user = user;
            req.session.save(function(err) {
                if (err) {
                    logger.error('Failed to save session:', err);
                    return res.status(500).send('Failed to login');
                } else {
                    console.log("Current user session", req.session.user);
                    console.log("To be stored user session", user);
                    logger.info(`User logged in: ${username}`);
                    res.redirect('/');
                }
            })
        } catch (err) {
            logger.error('Login failed:', err);
            res.status(500).send('Failed to login');
        }
    }
);

module.exports = router;