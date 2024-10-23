const btnKaydet = document.getElementById("btnKaydet");
const btnSil = document.getElementById("btnSil");

btnKaydet.addEventListener("click", () => {
  const kullaniciAdi = document.getElementById("kullaniciAdi");
  if (kullaniciAdi) sessionStorage.setItem("kullaniciAdi", kullaniciAdi);

  //todo timeout
  setTimeout(() => {
    sessionStorage.removeItem("kullaniciAdi");
  }, 30000);
});

btnSil.addEventListener("click", () => {
  sessionStorage.removeItem("kullaniciAdi");
});
