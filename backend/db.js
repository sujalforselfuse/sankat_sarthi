//main file to connect to databases

const mongoose=require('mongoose');//importing mongoose 
const URI=process.env.DB;

const connectomongo=()=>{
    mongoose.connect(`${URI}`);//URI for local host
    console.log("DB connected");
}

module.exports=connectomongo;