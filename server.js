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

// Wrap the table creation code in an async function
(async () => {
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(100) NOT NULL
        )`);
        console.log("Created users table");

        // Specify the paths to your SSL certificate and private key
        const sslOptions = {
            key: fs.readFileSync(path.resolve(__dirname, './ssl/private-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, './ssl/certificate.pem'))
        };

        // Start the HTTPS server
        https.createServer(sslOptions, app).listen(PORT, () => {
            console.log(`Server is running on https://localhost:${PORT}`);
        });
    } catch (err) {
        console.error(`An error occurred while creating the users table: ${err}`);
    }
})();

app.post('/signup', body('username').trim().escape(), body('password').trim().escape(), async (req, res) => {
    const { username, password } = req.body;
    const [existingUser] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if (existingUser) {
        res.status(409).send('Username already taken');
    } else if (password.length < 8) {
        res.status(400).send('Password must be at least 8 characters long');
    } else {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
            if (err) {
                res.status(500).send('Failed to register');
                console.error(`An error occurred while signing up: ${err}`);
            } else {
                res.status(200).send('Registered');
            }
        });
    }
});

app.post('/login', body('username').trim().escape(), body('password').trim().escape(), async (req, res) => {
    const { username, password } = req.body;
    const [user] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    console.log(user);
    if (user && user.password && await bcrypt.compare(password, user.password)) {
        req.session.user = user;
        res.status(200).send('Logged in');
    } else {
        res.status(401).send('Username or password incorrect');
    }
});

app.post('/create-post', async (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('You must be logged in to create a post');
    }

    const { title, content } = req.body;
    const result = await pool.query('INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)', [req.session.user.id, title, content]);

    res.send('Post created successfully');
});

app.get('/posts', async (req, res) => {
    const [posts] = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(posts);
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
