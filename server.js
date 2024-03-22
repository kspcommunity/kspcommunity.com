const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs-extra');
const logger = require('./utilities/logger');
const database = require('./database');

// Import routes
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const createPostRouter = require('./routes/createpost');
const postsRouter = require('./routes/posts');
const uploadcraftRouter = require('./routes/uploadcraft');
const createpostRouter = require('./routes/createpost');
const contributemodRouter = require('./routes/contributemod');

// Middleware setup
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(morgan('combined'));

// Define static files directory and cache control
const staticFilesOptions = {
    maxAge: '1d' // Cache files for 1 day
};
app.use(express.static(path.join(__dirname, 'public'), staticFilesOptions));

// Use routes
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/create-post', createPostRouter);
app.use('/posts', postsRouter);
app.use('/uploadcraft', uploadcraftRouter);
app.use('/createpost', createpostRouter);
app.use('/api/contributemod', contributemodRouter);

// Serve pages without .html extension
app.get('/:page', (req, res, next) => {
    const page = req.params.page;
    const pagePath = path.join(__dirname, 'public', `${page}.html`);
    fs.access(pagePath, fs.constants.F_OK, (err) => {
        if (err) {
            next(); // Pass the request to the next middleware
        } else {
            res.sendFile(pagePath);
        }
    });
});

// Handle 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
    logger.warn(`Requested page "${req.url}" not found`);
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
    logger.error(`Error: ${err.message}`);
    res.status(500).send('Internal Server Error');
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});

// Error handling for uncaught exceptions
process.on('uncaughtException', (err) => {
    logger.error(`Uncaught Exception: ${err.message}`);
    process.exit(1);
});

// Error handling for unhandled promise rejections
process.on('unhandledRejection', (err) => {
    logger.error(`Unhandled Promise Rejection: ${err.message}`);
    process.exit(1);
});