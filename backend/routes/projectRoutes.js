const express = require("express");
const router = express.Router();
const Project = require("../models/projectSchema");

router.get("/all", async (req, res) => {
  try {
    let projects = await Project.find({});
    console.log(projects);
    res.status(200).send(projects);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    let project = await Project.findById(req.params.id);
    res.status(200).send(project);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/create", async (req, res) => {
  let project = new Project({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    available: req.body.available,
  });
  try {
    let savedProject = await project.save();
    res.status(200).send(savedProject);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Could not create project");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(deletedProject);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const updatedProject = await Project.findByIdAndUpdate(req.params.id);
    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
