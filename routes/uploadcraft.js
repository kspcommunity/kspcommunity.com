const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs-extra');
const logger = require('../utilities/logger');
const database = require('../database');

const craftupload = multer({ storage: multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '..', 'uploads', 'craft');
        fs.ensureDir(uploadPath, (err) => {
            if (err) {
                logger.error(`Error creating craft upload directory: ${err.message}`);
                cb(err);
            } else {
                logger.info(`Craft upload directory created successfully at: ${uploadPath}`);
                cb(null, uploadPath);
            }
        });
    }
}), limits: { fileSize: 5 * 1024 * 1024 } });

router.post('/', craftupload.fields([{ name: 'craft', maxCount: 1}]), async (req, res) => {
    logger.info('Received POST request to /uploadcraft');
    const craft = req.files['craft'][0];
    //const userId = req.session.userId;
    logger.info(`Received a craft file`);

    try {
        if (!craft.originalname.endsWith('.craft')) {
            throw new Error('Please select a .craft file to upload');
        } else if (craft.size > 5 * 1024 * 1024) {
            throw new Error('Please select a craft file smaller than 5 MB to upload');
        }

        // Save the files to the database
        // const result = await database.saveFiles(title, description, images, craft, userId);
        logger.info('Files uploaded successfully');
        res.status(200).json({ message: 'Files uploaded successfully' });
    } catch (err) {
        logger.error(`Error handling file upload: ${err.message}`);
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;