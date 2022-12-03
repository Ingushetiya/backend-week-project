const express = require("express");
const mongoose = require("mongoose");

const morgan = require("morgan");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { PORT, MONGO_DB } = process.env;
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
mongoose
  .connect(MONGO_DB)
  .then(() => {
    console.log("Mongo connected");
  })
  .catch((e) => e.toString());

app.listen(PORT, () => {
  console.log(`Server start htpp://localhost:${PORT}`);
});