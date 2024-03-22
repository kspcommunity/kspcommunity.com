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
        if (title.length > 64 || description.length > 1024) {
            return res.status(400).json({ error: 'Title or description too long.' });
        } else if (title.length === 0 || description.length === 0) {
            return res.status(400).json({ error: 'Title or description is empty' });
        } else {
            //logger.info('Received report with title: ' + title + 'and description: ' + description);
            logger.info('Received report with title: ' + title);

            const embed = {
                title: 'Recieved Report',
                fields: [
                    { name: 'Title', value: title },
                    { name: 'Description', value: description }
                ]
            };

            try {
                await fetch(process.env.REPORT_WEBHOOK, {
                    method: 'POST',
                    headers: {
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify({ embeds: [embed] })
                });
                res.sendStatus(200).send('Report sent!');
            } catch (error) {
                logger.error('Error sending embed to Discord webhook:', error);
                res.sendStatus(500);
            }
        }
    }
);

module.exports = router;