const express = require("express");
const router = express.Router();
const Publication = require("../models/publicationSchema");

router.get("/all", async (req, res) => {
  try {
    let publications = await Publication.find({});
    console.log(publications);
    res.status(200).send(publications);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    let publication = await Publication.findById(req.params.id);
    res.status(200).send(publication);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/create", async (req, res) => {
  let publication = new Publication({
    title: req.body.title,
    authors: req.body.authors,
    summary: req.body.summary,
    link: req.body.link,
  });
  try {
    let savedPublication = await publication.save();
    res.status(201).send(savedPublication);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Could not create publication");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const deletedPublication = await Publication.findByIdAndDelete(req.params.id);
    if (!deletedPublication) {
      return res.status(404).json({ error: "Publication not found" });
    }
    res.status(200).json(deletedPublication);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const updatedPublication = await Publication.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedPublication) {
      return res.status(404).json({ error: "Publication not found" });
    }
    res.status(200).json(updatedPublication);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;