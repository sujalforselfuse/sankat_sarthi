const express = require('express');
const router = express.Router();
const City_wise = require('../models/City_wise_chances');


router.post('/add_chances', async (req, res) => {
    try {
        const { city, state, disaster_rate } = req.body;

        
        const newCity = new City_wise({
            city,
            state,
            disaster_rate,
        });

        
        const savedCity = await newCity.save();

        res.status(201).json({ success: true, city: savedCity });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.get('/get_chances/:cityName', async (req, res) => {
    try {
        const cityName = req.params.cityName;

        // Find and return data for the specified city
        const cityData = await City_wise.findOne({ city: cityName });

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