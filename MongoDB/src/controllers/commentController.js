

const express =require("express");

const router= express.Router();

const Comment=require("../models/Comment.model");

const crudcontroller=require("./crudController")


router.post("", crudcontroller(Comment).post )


router.get("", async (req, res) => {
    try {
      const page = req.query.page || 1;
      const size = req.query.size || 15;
  
      const item = await Comment.find()
        .populate({path:"post_id", select:"title"})
        .skip((page - 1) * size)
        .limit(size)
        .lean()
        .exec();
  
      const totaldocs = Math.ceil((await Comment.find().countDocuments()) / size);
      return res.status(200).send({ item, totaldocs });
    } catch (e) {
      return res.status(500).send(e.message);
    }
  })


router.get("/:id", crudcontroller(Comment).getOne)


router.patch("/:id", crudcontroller(Comment).updateOne)


router.delete("/:id", crudcontroller(Comment).deleteOne)


module.exports=router