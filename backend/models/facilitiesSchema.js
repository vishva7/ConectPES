let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let facilitesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  specs: { type: String, required: true },
});

module.exports = mongoose.model("Facilities", facilitesSchema);