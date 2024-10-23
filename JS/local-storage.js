window.onload = function () {
  const storedName = localStorage.getItem("username");
  if (storedName) {
    document.getElementById("greeting").innerText = `Hoşgeldin : ${storedName}`;
  }
};
document.getElementById("saveButton").addEventListener("click", function () {
  const username = document.getElementById("username").value;

  if (username) {
    localStorage.setItem("username", username);
    document.getElementById("greeting").innerText = `Hoşgeldin : ${username}`;
  }
});

document.getElementById("clearButton").addEventListener("click", function () {
  localStorage.removeItem("username");
  document.getElementById("greeting").innerHTML = "";
  document.getElementById("username").innerHTML = "";
});
