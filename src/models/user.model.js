const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middletName: { type: String },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String },
    type: {
      customerId: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    versionKey: false,
    timeStamps: true,
  },
);

module.exports = mongoose.model("user", userSchema);
