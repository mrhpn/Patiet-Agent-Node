const express = require("express");
const Handlebars = require("hbs");
const bodyParser = require("body-parser");
const validate = require("./middlewares/validate");
const registerController = require("../controllers/register");

const app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

Handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

app.post("/register", validate, registerController);

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
