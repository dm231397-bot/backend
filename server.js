const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://onebetoneclick_db_user:<onebetoneclickdbuser>@cluster1.zk4r2h5.mongodb.net/?appName=Cluster1");

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  res.json({ message: "User received", email });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
