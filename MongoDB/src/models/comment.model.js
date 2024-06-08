const mongoose=require("mongoose");


const commentSchema=mongoose.Schema({
    content:{type:String, require:true},
    post_id:{type:mongoose.Schema.Types.ObjectId, ref:"post", require:true}
    
})

 module.exports=mongoose.model("comment", commentSchema);