require('dotenv').config(); // Load environment variables
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const logLevels = {
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
  CUSTOM_WARNING: 'CUSTOM_WARNING', // Define custom warning level
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
  let title = '';
  let color = 0x000000; // Default color for unknown levels

  // Determine title and color based on log level
  switch (level) {
    case logLevels.INFO:
      title = '✅ Info';
      color = 0x00FF00; // Green for info
      break;
    case logLevels.WARNING:
      title = '⚠️ Warning';
      color = 0xFFFF00; // Yellow for warning
      break;
    case logLevels.ERROR:
      title = '❌ Error';
      color = 0xFF0000; // Red for error
      break;
    case logLevels.CUSTOM_WARNING:
      title = '⚠️ Custom Warning';
      color = 0xFFA500; // Orange for custom warning
      break;
    default:
      title = 'ℹ️ Unknown';
      break;
  }

  const trimmedMessage = message.length > 2048 ? message.slice(0, 2045) + '...' : message; // Trim message if it exceeds 2048 characters

  const embed = {
    title: title,
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

  // Check if the level is warning, error, or custom warning
  if (level === logLevels.WARNING || level === logLevels.ERROR || level === logLevels.CUSTOM_WARNING) {
    // Create embed and add to Discord queue
    const embed = createEmbed(level, message);
    discordQueue.push(embed);
    processQueue();
  }
}

// Logger with different log levels
const logger = {
  info: (message) => log(logLevels.INFO, message),
  warn: (message) => log(logLevels.WARNING, message),
  error: (message) => log(logLevels.ERROR, message),
  customWarn: (type, message) => log(logLevels.CUSTOM_WARNING, `[${type} Warning]: ${message}`),
};

module.exports = logger;