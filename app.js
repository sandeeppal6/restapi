const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/Users");

const app = express();
const PORT = 5000;

mongoose.connect(
  "mongodb://localhost/user",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("connected to mongodb");
    }
  }
);

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/user", users);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
