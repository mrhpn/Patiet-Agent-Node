const { Registeration } = require("../models/registeration");

module.exports = async (req, res) => {
  let registeration = new Registeration({
    name: req.body.name,
    gender: req.body.gender,
    fatherName: req.body.fatherName,
    birthday: req.body.birthday,
    age: req.body.age,
    nrcState: req.body.nrcState,
    nrcTownship: req.body.nrcTownship,
    nrcType: req.body.nrcType,
    nrcNumber: req.body.nrcNumber,
    visitingDate: req.body.visitingDate,
    referalReason: req.body.referalReason,
    disease: req.body.disease,
    doctor: req.body.doctor,
    contactPersonName: req.body.contactPersonName,
    relation: req.body.relation,
    contactPersonPhone: req.body.contactPersonPhone,
  });

  registeration = await registeration.save();

  res.render("index", {
    success: true,
  });
};
