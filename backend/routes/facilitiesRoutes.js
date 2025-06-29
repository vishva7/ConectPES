const express = require("express");
const router = express.Router();
const Facilities = require("../models/facilitiesSchema");
const { authenticateToken, requireAdmin } = require("../middleware/auth");

router.get("/all", async (req, res) => {
  try {
    let facilities = await Facilities.find({});
    console.log(facilities);
    res.status(200).send(facilities);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    let facility = await Facilities.findById(req.params.id);
    res.status(200).send(facility);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/create", authenticateToken, requireAdmin, async (req, res) => {
  let facility = new Facilities({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    specs: req.body.specs,
  });
  try {
    let savedFacility = await facility.save();
    res.status(201).send(savedFacility);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Could not create facility");
  }
});

router.delete("/delete/:id", authenticateToken, requireAdmin, async (req, res) => {
  try {
    console.log(req.params.id);
    const deletedFacility = await Facilities.findByIdAndDelete(req.params.id);
    if (!deletedFacility) {
      return res.status(404).json({ error: "Facility not found" });
    }
    res.status(200).json(deletedFacility);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/update/:id", authenticateToken, requireAdmin, async (req, res) => {
  try {
    console.log(req.params.id);
    const updatedFacility = await Facilities.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedFacility) {
      return res.status(404).json({ error: "Facility not found" });
    }
    res.status(200).json(updatedFacility);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;