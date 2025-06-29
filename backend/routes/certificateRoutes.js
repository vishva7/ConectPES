const express = require("express");
const router = express.Router();
const Certificate = require("../models/certificateSchema");
const { authenticateToken, requireAdmin } = require("../middleware/auth");

router.get("/all", async (req, res) => {
  try {
    let certificates = await Certificate.find({});
    console.log(certificates);
    res.status(200).send(certificates);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let certificate = await Certificate.findById(req.params.id);
    if (certificate) {
      console.log(certificate);
      res.status(200).send(certificate);
    } else {
      res.status(404).send("Certificate not found!");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/create", authenticateToken, requireAdmin, async (req, res) => {
  let certificate = new Certificate({
    title: req.body.title,
    link: req.body.link,
  });
  try {
    let savedCertificate = await certificate.save();
    res.status(201).send(savedCertificate);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Could not create certificate");
  }
});

router.delete("/delete/:id", authenticateToken, requireAdmin, async (req, res) => {
  try {
    console.log(req.params.id);
    const deletedCertificate = await Certificate.findByIdAndDelete(
      req.params.id
    );
    if (!deletedCertificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }
    res.status(200).json(deletedCertificate);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/update/:id", authenticateToken, requireAdmin, async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const updatedCertificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updatedCertificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }
    res.status(200).json(updatedCertificate);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
