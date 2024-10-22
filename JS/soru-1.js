//Tıklama ile box rengi değiştirme
const boxClick = document.getElementById("box");
//const boxClick = document.querySelector("#box");

boxClick.onmouseover = () => (boxClick.style.backgroundColor = "green");

console.log("-".repeat(10));

boxClick.addEventListener("mouseout", () => {
  boxClick.style.backgroundColor = "pink";
});

console.log("-".repeat(10));

//Tıklamayla birlikte body arka plan değiştirme
function MouseOver() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const randomColor = `rgb(${red},${green},${blue})`;

  document.body.style.backgroundColor = randomColor;
}

console.log("-".repeat(10));

function KontrolEt() {
  let isim = document.getElementById("textId").value;
  if (isim == "") {
    alert("Olmaz öyle");
    return false;
  }
  return true;
}

console.log("-".repeat(10));

let meyveler = ["Armut", "Elma", "Ejder Meyvesi", "Karpuz", "Kiraz", "Mango"];
let liste = document.getElementById("liste");

meyveler.forEach((meyve) => {
  let liEtiketi = document.createElement("li");
  liEtiketi.textContent = meyve;
  liste.appendChild(liEtiketi);
  meyveler.sort().reverse();
});

var pictures = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=4",
  "https://picsum.photos/200/300?random=5",
  "https://picsum.photos/200/300?random=6",
  "https://picsum.photos/200/300?random=7",
  "https://picsum.photos/200/300?random=8",
  "https://picsum.photos/200/300?random=9",
  "https://picsum.photos/200/300?random=10",
  "https://picsum.photos/200/300?random=11",
  "https://picsum.photos/200/300?random=12",
];

var divList = document.getElementById("container");

pictures.forEach((picture) => {
  let imgTag = document.createElement("img");
  imgTag.src = picture;
  container.appendChild(imgTag);
});

// for (let i = 0; i < pictures.length; i++) {
//   let imgTag = document.createElement("img");
//   imgTag.src = picture[i];
//   container.appendChild(imgTag);
// }
