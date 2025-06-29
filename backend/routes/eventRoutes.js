const express = require("express");
const router = express.Router();
const Event = require("../models/eventSchema");
const { authenticateToken, requireAdmin } = require("../middleware/auth");

router.get("/all", async (req, res) => {
  try {
    let events = await Event.find({});
    console.log(events);
    res.status(200).send(events);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    let event = await Event.findById(req.params.id);
    console.log(event);
    res.status(200).send(event);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/create", authenticateToken, requireAdmin, async (req, res) => {
  let event = new Event({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    time: req.body.time,
    registrationLink: req.body.registrationLink,
    image: req.body.image,
    upcoming: Boolean(req.body.upcoming),
    position: Number(req.body.position),
  });
  try {
    let savedEvent = await event.save();
    res.status(201).send(savedEvent);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Could not create event");
  }
});

router.delete("/delete/:id", authenticateToken, requireAdmin, async (req, res) => {
  try {
    console.log(req.params.id);
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(deletedEvent);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/update/:id", authenticateToken, requireAdmin, async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
