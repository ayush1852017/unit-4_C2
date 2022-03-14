const app = require("./index");
const connect = require("./config/db");

app.listen(5000, async () => {
  try {
    await connect();
  } catch (error) {
    console.log("not authorized");
  }
  console.log("You are in port 5000");
});
