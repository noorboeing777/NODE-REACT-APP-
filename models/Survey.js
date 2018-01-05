const mongoose = require("mongoose");
const recipient = require("./Recipient");

const surveySchema = mongoose.Schema({
  title: { type: String },
  sender: { type: String },
  body: { type: String },
  subject: { type: String },
  recipients: [recipient],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dateSent: { type: Date },
  lastResponded: { type: Date }
});
module.exports = mongoose.model("Survey", surveySchema);
