const express = require("express");
const mongoose = require("mongoose");
const authRouter = require('./Router/authRouter')

const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(express.json())
app.use('/', authRouter)

require("dotenv").config();
const { PORT, MONGO_DB } = process.env;
app.use(cors());
app.use(morgan("dev"));
app.use(require('./Router'))


mongoose.connect(MONGO_DB)
  .then(() => {
    console.log("Mongo connected");
  })
  .catch((e) => e.toString());

app.listen(PORT, () => {
  console.log(`Server start http://localhost:${PORT}`);
});