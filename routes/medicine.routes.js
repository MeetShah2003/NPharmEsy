const { Router } = require("express");
const { medicinePage, addMedicine, displayMedicine, homeMedicinePage } = require("../controller/medicine.controller");
const { isAuth } = require("../middleware/auth.middleware");
const medicineRoute = Router();

// home page
medicineRoute.get("/",isAuth,medicinePage);

medicineRoute.post("/add",addMedicine);

// fetch all medicine
medicineRoute.get("/allmedicine",displayMedicine);

// display all medicine page
medicineRoute.get("/homeMedicine",homeMedicinePage);

module.exports = { medicineRoute };
