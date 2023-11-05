const express = require('express');
const router = express.Router();

const Report = require('../models/Reported_incident');


router.post('/add_report', async(req, res) => {

    try {
        const {name,number,city,latitude,longitude,landmark } = req.body;
        const newReport = new Report({
            name,
            number,
            city,
            latitude,
            longitude,
            landmark
        });
        const savedCity = await newReport.save();

        res.status(201).send({ success: true, message: 'Report data saved successfully' });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }

});

module.exports = router;