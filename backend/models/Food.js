const mongoose = require('mongoose');
const { Schema } = mongoose;

const food_sc = new mongoose.Schema({
    coordinates: [Number], // An array of two numbers [longitude, latitude]
    title: String,
});

const Food_schema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    center: [Number], // An array of two numbers [longitude, latitude]
    markers: [food_sc], // An array of marker objects
});

const Food = mongoose.model('food', Food_schema);

module.exports = Food;