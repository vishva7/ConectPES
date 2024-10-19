const express = require("express");
const router = express.Router();
const Accomplishment = require("../models/accomplishmentSchema");

router.get("/all", async (req, res) => {
  try {
    let accomplishments = await Accomplishment.find({});
    console.log(accomplishments);
    res.status(200).send(accomplishments);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    let accomplishment = await Accomplishment.findById(req.params.id);
    console.log(accomplishment);
    res.status(200).send(accomplishment);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/create", async (req, res) => {
  let accomplishment = new Accomplishment({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    image: req.body.image,
    position: Number(req.body.position),
  });
  try {
    let savedAccomplishment = await accomplishment.save();
    res.status(201).send(savedAccomplishment);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Could not create accomplishment");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const deletedAccomplishment = await Accomplishment.findByIdAndDelete(
      req.params.id
    );
    if (!deletedAccomplishment) {
      return res.status(404).json({ error: "Accomplishment not found" });
    }
    res.status(200).json(deletedAccomplishment);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const updatedAccomplishment = await Accomplishment.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updatedAccomplishment) {
      return res.status(404).json({ error: "Accomplishment not found" });
    }
    res.status(200).json(updatedAccomplishment);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
