const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const logger = require('../utilities/logger');
const pool = require('../database');
const saltRounds = 10;

router.post('/', 
    body('username').trim().escape(),
    body('password').trim().escape(), 
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                logger.log('WARNING', 'User registration request failed due to validation errors');
                return res.status(400).json({ errors: errors.array() });
            }

            const { username, password } = req.body;

            // Check if the username already exists
            const [existingUser] = await pool.poolQuery('SELECT * FROM users WHERE username = ?', [username]);

            if (existingUser.length > 0) {
                logger.log('WARNING', 'User registration request failed: Username already taken');
                return res.status(409).send('Username already taken');
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Insert the new user into the database
            await pool.poolQuery('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

            res.status(200).send('Registered');
            logger.log('INFO', `User registered: ${username}`);
        } catch (err) {
            logger.log('ERROR', `An error occurred while signing up: ${err}`);
            res.status(500).send('Failed to register');
        }
    }
);

module.exports = router;
