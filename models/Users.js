const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  googleId: { type: String },
  name: { type: String, default: "" },
  credit: { type: Number, default: 0 }
});
module.exports = mongoose.model("User", userSchema);
