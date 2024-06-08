let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let eventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  registrationLink: { type: String },
  image: { type: String, required: true },
  upcoming: { type: Boolean, required: true },
});

module.exports = mongoose.model("Event", eventSchema);
