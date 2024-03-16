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
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { username, password } = req.body;

            try {
                // Check if the username already exists
                const [existingUser] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

                if (existingUser.length > 0) {
                    return res.status(409).send('Username already taken');
                }

                // Hash the password
                const hashedPassword = await bcrypt.hash(password, saltRounds);

                // Insert the new user into the database
                await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

                res.status(200).send('Registered');
                logger.info(`User registered: ${username}`);
            } catch (registrationError) {
                res.status(500).send('Failed to register');
                logger.error(`An error occurred while registering user ${username}: ${registrationError.stack || registrationError}`);
            }
        } catch (validationError) {
            res.status(400).json({ errors: [{ msg: 'Invalid input data', param: validationError.param }] });
            logger.error(`Validation error during user registration: ${validationError.stack || validationError}`);
        }
    }
);

// Error handling middleware
router.use((err, req, res, next) => {
    res.status(500).send('Something went wrong');
    logger.error(`Unhandled error occurred: ${err.stack || err}`);
});

module.exports = router;
