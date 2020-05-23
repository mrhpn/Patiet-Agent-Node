require("express-async-errors");
const winston = require("winston");

module.exports = function () {
  winston.add(new winston.transports.File({ filename: "logfile.log" }), {
    level: "info",
  });

  process.on("uncaughtException", (ex) => {
    winston.error(ex.message, ex);
    process.exit(1);
  });

  process.on("unhandledRejection", (ex) => {
    winston.error(ex.message, ex);
    process.exit(1);
  });
};
