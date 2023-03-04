// npm
require("dotenv").config();
const express = require("express");

// imports
const logger = require("./src/middlewares/logger");
const router = require("./src/routers");

// vars
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(logger);

// routers
app.use(router);

// server
app.listen(PORT, () => {
  console.log(`Forma Gest API listening one port ${PORT}`);
});
