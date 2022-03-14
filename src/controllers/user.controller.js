const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const User = await model.find().lean().exec();
    return res.status(200).send(User);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("", async (req, res) => {
  try {
    const User = await model.create(req.body);
    return res.status(200).send(User);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.patch("/:uid", async (req, res) => {
  try {
    const User = await User.find().lean().exec();
    return res.status(200).send(User);
  } catch (error) {
    return res.status(500).send(error);
  }
});
