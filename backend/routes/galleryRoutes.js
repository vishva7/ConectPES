const express = require("express");
const router = express.Router();
const Gallery = require("../models/gallerySchema");

router.get("/all", async (req, res) => {
  try {
    let photos = await Gallery.find({});
    console.log(photos);
    res.status(200).send(photos);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    let photo = await Gallery.findById(req.params.id);
    console.log(photo);
    res.status(200).send(photo);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/create", async (req, res) => {
  let photo = new Gallery({
    title: req.body.title,
    image: req.body.image,
    position: Number(req.body.position),
  });
  try {
    let savedGallery = await photo.save();
    res.status(201).send(savedGallery);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Could not create photo");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const deletedGallery = await Gallery.findByIdAndDelete(req.params.id);
    if (!deletedGallery) {
      return res.status(404).json({ error: "Photo not found" });
    }
    res.status(200).json(deletedGallery);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const updatedGallery = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updatedGallery) {
      return res.status(404).json({ error: "Photo not found" });
    }
    res.status(200).json(updatedGallery);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
