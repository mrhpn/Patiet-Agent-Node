const Joi = require("joi");

module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string()
      .min(4)
      .max(50)
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.empty":
              err.message = "Name is required";
              break;
            case "string.min":
              err.message = `Name: at least ${err.context.limit} characters required`;
              break;
            case "string.max":
              err.message = `Name: at most ${err.context.limit} characters allowed`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    gender: Joi.string()
      .valid("male", "female")
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.required":
            case "any.empty":
              err.message = "Gender is required";
              break;
            case "any.allowOnly":
              err.message = "Male or Female?";
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    fatherName: Joi.string()
      .min(4)
      .max(50)
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.empty":
              err.message = "Father name is required";
              break;
            case "string.min":
            case "string.max":
              err.message = `Father name: 4-50 characters`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    birthday: Joi.string()
      .regex(/^(\d{4})[-](0?[1-9]|1[012])[-](0?[1-9]|[12][0-9]|3[01])$/)
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.empty":
              err.message = "Birthday is required";
              break;
            case "string.regex.base":
              err.message = "Birthday: Pick from Calendar";
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    age: Joi.string()
      .max(110)
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.empty":
              err.message = "Age is required";
              break;
            case "string.max":
              err.message = `Age: valid age is required`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    nrcState: Joi.string()
      .regex(/^([1-9]|1[0-4])$/)
      .required()
      .error(() => ({
        message: "NRC: Fill valid state",
      })),
    nrcTownship: Joi.string()
      .regex(/^([A-Z]{6})$/)
      .required()
      .error(() => ({
        message: "NRC: Fill valid township",
      })),
    nrcType: Joi.string()
      .valid("N", "Y", "T")
      .required()
      .error(() => ({
        message: "NRC: Fill valid type",
      })),
    nrcNumber: Joi.string()
      .regex(/^[0-9]{6}$/)
      .required()
      .error(() => ({
        message: "NRC: Fill valid number",
      })),
    visitingDate: Joi.string()
      .regex(/^(\d{4})[-](0?[1-9]|1[012])[-](0?[1-9]|[12][0-9]|3[01])$/)
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.empty":
              err.message = "Visiting Date is required";
              break;
            case "string.regex.base":
              err.message = "Visiting Date: Pick from Calendar";
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    referalReason: Joi.string()
      .allow("")
      .max(250)
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "string.max":
              err.message = `RR: 250 characters allowed`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    disease: Joi.string()
      .valid("heart", "brain")
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.required":
            case "any.empty":
              err.message = "Disease is required";
              break;
            case "any.allowOnly":
              err.message = "Disease: Choose from the list";
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    doctor: Joi.string()
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.required":
            case "any.empty":
              err.message = "Doctor is required";
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    contactPersonName: Joi.string()
      .min(4)
      .max(50)
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.empty":
              err.message = "CPN-required";
              break;
            case "string.min":
            case "string.max":
              err.message = `CPN-length`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    relation: Joi.string()
      .valid("uncle", "aunty")
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          if (err !== undefined) {
            switch (err.type) {
              case "any.required":
              case "any.empty":
                err.message = "Relation-required";
                break;
              case "any.allowOnly":
                err.message = "Relation-allowOnly";
                break;
              default:
                break;
            }
          }
        });
        return errors;
      }),
    contactPersonPhone: Joi.string()
      .regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.empty":
              err.message = "Contact phone is required";
              break;
            case "string.regex.base":
              err.message = "Enter valid phone number";
              break;
            default:
              break;
          }
        });
        return errors;
      }),
  });

  const result = Joi.validate(req.body, schema);
  const errors = [];
  const oldValues = [];

  if (result.error) {
    const { message: msg } = result.error.details[0];

    if (msg.match(/^Name/i)) errors.name = msg;
    else if (msg.match(/^Gender/) || msg.match(/^Male/)) errors.gender = msg;
    else if (msg.match(/^Father/)) errors.fatherName = msg;
    else if (msg.match(/^Birthday/)) errors.birthday = msg;
    else if (msg.match(/^Age/)) errors.age = msg;
    else if (msg.match(/^NRC/)) errors.nrc = msg;
    else if (msg.match(/^Visiting/)) errors.visitingDate = msg;
    else if (msg.match(/^RR/)) errors.referalReason = msg;
    else if (msg.match(/^Disease/)) errors.disease = msg;
    else if (msg.match(/^Doctor/)) errors.doctor = msg;
    else if (msg.match(/^CPN-required$/)) errors.contactPersonName = "Required";
    else if (msg.match(/^CPN-length$/))
      errors.contactPersonName = "Must be 4-50 characters";
    else if (msg.match(/^Relation-required$/))
      errors.relation = "Relation is required";
    else if (msg.match(/^Relation-allowOnly$/))
      errors.relation = "Choose from list";
    else if (msg.match(/^Contact phone/) || msg.match(/valid phone/))
      errors.contactPersonPhone = msg;

    if (req.body.name) oldValues.name = req.body.name;
    if (req.body.gender) oldValues.gender = req.body.gender;
    if (req.body.fatherName) oldValues.fatherName = req.body.fatherName;
    if (req.body.birthday) oldValues.birthday = req.body.birthday;
    if (req.body.age) oldValues.age = req.body.age;
    if (req.body.visitingDate) oldValues.visitingDate = req.body.visitingDate;
    if (req.body.referalReason)
      oldValues.referalReason = req.body.referalReason;
    if (req.body.contactPersonName)
      oldValues.contactPersonName = req.body.contactPersonName;
    if (req.body.relation) oldValues.relation = req.body.relation;
    if (req.body.contactPersonPhone)
      oldValues.contactPersonPhone = req.body.contactPersonPhone;

    res.render("index", { oldValues, errors });
  }

  next();
};
