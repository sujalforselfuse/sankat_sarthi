const express = require('express');
const router = express.Router();
const Shelters = require('../models/Shelters');
const Hospital = require('../models/Hospitals');
const Food = require('../models/Food');
const Sos = require('../models/Sos_detail');


router.post('/add_sos', async(req, res) => {

    try {
        const { name,number,city,location } = req.body;
        const newSos = new Sos({
            name,
            number,
            city,
            location,
        });
        const savedCity = await newSos.save();

        res.status(201).send({ success: true, message: 'SOS data saved successfully' });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
 



});

module.exports = router;