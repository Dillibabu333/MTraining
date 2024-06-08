const express =require("express");

const router= express.Router();

const Post=require("../models/post.model");


router.post("", async (req, res)=>{
    try{
        const user= await Post.create(req.body);
       return res.status(201).send(user);
    }
    catch(e){
        return res.status(500).send(e.message);
    }
})


router.get("", async (req, res)=>{
    try{
        const user= await Post.find().lean().exec();
       return res.status(201).send(user);
    }
    catch(e){
        return res.status(500).send(e.message);
    }
})


router.get("/:id", async (req, res)=>{
    try{
        const user= await Post.findById(req.params.id);
       return res.status(201).send(user);
    }
    catch(e){
        return res.status(500).send(e.message);
    }
})


router.patch("", async (req, res)=>{
    try{
        const user= await Post.findByIdAndUpdate(req.params.id, req.body, {new:true});
       return res.status(201).send(user);
    }
    catch(e){
        return res.status(500).send(e.message);
    }
})


router.delete("", async (req, res)=>{
    try{
        const user= await Post.findByIdAndDelete(req.body);
       return res.status(201).send(user);
    }
    catch(e){
        return res.status(500).send(e.message);
    }
})


module.exports=router