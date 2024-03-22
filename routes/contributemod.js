const express = require('express');
const { body, validationResult } = require('express-validator');
const logger = require('../utilities/logger');
const pool = require('../database');

require('dotenv').config();
const router = express.Router();

router.post('/', 
    //[
    //    body('modName').trim().escape(),
    //    body('modLink').trim().escape()
    //],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { modName, modLink } = req.body;
        logger.info('Received mod contribution with name: ' + modName + 'and link: ' + modLink);

        // Create the embed object
        const embed = {
            title: 'New Mod Contribution',
            fields: [
                { name: 'Mod Name', value: modName },
                { name: 'Mod Link', value: modLink }
            ],
            color: 0xFFA500
        };

        // Send the embed to the Discord webhook
        try {
            await fetch(process.env.MOD_CONTRIBUTION_WEBHOOK, {
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