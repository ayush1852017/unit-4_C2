const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://root:12345@cluster0.1rqfr.mongodb.net/banking?retryWrites=true&w=majority",
  );
};

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

const User = mongoose.model("user", userSchema);

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

const Branch = mongoose.model("branch", branchSchema);

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

const Savingaccount = mongoose.model("savingaccount", savingAccountSchema);

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

const Fixedaccount = mongoose.model("fixedaccount", fixedAccountSchema);

// -----------CRUD----------------

app.get("/user", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.post("/user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});
app.post("/user/:uid", async (req, res) => {
  try {
    const user = await User.create(req.params.uid, req.body);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.patch("user/:uid", async (req, res) => {
  try {
    const user = await User.findByIDAndUpdate(req.params.uid, req.body).lean().exec();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// ------------Connect to server----------

app.listen(5000, async () => {
  try {
    await connect();
  } catch (error) {
    console.log("not authorized");
  }
  console.log("You are in port 5000");
});
