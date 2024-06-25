let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let contactSchema = new Schema({
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("Contact", contactSchema);
