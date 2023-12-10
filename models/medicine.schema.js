const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  img:String,
  medicine: String,
  title: String,
  unit: String,
  price: Number,
  description: String,
});

const medicineModel = new mongoose.model("PharMedi", medicineSchema);

module.exports = { medicineModel };
