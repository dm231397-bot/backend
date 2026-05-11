const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use environment variable
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");

    // Start server ONLY after DB connects
    app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    });
  })
  .catch(err => {
    console.log("MongoDB Error ❌", err);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "User received",
    email
  });
});
