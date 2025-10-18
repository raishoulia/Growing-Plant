
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);

    const music = document.getElementById("bg-music");
    music.play().catch(() => {
      const hint = document.getElementById("music-hint");
      hint.style.display = "block";
      document.addEventListener("click", () => {
        music.play();
        hint.style.display = "none";
      });
    });
  }, 1000);
};
