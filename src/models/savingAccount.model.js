const mongoose = require("mongoose");

const savingAccountSchema = new mongoose.Schema(
  {
    accountNumber: { type: Number, unique: true, required: true, dropUups: true },
    balance: { type: String, required: true },
    intrestRate: { type: String, required: true },
  },
  {
    versionKey: false,
    timeStamps: true,
  },
);

module.exports = mongoose.model("savingaccount", savingAccountSchema);
