require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const healthRouter = require("./routes/healthRoutes");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/health", healthRouter);

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Mongo DB Connection Established");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
