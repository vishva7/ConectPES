const express = require("express");
const router = express.Router();
const Home = require("../models/homeSchema");

router.get("/all", async (req, res) => {
  try {
    let home_posts = await Home.find({});
    console.log(home_posts);
    res.status(200).send(home_posts);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    let home_post = await Home.findById(req.params.id);
    res.status(200).send(home_post);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/create", async (req, res) => {
  let home_post = new Home({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  });
  try {
    let savedHome = await home_post.save();
    res.status(201).send(savedHome);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Could not create home post");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const deletedHome = await Home.findByIdAndDelete(req.params.id);
    if (!deletedHome) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(deletedHome);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const updatedHome = await Home.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedHome) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(updatedHome);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;