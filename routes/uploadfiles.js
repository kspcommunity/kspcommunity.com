const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs-extra');
const logger = require('../utilities/logger');
const database = require('../database');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '..', 'uploads');
        fs.ensureDir(uploadPath, (err) => {
            if (err) {
                logger.error(`Error creating uploads directory: ${err.message}`);
                cb(err);
            } else {
                logger.info(`Uploads directory created successfully at: ${uploadPath}`);
                cb(null, uploadPath);
            }
        });
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/', upload.fields([{ name: 'images[]', maxCount: 10 }, { name: 'craft', maxCount: 1 }]), async (req, res) => {
    logger.info('Received POST request to /uploadfiles');
    const title = req.body.title;
    const description = req.body.description;
    const images = req.files['images[]'];
    const craft = req.files['craft'][0];
    //const userId = req.session.userId;
    logger.info(`Received files with title "${title}", ${images.length} images and 1 craft file`);

    try {
        if (!title || !description) {
            throw new Error('Title or description is missing');
        }

        if (images.length < 1 || !craft) {
            throw new Error('Please select images and a craft file to upload');
        }

        if (images.length > 10) {
            throw new Error('Please select 10 or fewer images to upload');
        }

        if (!craft.originalname.endsWith('.craft')) {
            throw new Error('Please select a .craft file to upload');
        }

        if (craft.size > 5 * 1024 * 1024) {
            throw new Error('Please select a craft file smaller than 5 MB to upload');
        }

        for (let i = 0; i < images.length; i++) {
            if (images[i].size > 5 * 1024 * 1024) {
                throw new Error('Please select images smaller than 5 MB to upload');
            }
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
