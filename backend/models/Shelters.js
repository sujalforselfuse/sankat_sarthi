const mongoose = require('mongoose');
const { Schema } = mongoose;

const markerSchema = new mongoose.Schema({
    coordinates: [Number], // An array of two numbers [longitude, latitude]
    title: String,
});

const Shelter_schema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    center: [Number], // An array of two numbers [longitude, latitude]
    markers: [markerSchema], // An array of marker objects
});


const User = mongoose.model('shelter', Shelter_schema);

module.exports = User;