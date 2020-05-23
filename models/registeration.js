const mongoose = require("mongoose");

const registerationSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 4,
    max: 50,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  fatherName: {
    type: String,
    min: 4,
    max: 50,
    required: true,
  },
  birthday: {
    type: Date,
    min: "1920-01-01",
    max: Date.now,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  nrcState: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    required: true,
  },
  nrcTownship: {
    type: String,
    required: true,
  },
  nrcType: {
    type: String,
    enum: ["N", "Y", "T"],
    required: true,
  },
  nrcNumber: {
    type: String,
    required: true,
  },
  visitingDate: {
    type: Date,
    required: true,
  },
  referalReason: {
    type: String,
    max: 255,
  },
  disease: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  contactPersonName: {
    type: String,
    min: 4,
    max: 50,
    required: true,
  },
  relation: {
    type: String,
  },
  contactPersonPhone: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  hasSent: {
    type: Boolean,
    default: false,
  },
});

const Registeration = mongoose.model("Registeration", registerationSchema);

module.exports.Registeration = Registeration;
