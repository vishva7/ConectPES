let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let homeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Home", homeSchema);