const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs-extra');
const { v4: uuidv4 } = require('uuid');
const logger = require('../utilities/logger');
const database = require('../database');

const imageupload = multer({ 
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            const uploadPath = path.join(__dirname, '..', 'uploads', 'images');
            fs.ensureDir(uploadPath, (err) => {
                if (err) {
                    logger.error(`Error creating image uploads directory: ${err.message}`);
                    cb(err);
                } else {
                    logger.info(`Images upload directory created successfully at: ${uploadPath}`);
                    cb(null, uploadPath);
                }
            });
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    }), 
    limits: { 
        fileSize: 5 * 1024 * 1024 
    },
    fileFilter: function (req, file, cb) {
        const allowedFileTypes = /jpeg|jpg|png|svg|gif/;
        const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedFileTypes.test(file.mimetype);
        if (extname && mimetype) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'));
        }
    }
});

router.post('/', imageupload.fields([{ name: 'images[]', maxCount: 10 }]), async (req, res) => {
    logger.info('Received POST request to /createpost');
    const title = req.body.title;
    const description = req.body.description;
    const images = req.files['images[]'];
    //const userId = req.session.userId;
    logger.info(`Received files with title "${title}", ${images.length} images`);

    try {
        if (!title || !description) {
            throw new Error('Title or description is missing');
        } else if (images.length > 10) {
            throw new Error('Please select 10 or fewer images to upload');
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