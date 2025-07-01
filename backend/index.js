const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Mongo DB Connection Established");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
