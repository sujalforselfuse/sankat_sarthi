const mongoose=require('mongoose');
const {Schema}=mongoose;

const Emergency_schema = new Schema({
    
    city: {
        type: String,
        required: true
    },
    ambulance: {
        type: Number,
        required: true
    },
    control_room: {
        type: Number,
        required: true,
        
    },
    ndrf: {
        type: Number,
        
    }
});
const User=mongoose.model('city_emergency',Emergency_schema);

module.exports=User;