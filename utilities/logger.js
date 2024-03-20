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
async function sendToDiscord(embed) {
  try {
    await axios.post(process.env.LOGGING_WEBHOOK_URL, { embeds: [embed] });
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
    const embed = discordQueue.shift();
    try {
      await sendToDiscord(embed);
    } catch (error) {
      console.error('Error sending log message to Discord:', error.message);
    }
    isSending = false;
    setTimeout(processQueue, 1000); // Retry after 1 second
  }
}

// Function to create an embed for log message
function createEmbed(level, message) {
  const color =
    level === logLevels.ERROR
      ? 0xFF0000 // Red for error
      : level === logLevels.WARNING
      ? 0xFFFF00 // Yellow for warning
      : 0x00FF00; // Green for info

  const trimmedMessage = message.length > 2048 ? message.slice(0, 2045) + '...' : message; // Trim message if it exceeds 2048 characters

  const embed = {
    title: level === logLevels.INFO ? '✅ Info' : level === logLevels.WARNING ? '⚠️ Warning' : '❌ Error',
    description: trimmedMessage,
    color: color,
  };

  return embed;
}

// Function to write log messages to console and log file, and add to Discord queue
async function log(level, message) {
  const formattedDate = getCurrentDate();
  const logMessage = `[${level}] [${formattedDate}] ${message}`;

  // Log to console
  console.log(logMessage);

  // Log to file
  const logFilePath = path.join(logsFolder, `${formattedDate}.log`);
  fs.appendFileSync(logFilePath, logMessage + '\n');

  // Create embed and add to Discord queue
  const embed = createEmbed(level, message);
  discordQueue.push(embed);
  processQueue();
}

// Logger with different log levels
const logger = {
  info: (message) => log(logLevels.INFO, message),
  warn: (message) => log(logLevels.WARNING, message),
  error: (message) => log(logLevels.ERROR, message),
  customWarn: (type, message) => log(logLevels.WARNING, `[${type} Warning]: ${message}`),
};

module.exports = logger;
