const mongoose=require('mongoose');
const {Schema}=mongoose;

const City_wise_schema = new Schema({
    
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    disaster_rate: {
        type: Number,
        required: true,
        unique: true
    },
    Alert_type: {
        type: String,
        default: "normal"
    }
});
const User=mongoose.model('city_wise_rate',City_wise_schema);

module.exports=User;