const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs-extra');
const { v4: uuidv4 } = require('uuid');
const logger = require('../utilities/logger');
const processCraftFile = require("@kspcommunity/craft-file-reader");
const database = require('../database');

const craftupload = multer({ 
    storage: multer.diskStorage({
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
    }), 
    limits: { 
        fileSize: 5 * 1024 * 1024 
    },
    fileFilter: function (req, file, cb) {
        if (!file.originalname.endsWith('.craft')) {
            return cb(new Error('Please select a .craft file to upload'));
        }
        if (file.size > 5 * 1024 * 1024) {
            return cb(new Error('Please select a craft file smaller than 5 MB to upload'));
        }
        cb(null, true);
    }
});

router.post('/', craftupload.fields([{ name: 'craft', maxCount: 1}]), async (req, res) => {
    logger.info('Received POST request to /uploadcraft');
    const craft = req.files['craft'][0];
    logger.info(`Received a craft file`);

    try {
        // Read the uploaded craft file using craft-file-reader
        const processedCraftData = await processCraftFile(craft.path);

        // Log craft details to console
        console.log('\nCraft Details:');
        console.log(`- Ship: ${processedCraftData.craftDetails.ship}`);
        console.log(`- Description: ${processedCraftData.craftDetails.description}`);
        console.log(`- Version: ${processedCraftData.craftDetails.version}`);
        console.log(`- Type: ${processedCraftData.craftDetails.type}`);
        console.log(`- Size: ${processedCraftData.craftDetails.size}`);
        console.log(`- Vessel Type: ${processedCraftData.craftDetails.vesselType}`);
        console.log(`- Total Part Count: ${processedCraftData.craftDetails.totalPartCount}`);

        // Log parts details to console
        console.log('\nParts in the craft file:');
        for (const partDetails of processedCraftData.partsDetails) {
            if (partDetails.notFoundInModData) {
                console.log(`\nPart: ${partDetails.partName} (Not found in mod parts data)`);
            } else {
                console.log(`\n   Part: ${partDetails.partName}`);
                console.log(`     Mod: ${partDetails.modName}`);
                console.log(`     Mod Preferred Name: ${partDetails.preferredName}`);
                console.log(`     Link: ${partDetails.link}`);
                console.log(`     File Path: ${partDetails.filePath}`);
            }
        }

        // Save the files to the database
        // const result = await database.saveFiles(title, description, images, craft, userId);
        logger.info('Files uploaded successfully');

        uid = uuidv4();
        expirationTime = new Date(Date.now() + 1000 * 60 * 60 * 1); // 1 hour
        userid = req.session.user.id
        database.poolQuery(`INSERT INTO tobeupload (uid, userid, expirationtime, craftfilepath) VALUES ($1, $2, $3)`, [uid, userid, expiringTime, craft.path]);
        res.status(200).json({ ship: processedCraftData.craftDetails.ship, partCount: processedCraftData.craftDetails.totalPartCount });

        // Respond with craft details
        res.status(200).json({ craftDetails: processedCraftData.craftDetails, partsDetails: processedCraftData.partsDetails });
    } catch (err) {
        logger.error(`Error handling file upload: ${err.message}`);
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
