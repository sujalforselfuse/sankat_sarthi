const express = require('express');
const router = express.Router();
const Shelters = require('../models/Shelters');
const Hospital = require('../models/Hospitals');
const Food = require('../models/Food');

router.post('/add_sos', (req, res) => {
    const { name, number, city, location } = req.body;

    // Create a new SOS document
    const newSos = new Sos({
        name,
        number,
        city,
        location,
    });

    // Save the SOS data to the database
    newSos.save((err) => {
        if (err) {
            console.error(err);
            res.status(500).send({success:false,message:'Error saving SOS data'});
        } else {
            res.status(201).send({success:true,message:'SOS data saved successfully'});
        }
    });
});

module.exports = router;