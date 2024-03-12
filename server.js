const fs = require('fs');
const https = require('https');
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const morgan = require('morgan'); // Add morgan for request logging
const logger = require('./utilities/logger');

const saltRounds = 10;
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_NAME
});

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// Use morgan for request logging
app.use(morgan('combined'));

// Middleware for logging requests
app.use((req, res, next) => {
    const startTime = new Date();
    res.on('finish', () => {
        const endTime = new Date();
        const duration = endTime - startTime;
        logger.info(`[${req.method}] ${req.url} - ${res.statusCode} (${duration}ms)`);
    });
    next();
});

// Wrap the table creation code in an async function
(async () => {
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(100) NOT NULL
        )`);
        logger.info("Created users table");

        // Specify the paths to your SSL certificate and private key
        const sslOptions = {
            key: fs.readFileSync(path.resolve(__dirname, './ssl/private-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, './ssl/certificate.pem'))
        };

        // Start the HTTPS server
        https.createServer(sslOptions, app).listen(PORT, () => {
            logger.info(`Server is running on https://localhost:${PORT}`);
        });
    } catch (err) {
        logger.error(`An error occurred while creating the users table: ${err}`);
    }
})();

app.post('/signup', body('username').trim().escape(), body('password').trim().escape(), async (req, res) => {
    const { username, password } = req.body;
    const [existingUser] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if (existingUser) {
        res.status(409).send('Username already taken');
        logger.warn(`Username "${username}" already taken`);
    } else if (password.length < 8) {
        res.status(400).send('Password must be at least 8 characters long');
        logger.warn(`Invalid password length for username "${username}"`);
    } else {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
            if (err) {
                res.status(500).send('Failed to register');
                logger.error(`An error occurred while signing up: ${err}`);
            } else {
                res.status(200).send('Registered');
                logger.info(`User registered: ${username}`);
            }
        });
    }
});

app.post('/login', body('username').trim().escape(), body('password').trim().escape(), async (req, res) => {
    const { username, password } = req.body;
    const [user] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if (user && user.password && await bcrypt.compare(password, user.password)) {
        req.session.user = user;
        res.status(200).send('Logged in');
        logger.info(`User logged in: ${username}`);
    } else {
        res.status(401).send('Username or password incorrect');
        logger.warn(`Failed login attempt for username: ${username}`);
    }
});

app.post('/create-post', async (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('You must be logged in to create a post');
        logger.warn('Unauthorized attempt to create a post');
    }

    const { title, content } = req.body;
    const result = await pool.query('INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)', [req.session.user.id, title, content]);

    res.send('Post created successfully');
    logger.info(`Post created by user: ${req.session.user.username}`);
});

app.get('/posts', async (req, res) => {
    const [posts] = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(posts);
    logger.info('Posts retrieved');
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('/:page', (req, res) => {
    const page = req.params.page;
    const filePath = path.join(__dirname, 'public', page + '.html');

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (!err) {
            res.sendFile(filePath);
        } else {
            // Handle 404 error by sending the contents of 404.html
            const notFoundPagePath = path.join(__dirname, 'public', '404.html');
            res.sendFile(notFoundPagePath);
            logger.warn(`Requested page "${page}" not found`);
        }
    });
});

// Middleware for logging errors
app.use((err, req, res, next) => {
    logger.error(`Error: ${err.message}`);
    next(err);
});

const PORT = process.env.PORT || 3000;