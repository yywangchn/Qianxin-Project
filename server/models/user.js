const mongoose = require("mongoose");
const schema = mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String, require: true },
  phone: String,
});
module.exports = mongoose.model("User", schema);
