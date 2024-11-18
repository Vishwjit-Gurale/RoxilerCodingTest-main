const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGODB_URL;

app.use(cors());


mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log(`Connected to ${mongoUrl}`);
  })
  .catch((err) => {
    console.log(err);
  });

const transactionRoutes = require("./routes/transactionRoutes");
app.use("/", transactionRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
