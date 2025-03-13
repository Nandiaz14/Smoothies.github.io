function showDetails(menu) {
  const details = document.getElementById("menu-details");
  switch (menu) {
    case "menu1":
      details.innerHTML =
        "<h2>Nasi Goreng</h2><p>Nasi goreng adalah hidangan nasi yang digoreng dengan bumbu dan bahan lainnya.</p>";
      break;
    case "menu2":
      details.innerHTML =
        "<h2>Mie Ayam</h2><p>Mie ayam adalah hidangan mie yang disajikan dengan potongan ayam dan kuah.</p>";
      break;
    case "menu3":
      details.innerHTML =
        "<h2>Sate Ayam</h2><p>Sate ayam adalah daging ayam yang ditusuk dan dibakar, biasanya disajikan dengan bumbu kacang.</p>";
      break;
    case "menu4":
      details.innerHTML =
        "<h2>Rendang</h2><p>Rendang adalah hidangan daging yang dimasak dengan rempah-rempah khas Indonesia.</p>";
      break;
    default:
      details.innerHTML = "";
  }
}
