const express =require("express");

const router= express.Router();

const Tag=require("../models/tag.model");

const crudcontroller=require("./crudController")


router.post("", crudcontroller(Tag).post )


router.get("", crudcontroller(Tag).get)


router.get("/:id", crudcontroller(Tag).getOne)


router.patch("/:id", crudcontroller(Tag).updateOne)


router.delete("/:id", crudcontroller(Tag).deleteOne)


module.exports=router