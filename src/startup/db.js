const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/patientanent", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to the database."))
    .catch(() => console.error("Could not connect to the database..."));
};
