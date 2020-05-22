const mongoose = require("mongoose");

module.exports = (req, res) => {
  const registeration = {
    name: "Lisa John d",
    gender: "male",
    fatherName: "dddddd",
    birthday: "07-01-1970",
    age: "50",
    nrcState: "1",
    nrcTownship: "AAAAAA",
    nrcType: "N",
    nrcNumber: "333333",
    visitingDate: "28-05-2020",
    referalReason: "sdfsdfsdfsdfsdfsdfsdf",
    disease: "heart",
    doctor: "m-khin-maung-lwin",
    contactPersonName: "ffdsdsd",
    relation: "uncle",
    contactPersonPhone: "09232342323",
  };

  res.render("index", {
    success: true,
  });
};
