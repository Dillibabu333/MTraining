const mongoose=require("mongoose");


const connect=()=>{
    
   return mongoose.connect("mongodb://localhost:27017/userpostdb");
    
}

module.exports=connect;