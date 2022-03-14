const express = require("express");
const app = express();

const userController = require("../controllers/user.controller");
const branchController = require("../controllers/branch.controller");
const savingaccountController = require("../controllers/savingAccount.controller");
const fixedaccountController = require("../controllers/fixedAccount.controller");

app.use(express.json());

app.use("/user", userController);
app.use("/branch", branchController);
app.use("/savingaccount".savingaccountController);
app.use("/fixedaccount", fixedaccountController);

module.exports = app;
