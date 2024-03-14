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
const morgan = require('morgan');
const multer = require('multer');
const logger = require('./utilities/logger');
const { v4: uuidv4 } = require('uuid');
var DB1_online = false;
var DB2_online = false;

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
const saltRounds = 10;
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_NAME
});

const backup_pool = mysql.createPool({
    host: process.env.BACKUP_MYSQL_HOST,
    user: process.env.BACKUP_MYSQL_USER,
    password: process.env.BACKUP_MYSQL_PASS,
    database: process.env.BACKUP_MYSQL_NAME
});

// Verify if DB is up
(async () => {
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(100) NOT NULL
        )`);
        DB1_online = true;
        logger.info('Main database is up');
    } catch (err) {
        DB1_online = false;
        logger.error(`Main database is inaccessible, is it down?: ${err}`);
    }
    if (process.env.USE_BACKUP_DB_TOGETHER === true) {
        try {
            await backup_pool.query(`CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(100) NOT NULL
            )`);
            DB2_online = true;
            logger.info('Backup database is up');
        } catch (err) {
            DB2_online = false;
            logger.error(`Backup database is inaccessible, is it down?: ${err}`);
        }
    }
})();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(morgan('combined'));
app.use((req, res, next) => {
    const startTime = new Date();
    res.on('finish', () => {
        const endTime = new Date();
        const duration = endTime - startTime;
        logger.info(`[${req.method}] ${req.url} - ${res.statusCode} (${duration}ms)`);
    });
    next();
});

(async () => {
    try {
        const sslOptions = {
            key: fs.readFileSync(path.resolve(__dirname, './ssl/private-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, './ssl/certificate.pem'))
        };

        if (process.env.USE_HTTP === "false") {
            https.createServer(sslOptions, app).listen(PORT, () => {
                logger.info(`Server is running on https://localhost:${PORT}`);
            });
        };

        if (process.env.USE_BACKUP_DB_TOGETHER === true) {
            logger.info('Using backup database alongside main database');
        };
    } catch (err) {
        logger.error(`An error occurred while setting up: ${err}`);
    }
})();

app.post('/signup', body('username').trim().escape(), body('password').trim().escape(), async (req, res) => {
    const { username, password } = req.body;
    const [existingUser] = await pool.query('SELECT * FROM users WHERE username = ?', [username]) || await backup_pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if (existingUser) {
        res.status(409).send('Username already taken');
        logger.warn(`Username "${username}" already taken`);
    } else if (password.length < 8) {
        res.status(400).send('Password must be at least 8 characters long');
        logger.warn(`Invalid password length for username "${username}"`);
    } else {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
            if (err) {
                res.status(500).send('Failed to register');
                logger.error(`An error occurred while signing up: ${err}`);
            } else {
                res.status(200).send('Registered');
                logger.info(`User registered: ${username}`);
            }
        });
        if (process.env.USE_BACKUP_DB_TOGETHER === true) {
            await backup_pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
                if (err) {
                    logger.error(`An error occurred while signing up: ${err}`);
                } else {
                    logger.info(`Replicated user:  ${username} to backup database`);
                }
            });
        }
    }
});

app.post('/login', body('username').trim().escape(), body('password').trim().escape(), async (req, res) => {
    const { username, password } = req.body;
    const [user] = await pool.query('SELECT * FROM users WHERE username = ?', [username]) || await backup_pool.query('SELECT * FROM users WHERE username = ?', [username]);
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
        logger.warn('Unauthorized attempt to create a post');
        return res.status(401).send('You must be logged in to create a post');
    }
    const images = req.files.image;
    const craftFiles = req.files.craft[0];
    const { title, description, image, craft } = req.body;
    const sanitizedTitle = title.replace(/[^a-zA-Z0-9-_]/g, '_');
    const result = await pool.query('INSERT INTO posts (user_id, title, descrption, imagePath, craftPath) VALUES (?, ?, ?)', [req.session.user.id, title, description, imagePath, craftPath]);
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

app.use((err, req, res, next) => {
    logger.error(`Error: ${err.message}`);
    next(err);
});

const PORT = process.env.PORT || 3000;
if (process.env.USE_HTTP === "true") {
    app.listen(PORT, () => {
        logger.info(`Server is running on http://localhost:${PORT}`);
    });
}

const checkDatabaseStatus = async () => {
    try {
        await pool.query('SELECT * FROM users');
        if (!DB1_online) {
            DB1_online = true;
            logger.info('Main database is up');
        }
    } catch (err) {
        if (DB1_online) {
            DB1_online = false;
            logger.error(`Main database is inaccessible, is it down?: ${err}`);
        }
    }
    try {
        await backup_pool.query('SELECT * FROM users');
        if (!DB2_online) {
            DB2_online = true;
            logger.info('Backup database is up');
        }
    } catch (err) {
        if (DB2_online) {
            DB2_online = false;
            logger.error(`Backup database is inaccessible, is it down?: ${err}`);
        }
    }
};

setInterval(checkDatabaseStatus, 5 * 60 * 1000);