require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const { PORT, DB_URL } = process.env;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(require("./routes"));

const connectAndStartServer = async () => {
  try {
    await mongoose.connect(DB_URL);

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(`Connect error ${error.toString()}`);
  }
};

connectAndStartServer();
