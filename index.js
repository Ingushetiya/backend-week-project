const express = require("express");
const mongoose = require("mongoose");
const authRouter = require('./routers/authRouter')

const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(express.json())
app.use('/', authRouter)

require("dotenv").config();
const { PORT, MONGO_DB } = process.env;
app.use(cors());
app.use(morgan("dev"));

mongoose.connect(MONGO_DB)
  .then(() => {
    console.log("Mongo connected");
  })
  .catch((e) => e.toString());

app.listen(PORT, () => {
  console.log(`Server start http://localhost:${PORT}`);
});