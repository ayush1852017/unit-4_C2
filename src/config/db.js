const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://root:12345@cluster0.1rqfr.mongodb.net/banking?retryWrites=true&w=majority",
  );
};
module.exports = connect;
