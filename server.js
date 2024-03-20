const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs-extra');
const multer = require('multer');
const logger = require('./utilities/logger');
const database = require('./database');

// Import routes
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const createPostRouter = require('./routes/create-post');
const postsRouter = require('./routes/posts');

// Middleware setup
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, 'uploads');
        fs.ensureDir(uploadPath, (err) => {
            if (err) {
                logger.error(`Error creating uploads directory: ${err.message}`);
            }
            cb(null, uploadPath);
        });
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// Use routes
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/create-post', createPostRouter);
app.use('/posts', postsRouter);
app.post('/uploadfiles', async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const images = req.files['images[]'];
    const craft = req.files['craft'][0];
    //const userId = req.session.userId;
    logger.info(`Received files with title ${title}, ${images.length} images and 1 craft file`);
    if (title === undefined || description === undefined) {
        res.status(400).json({ error: 'Invalid request' });
        return;
    } else if (images.length < 1 || craft.length < 1) {
        res.status(400).json({ error: 'Please select images and a craft file to upload' });
        return;
    } else if (images.length > 10) {
        res.status(400).json({ error: 'Please select 10 or fewer images to upload' });
        return;
    } else if (craft.originalname.endsWith('.craft') === false) {
        res.status(400).json({ error: 'Please select a .craft file to upload' });
        return;
    } else if (craft.size > 5 * 1024 * 1024) {
        res.status(400).json({ error: 'Please select a craft file smaller than 5 MB to upload' });
        return;
    }
    for (let i = 0; i < images.length; i++) {if (images[i].size > 5 * 1024 * 1024) {
            res.status(400).json({ error: 'Please select images smaller than 5 MB to upload' });
            return;
        }
    }
    
    // Save the files to the database
    try {
        //const result = await database.saveFiles(title, description, images, craft, userId);
        res.status(200).json({ message: 'Files uploaded successfully' });
    } catch (err) {
        logger.error(`Error saving files to the database: ${err.message}`);
        res.status(500).json({ error: 'Failed to save files to the database' });
    }
});

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
