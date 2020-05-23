const mongoose = require("mongoose");

module.exports = function () {
  const db = config.get("db");
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to the database..."))
    .catch(() => console.error("Could not connect to the database..."));
};
