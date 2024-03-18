const mysql = require('mysql2/promise');
const logger = require('./utilities/logger');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_NAME
});

const backupPool = mysql.createPool({
    host: process.env.BACKUP_MYSQL_HOST,
    user: process.env.BACKUP_MYSQL_USER,
    password: process.env.BACKUP_MYSQL_PASS,
    database: process.env.BACKUP_MYSQL_NAME
});

let db1Online = false;
let db2Online = false;

const checkDatabaseStatus = async () => {
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(100) NOT NULL
        )`);
        db1Online = true;
        logger.info('Main database is up');
    } catch (err) {
        db1Online = false;
        logger.error(`Main database is inaccessible: ${err}`);
    }

    if (process.env.USE_BACKUP_DB_TOGETHER === "true") {
        try {
            await backupPool.query(`CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(100) NOT NULL
            )`);
            db2Online = true;
            logger.info('Backup database is up');
        } catch (err) {
            db2Online = false;
            logger.error(`Backup database is inaccessible: ${err}`);
        }
    }
};

// Initial database status check
checkDatabaseStatus();

// Database status checking interval
setInterval(checkDatabaseStatus, 5 * 60 * 1000);

module.exports = {
    pool,
    backupPool,
    isDb1Online: () => db1Online,
    isDb2Online: () => db2Online
};