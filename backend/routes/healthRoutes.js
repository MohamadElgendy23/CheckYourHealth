const express = require("express");
const healthRouter = express.Router();
const verifyToken = require("../middleware/auth");

healthRouter.get("/", verifyToken, (req, res) => {
  res.status(200).json({ message: "Verified token successfully" });
});

module.exports = healthRouter;
