const displayMedicines = (medicines) => {
  document.getElementById("medicine").innerHTML = "";
  medicines.map((ele) => {
    let img = document.createElement("img");
    img.src = ele.img;
    img.setAttribute("id", "img");
    let medicine = document.createElement("h2");
    medicine.innerHTML = ele.medicine;
    medicine.setAttribute("id", "medicine");
    let title = document.createElement("h4");
    title.innerHTML = ele.title;
    title.setAttribute("id", "title");
    let unit = document.createElement("h5");
    unit.innerHTML = ele.unit;
    unit.setAttribute("id", "unit");
    let price = document.createElement("h3");
    price.innerHTML = ele.price;
    price.setAttribute("id", "price");
    let description = document.createElement("p");
    description.innerHTML = ele.description;
    description.setAttribute("id", "description");
    let div = document.createElement("div");
    div.append(img, medicine, title, unit, price, description);
    document.getElementById("medicine").append(div);
  });
};

const getMedicines = async () => {
  fetch("http://127.0.0.1:8090/medicine/allMedicine")
    .then((res) => res.json())
    .then((medicine) => displayMedicines(medicine))
    .catch((err) => console.log(err.message));
};

getMedicines();
