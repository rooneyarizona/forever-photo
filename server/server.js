const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json()); 

app.use(cors());
app.use(bodyParser.json());

const photoRoutes = require("../server/routes/photos");
const userRoutes = require("../server/routes/users");

app.use("/api/photos", photoRoutes);
app.use("/api/users", userRoutes);

app.listen(5001, () => {
  console.log("Connected on port 5001");
});