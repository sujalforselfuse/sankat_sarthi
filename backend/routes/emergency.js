const express = require('express');
const router = express.Router();
const Emergency = require('../models/Emergency');

router.get('/get_emergency/:cityName', async (req, res) => {
    try {
        const cityName = req.params.cityName;

        // Find and return data for the specified city
        const cityData = await Emergency.findOne({ city: cityName });
        if (!cityData) {
            res.status(404).json({ success: false, error: 'City data not found' });
        } else {
            res.status(200).json({ success: true, city: cityData });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});



module.exports = router;