const mongoose=require('mongoose');
const {Schema}=mongoose;

const SosSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    location:[Number]

});

const Sos=mongoose.model('sos',SosSchema);

module.exports=Sos;