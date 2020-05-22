const validate = require("../middlewares/validate");
const register = require("../controllers/register");
const contact = require("../controllers/contact");
const home = require("../controllers/home");
const notFound = require("../controllers/404");

module.exports = function (app) {
  app.post("/register", validate, register);
  app.get("/contact", contact);
  app.get("/", home);
  app.get("*", notFound);
};
