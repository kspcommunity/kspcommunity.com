const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs-extra');
const ejs = require('ejs');
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
const reportRouter = require('./routes/report');

// Middleware setup
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.set('view engine', 'ejs'); // Set EJS as view engine
app.set('views', path.join(__dirname, 'views')); // Set views folder
app.use(morgan('combined'));

// Use routes
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/create-post', createPostRouter);
app.use('/posts', postsRouter);
app.use('/uploadcraft', uploadcraftRouter);
app.use('/createpost', createpostRouter);
app.use('/api/contributemod', contributemodRouter);
app.use('/api/report', reportRouter);

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

const featuredCrafts = [
    { img: 'usercontent/images/2d8d8444-ac2b-447d-8827-122251dcd81e.jpg', title: 'Craft 1' },
    { img: 'usercontent/images/4d52d360-0786-4ff5-a18c-16f4a29aa226.jpg', title: 'Craft 2' },
    { img: 'usercontent/images/57f1cb87-0239-4020-9af3-9a744d840378.jpg', title: 'Craft 3' },
    { img: 'usercontent/images/62ee9f41-29cf-4804-9dbe-d6e0b0bc1ffb.jpg', title: 'Craft 4' },
    { img: 'usercontent/images/352d0644-f1e0-4e39-9c7d-3127e0efbea5.jpg', title: 'Craft 5' }
];

app.get('/', (req, res) => {
    console.log(req.session.user); 
    res.render('index', { featuredCrafts: featuredCrafts });
});

app.get('/:page', (req, res, next) => {
    const page = req.params.page;
    const pagePath = path.join(__dirname, 'views', `${page}.ejs`);
    fs.access(pagePath, fs.constants.F_OK, (err) => {
        if (err) {
            next(); // Pass the request to the next middleware
        } else {
            res.render(page); // Render EJS file from views folder
        }
    });
});

// Serve sitemap.xml
app.get('/sitemap.xml', (req, res) => {
    const sitemapPath = path.join(__dirname, 'sitemap.xml');
    res.sendFile(sitemapPath);
});

// Serve robots.txt
app.get('/robots.txt', (req, res) => {
    const robotsFilePath = path.join(__dirname, 'robots.txt');
    res.sendFile(robotsFilePath);
});

app.get('/usercontent/:type/:filename', (req, res) => {
    const type = req.params.type;
    const filename = req.params.filename;
    if (type !== undefined && filename !== undefined && (type === 'images' || type === 'craft')) {
        const filePath = path.join(__dirname, 'uploads', type, filename);
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                res.status(404).send('File not found');
            } else {
                res.sendFile(filePath);
            }
        });
    }
});

// Handle 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.ejs'));
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
