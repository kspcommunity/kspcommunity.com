require('dotenv').config(); // Load environment variables
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const logLevels = {
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
};

// Create logs folder if it doesn't exist
const logsFolder = path.join(__dirname, '../logs');
if (!fs.existsSync(logsFolder)) {
  fs.mkdirSync(logsFolder);
}

// Function to format current date as dd-mm-yyyy
function getCurrentDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
}

// Function to send log message to Discord webhook
async function sendToDiscord(message) {
  try {
    await axios.post(process.env.LOGGING_WEBHOOK_URL, { content: message });
  } catch (error) {
    console.error('Error sending log message to Discord:', error.message);
  }
}

// Queue for log messages to be sent to Discord
const discordQueue = [];
let isSending = false;

// Function to process and send log messages from the queue
async function processQueue() {
  if (!isSending && discordQueue.length > 0) {
    isSending = true;
    const logMessage = discordQueue.shift();
    try {
      await sendToDiscord(logMessage);
    } catch (error) {
      console.error('Error sending log message to Discord:', error.message);
    }
    isSending = false;
    setTimeout(processQueue, 1000); // Retry after 1 second
  }
}

// Function to write log messages to console and log file
async function log(level, message) {
  const formattedDate = getCurrentDate();
  const logMessage = `[${level}] [${formattedDate}] ${message}`;

  // Log to console
  console.log(logMessage);

  // Log to file
  const logFilePath = path.join(logsFolder, `${formattedDate}.log`);
  fs.appendFileSync(logFilePath, logMessage + '\n');

  // Send to Discord for WARNING and ERROR levels
  if (level === logLevels.WARNING || level === logLevels.ERROR) {
    discordQueue.push(logMessage);
    processQueue();
  }
}

// Logger with different log levels
const logger = {
  info: (message) => log(logLevels.INFO, message),
  warn: (message) => log(logLevels.WARNING, `Warning: ${message}`),
  error: (message) => log(logLevels.ERROR, `Error: ${message}`),
  customWarn: (type, message) => log(logLevels.WARNING, `[${type} Warning]: ${message}`),
};

module.exports = logger;