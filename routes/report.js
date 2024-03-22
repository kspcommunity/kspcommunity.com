const express = require('express');
const { body, validationResult } = require('express-validator');
const logger = require('../utilities/logger');
const pool = require('../database');

require('dotenv').config();
const router = express.Router();

router.post('/', 
//    [
//        body('title').trim().escape(),
//        body('description').trim().escape()
//    ],
    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { title, description } = req.body;
        //logger.info('Received report with title: ' + title + 'and description: ' + description);
        logger.info('Received report with title: ' + title);

        // Create the embed object
        const embed = {
            title: 'Recieved Report',
            fields: [
                { name: 'Title', value: title },
                { name: 'Description', value: description }
            ]
        };

        // Send the embed to the Discord webhook
        try {
            await fetch(process.env.REPORT_WEBHOOK, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ embeds: [embed] })
            });
            res.sendStatus(200);
        } catch (error) {
            logger.error('Error sending embed to Discord webhook:', error);
            res.sendStatus(500);
        }
    }
);

module.exports = router;