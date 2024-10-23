const urunContainer = document.getElementById("urunContainer");
const mouseClick = document.getElementById("ekleBtn");

// function Click() {
//   let urunInput = document.createElement("input");
//   urunInput.setAttribute("type", "text");
//   urunContainer.appendChild(urunInput);

//   let urunLbl = document.createElement("label");
//   urunLbl.textContent = "ürün ekleyiniz;";
//   urunContainer.appendChild(urunLbl);
// }

// mouseClick.addEventListener("click", Click);

//--------------------------------------------------

// function Click() {
//   let urunInput = document.createElement("input");
//   urunInput.setAttribute("type", "text");
//   urunContainer.appendChild(urunInput);

//   let urunLbl = document.createElement("label");
//   urunLbl.textContent = "ürün ekleyiniz;";
//   urunContainer.appendChild(urunLbl);
// }

// mouseClick.addEventListener("DOMContentLoaded", Click);

//--------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const ekleBtn = document.querySelector("#ekleBtn");
  const urunContainer = document.querySelector("#urunContainer");

  ekleBtn.onclick = () => {
    const label = document.createElement("label");
    label.textContent = "Urun Adi:";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Urun adi giriniz:";

    urunContainer.appendChild(label);
    urunContainer.appendChild(input);
  };
});
