const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    IFSC: { type: String, required: true },
    MICR: { type: Number, require: true },
  },
  {
    versionKey: false,
    timeStamps: true,
  },
);

module.exports = mongoose.model("branch", branchSchema);
