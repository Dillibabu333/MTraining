const express =require("express");
const mongoose=require("mongoose");

const app = express();

// step 1 - connect to mongodb
const connect =()=>{
    return mongoose.connect("mongodb://localhost:27017/masaiDB")
};

// step 2 - create schema


const studentSchema= new mongoose.Schema({
    id:{type: Number, require:true, unique:true},
    name:{type : String, require: true},
    section:{type : String, require:true}
    
},{
    versionKey:false,
    timestamps: true
})


// step 3 - create model
const Student =mongoose.model("studentsData", studentSchema);

app.post("/student", async (req, res)=>{
    try{
        const stud=  await Student.create(req.body);
        return res.send(stud);
    }
    catch(err){
        return res.send(err.mesage)
    }
})

app.get("/", async (req,res)=>{
    try{
        const stud=  await Student.find().lean().exec();
        return res.send(stud);
        console.log("sucess")
    }
    catch(err){
        return res.send(err.mesage)
    }
})

app.listen(5000, async function () {
   try{
    await connect();
    console.log("connected to mongodb")
   }
   catch(e){
    console.error(e);
   }

})