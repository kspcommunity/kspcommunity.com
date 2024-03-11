const fs = require('fs');
const path = require('path');

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

// Function to write log messages to console and log file
function log(level, message) {
  const formattedDate = getCurrentDate();
  const logMessage = `[${level}] [${formattedDate}] ${message}`;

  // Log to console
  console.log(logMessage);

  // Log to file
  const logFilePath = path.join(logsFolder, `${formattedDate}.log`);
  fs.appendFileSync(logFilePath, logMessage + '\n');
}

// Logger with different log levels
const logger = {
  info: (message) => log(logLevels.INFO, message),
  warn: (message) => log(logLevels.WARNING, `Warning: ${message}`),
  error: (message) => log(logLevels.ERROR, `Error: ${message}`),
  customWarn: (type, message) => log(logLevels.WARNING, `[${type} Warning]: ${message}`),
};

module.exports = logger;
