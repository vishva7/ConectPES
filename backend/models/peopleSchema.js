let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let peopleSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  link: { type: String },
});

module.exports = mongoose.model("People", peopleSchema);
