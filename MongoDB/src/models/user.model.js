const mongoose=require("mongoose");


const UserSchema=mongoose.Schema({
    id:{type:Number,require:true, unique:true},
    name:{type:String, require:true},
    age:{type:Number, require:true},

    
},{
    versionKey:false,
    // Timestamp:true
})

 module.exports=mongoose.model("user", UserSchema);