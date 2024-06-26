let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let peopleSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("People", peopleSchema);
