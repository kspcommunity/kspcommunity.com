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
let firstRun = true;

const syncMissingUsers = async (missingUsers, sourcePool, targetPool) => {
    for (const user of missingUsers) {
        logger.info(`Synchronizing user ${user.id} from ${sourcePool === pool ? 'primary' : 'backup'} database to ${targetPool === pool ? 'primary' : 'backup'} database`)
        await targetPool.query('INSERT INTO users (id, username, password) VALUES (?, ?, ?)', [user.id, user.username, user.password]);
    }
};

const syncUsers = async () => {
    try {
        logger.info('Synchronizing users between primary and backup databases...');
        const [primaryUsers] = await pool.query('SELECT * FROM users');
        const [backupUsers] = await backupPool.query('SELECT * FROM users');

        // Convert user lists to maps for easier comparison
        const primaryUsersMap = new Map(primaryUsers.map(user => [user.id, user]));
        const backupUsersMap = new Map(backupUsers.map(user => [user.id, user]));

        // Find users present in the primary database but missing in the backup database
        const missingInBackup = primaryUsers.filter(user => !backupUsersMap.has(user.id));
        // Find users present in the backup database but missing in the primary database
        const missingInPrimary = backupUsers.filter(user => !primaryUsersMap.has(user.id));

        await syncMissingUsers(missingInBackup, pool, backupPool);
        await syncMissingUsers(missingInPrimary, backupPool, pool);

        if (missingInBackup.length > 0 || missingInPrimary.length > 0) {
            logger.info(`${missingInBackup.length} user(s) were missing in the backup database and have been synchronized. ${missingInPrimary.length} user(s) were missing in the primary database and have been synchronized.`);
        }
    } catch (err) {
        console.error('Error synchronizing users:', err);
    }
};

const checkDatabaseStatus = async () => {
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(100) NOT NULL,
            lastmodified DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);
        if (!firstRun && !db1Online) {
            logger.info('Main database is back up, syncing data...');
            db1Online = true;
            syncUsers();
        } else {
            db1Online = true;
            logger.info('Main database is up');
        }
    } catch (err) {
        db1Online = false;
        logger.error(`Main database is inaccessible: ${err}`);
    }
    if (process.env.USE_BACKUP_DB_TOGETHER === "true") {
        try {
            await backupPool.query(`CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(100) NOT NULL,
                lastmodified DATETIME DEFAULT CURRENT_TIMESTAMP
            )`);
            if (!firstRun && !db2Online) {
                logger.info('Backup database is back up, syncing data...');
                db2Online = true;
                syncUsers();
            } else {
                db2Online = true;
                logger.info('Backup database is up');
            }
        } catch (err) {
            db2Online = false;
            logger.error(`Backup database is inaccessible: ${err}`);
        }
        if (!db1Online && !db2Online) {
            logger.error('Both databases are inaccessible');
        }
        if (db1Online && db2Online) {
            logger.info('Both databases are online, syncing');
            syncUsers();
        }
        firstRun = false;
    }
};

const poolQuery = async (...args) => {
    if (db1Online && db2Online) {
        try {
            return await pool.query(...args);
        } catch (error) {
            logger.error(`Error occured while querying main database: ${error}`);
            checkDatabaseStatus();
        }
    } else if (!db1Online && db2Online) {
        try {
            return await backupPool.query(...args);
        } catch (error) {
            logger.error(`Error occures while querying backup database: ${error}`);
            checkDatabaseStatus();
        }
    } else if (db1Online && !db2Online) {
        logger.error('Both databases are offline');
    } else {
        logger.error('Something went wrong');
    }
}

checkDatabaseStatus();

// Database status checking interval
setInterval(checkDatabaseStatus, 1 * 60 * 1000);

module.exports = {
    poolQuery,
    isDb1Online: () => db1Online,
    isDb2Online: () => db2Online
};