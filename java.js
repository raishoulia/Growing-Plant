window.onload = () => {
  const openBtn = document.getElementById("openBtn");
  const opening = document.getElementById("opening");
  const body = document.body;
  const teks = document.getElementById("teksBunga");
  const music = document.getElementById("bg-music");
  const hint = document.getElementById("music-hint");

  openBtn.addEventListener("click", () => {
    // Hilangkan layar pembuka
    opening.style.opacity = "0";
    setTimeout(() => {
      opening.style.display = "none";

      // Mulai animasi bunga
      body.classList.remove("not-loaded");

      // Munculkan teks I LOVE YOU (fade-in)
      if (teks) teks.classList.add("show");

      // Putar musik
      music.play().catch(() => {
        hint.style.display = "block";
        document.addEventListener("click", () => {
          music.play();
          hint.style.display = "none";
        });
      });
    }, 1000);
  });
};
