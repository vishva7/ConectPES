const express = require("express");
const router = express.Router();
const People = require("../models/peopleSchema");
const { authenticateToken, requireAdmin } = require("../middleware/auth");

router.get("/all", async (req, res) => {
  try {
    let people = await People.find({});
    console.log(people);
    res.status(200).send(people);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    let person = await People.findById(req.params.id);
    res.status(200).send(person);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/create", authenticateToken, requireAdmin, async (req, res) => {
  let person = new People({
    name: req.body.name,
    role: req.body.role,
    image: req.body.image,
    description: req.body.description,
    category: req.body.category,
    link: req.body.link,
  });
  try {
    let savedPerson = await person.save();
    res.status(201).send(savedPerson);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Could not create person");
  }
});

router.delete("/delete/:id", authenticateToken, requireAdmin, async (req, res) => {
  try {
    console.log(req.params.id);
    const deletedPerson = await People.findByIdAndDelete(req.params.id);
    if (!deletedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.status(200).json(deletedPerson);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/update/:id", authenticateToken, requireAdmin, async (req, res) => {
  try {
    console.log(req.params.id);
    const updatedPerson = await People.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updatedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.status(200).json(updatedPerson);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
