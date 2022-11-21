const convict = require("convict");

require("dotenv").config();

const { port, mongodb } = process.env;

const config = convict({
  port: {
    default: port,
    doc: "The port to bind.",
    env: "PORT",
    format: Number,
  },
  mongodb: {
    default: mongodb,
    doc: "The mongodb to bind.",
    format: String,
  },
});

config.validate({ allowed: "strict" });

module.exports = config;
