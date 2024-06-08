const express = require("express");

const router = express.Router();

const Post = require("../models/post.model");

const crudcontroller = require("./crudController");

router.post("", crudcontroller(Post).post);

router.get("", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 15;

    const item = await Post.find()
      .populate({path:"user_id", select:"name"})
      .populate({path:"tag_id", select:"name"})
      .skip((page - 1) * size)
      .limit(size)
      .lean()
      .exec();

    const totaldocs = Math.ceil((await Post.find().countDocuments()) / size);
    return res.status(200).send({ item, totaldocs });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", crudcontroller(Post).getOne);

router.patch("/:id", crudcontroller(Post).updateOne);

router.delete("/:id", crudcontroller(Post).deleteOne);

module.exports = router;
