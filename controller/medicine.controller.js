const { medicineModel } = require("../models/medicine.schema");

const medicinePage = (req, res) => {
  res.render("addMedicine");
};

const addMedicine = async (req, res) => {
  try {
    let newMedicine = await medicineModel.create(req.body);
    return res.status(200).send(newMedicine);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const displayMedicine = async (req, res) => {
  try {
    let allMedicine = await medicineModel.find();
    return res.status(200).send(allMedicine);
  } catch (error) {
    return res.status(200).send({ message: error.message });
  }
};

const homeMedicinePage = (req, res) => {
  res.render("homeMedicine");
};

module.exports = {
  medicinePage,
  addMedicine,
  displayMedicine,
  homeMedicinePage,
};
