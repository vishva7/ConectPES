let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let achievementSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  image: { type: String, required: true },
  position: { type: Number, required: true },
});

module.exports = mongoose.model("Achievement", achievementSchema);
