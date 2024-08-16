let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let certificateSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
});

module.exports = mongoose.model("Certificate", certificateSchema);
