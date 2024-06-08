const mongoose=require("mongoose");


const tagSchema=mongoose.Schema({
    name:{type:String, require:true},
    section:{type:String, require:true},

    
},{
    versionKey:false,
    // timestamps: true
})

 module.exports=mongoose.model("tag",tagSchema);