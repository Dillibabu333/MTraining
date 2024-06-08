const mongoose=require("mongoose");


const postSchema=mongoose.Schema({
    title:{type:String, require:true},
    body:{type:String, require:true},
    user_id:{type:mongoose.Schema.Types.ObjectId, ref:"user", require:true},
    tag_id:[{type:mongoose.Schema.Types.ObjectId, ref:"tag", require:true}]


    
},{
    versionKey:false,
    // Timestamp:true
})

 module.exports=mongoose.model("post", postSchema);