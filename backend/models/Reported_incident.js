const mongoose=require('mongoose');
const {Schema}=mongoose;

const ReportSchema = new Schema({
    
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
    latitude:{
        type:Number,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    },
    landmark:{
        type:String,
        required:true
    }

});

const Reported=mongoose.model('report',ReportSchema);

module.exports=Reported;