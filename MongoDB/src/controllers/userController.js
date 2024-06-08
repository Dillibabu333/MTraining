const express =require("express");

const router= express.Router();

const User=require("../models/user.model");

const crudcontroller=require("./crudController")


router.post("", crudcontroller(User).post )


router.get("", crudcontroller(User).get)


router.get("/:id", crudcontroller(User).getOne)


router.patch("/:id", crudcontroller(User).updateOne)


router.delete("/:id", crudcontroller(User).deleteOne)


module.exports=router