const express = require('express');
const router = express.Router();
const Shelters = require('../models/Shelters');


router.post('/add_shelter', async (req, res) => {

    try {
        const { city, center, markers } = req.body;

        const newMap = new Shelters({ city, center, markers });

        const savedCity = await newMap.save();

        res.status(201).json({ success: true, shelters: savedCity });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }

});

router.get('/get_shelter/:cityName', async (req, res) => {
    try {
        const cityName = req.params.cityName;

        // Find and return data for the specified city
        const cityData = await Shelters.findOne({ city: cityName });

        if (!cityData) {
            res.status(404).json({ success: false, error: 'City data not found' });
        } else {
            res.status(200).json({ success: true, shelters: cityData });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});



module.exports = router;



