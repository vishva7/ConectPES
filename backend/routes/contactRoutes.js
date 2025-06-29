const express = require("express");
const router = express.Router();
const Contact = require("../models/contactSchema");
const { authenticateToken, requireAdmin } = require("../middleware/auth");

router.get("/all", async (req, res) => {
  try {
    let contacts = await Contact.find({});
    console.log(contacts);
    res.status(200).send(contacts);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.put("/update", authenticateToken, requireAdmin, async (req, res) => {
  try {
    const currentContact = await Contact.findOne({});
    const updatedContact = await Contact.findOneAndUpdate(
      currentContact,
      req.body
    );
    if (!updatedContact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
