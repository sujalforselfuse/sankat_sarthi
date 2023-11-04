const mongoose = require('mongoose');
const { Schema } = mongoose;

const hospitalSchema = new mongoose.Schema({
    coordinates: [Number], // An array of two numbers [longitude, latitude]
    title: String,
});

const hos_schema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    center: [Number], // An array of two numbers [longitude, latitude]
    markers: [hospitalSchema], // An array of marker objects
});

const Hospital = mongoose.model('medical', hos_schema);

module.exports = Hospital;