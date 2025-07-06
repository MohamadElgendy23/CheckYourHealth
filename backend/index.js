require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const healthRouter = require("./routes/healthRoutes");
const app = express();

app.use(
  cors({
    origin: "https://example-frontend-w45h.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("/*splat", cors());

app.use(express.json());

app.use("/user", userRouter);
app.use("/health", healthRouter);

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Mongo DB Connection Established");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
