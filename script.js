
document.addEventListener("DOMContentLoaded", function () {
  // Menampilkan tahun secara otomatis
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Mengganti tema terang dan gelap
  const themeButton = document.getElementById("themeButton");

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Tema Terang";
      } else {
        themeButton.textContent = "🌙 Tema Gelap";
      }
    });
  }

  // Tombol untuk menampilkan detail CV
  document.querySelectorAll(".detailButton").forEach(function (button) {
    button.addEventListener("click", function () {
      const detail = button.nextElementSibling;

      if (detail) {
        const isHidden = detail.hidden;
        detail.hidden = !isHidden;
        button.textContent = isHidden
          ? "Sembunyikan Detail"
          : "Lihat Detail CV";
      }
    });
  });
});
