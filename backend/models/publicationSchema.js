let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let publicationSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  summary: { type: String, required: true },
  link: { type: String, required: true },
});

module.exports = mongoose.model("Publication", publicationSchema);
