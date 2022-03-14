const mongoose = require("mongoose");

const fixedAccountSchema = new mongoose.Schema(
  {
    accountNumber: { type: Number, unique: true, required: true, dropUups: true },
    balance: { type: String, required: true },
    intrestRate: { type: String, required: true },
    startDate: { type: Date, required: true },
    maturityDate: { type: Date, required: true },
  },
  {
    versionKey: false,
    timeStamps: true,
  },
);

module.exports = mongoose.model("fixedaccount", fixedAccountSchema);
