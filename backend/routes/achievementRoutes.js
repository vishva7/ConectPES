const express = require("express");
const router = express.Router();
const Achievement = require("../models/achievementSchema");

router.get("/all", async (req, res) => {
  try {
    let achievements = await Achievement.find({});
    console.log(achievements);
    res.status(200).send(achievements);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    let achievement = await Achievement.findById(req.params.id);
    console.log(achievement);
    res.status(200).send(achievement);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/create", async (req, res) => {
  let achievement = new Achievement({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    image: req.body.image,
    position: Number(req.body.position),
  });
  try {
    let savedAchievement = await achievement.save();
    res.status(201).send(savedAchievement);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Could not create achievement");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const deletedAchievement = await Achievement.findByIdAndDelete(
      req.params.id
    );
    if (!deletedAchievement) {
      return res.status(404).json({ error: "Achievement not found" });
    }
    res.status(200).json(deletedAchievement);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const updatedAchievement = await Achievement.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updatedAchievement) {
      return res.status(404).json({ error: "Achievement not found" });
    }
    res.status(200).json(updatedAchievement);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
