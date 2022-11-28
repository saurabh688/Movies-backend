const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const movieRouter = require("./src/api/routes/movie");
const config = require("./config");
const app = express();
const port = config.get("port");
const mongodb = config.get("mongodb");

var corsOptions = {
  origin: true,
};

app.use(cors(corsOptions));

// middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// middleware for json body parsing
app.use(express.json({ limit: "50mb" }));

// Initialize modules server routes
app.use(movieRouter);

// Connecting with database
mongoose
  .connect(mongodb)
  .then((result) => {
    app.listen(port, () => {
      console.log("**************************************");
      console.log(`  Server is running on port ${port} `);
      console.log("**************************************");
    });
  })
  .catch((error) => {
    console.log(`Error in database connection`);
  });

  