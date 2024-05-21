const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));

const usersRouter = require('./routes/users');
const feedbackRouter = require('./routes/feedback');

app.use('/api/users', usersRouter);
app.use('/api/feedback', feedbackRouter);

const port = process.env.API_PORT || 3001;
const isDevMode = process.env.NODE_ENV === 'development';

if (isDevMode) {
  console.log('Running in development mode: SSL is disabled');
  http.createServer(app).listen(port, () => {
    console.log(`HTTP API Server is listening on port ${port}`);
  });
} else {
  let sslOptions;
  try {
    sslOptions = {
      key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
      cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem'))
    };
  } catch (err) {
    console.error('Error reading SSL certificate files', err);
    process.exit(1);
  }

  https.createServer(sslOptions, app).listen(port, () => {
    console.log(`Secure API Server is listening on port ${port}`);
  });
}
