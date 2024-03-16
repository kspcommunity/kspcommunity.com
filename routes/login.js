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

            // Retrieve the user from the database
            const [user] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

            if (user.length === 0 || !await bcrypt.compare(password, user[0].password)) {
                return res.status(401).send('Username or password incorrect');
            }

            // Set the user session
            req.session.user = user;

            res.status(200).send('Logged in');
            logger.info(`User logged in: ${username}`);
        } catch (err) {
            res.status(500).send('Failed to login');
            logger.error(`An error occurred while logging in: ${err}`);
        }
    }
);

module.exports = router;
