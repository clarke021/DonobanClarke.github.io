onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    function createShootingStar() {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.top = Math.random() * 60 + '%';
      star.style.animationDelay = '0s';
      star.style.animationDuration = (Math.random() * 1.5 + 2) + 's';

      document.querySelector('.shooting-stars').appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 4000);
    }

    setInterval(() => {
      if (Math.random() > 0.3) {
        createShootingStar();
      }
    }, Math.random() * 5000 + 3000);

    clearTimeout(c);
  }, 1000);
};



//musica
window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");

    const tryPlay = () => {
        audio.muted = false;     
        audio.volume = 0.5;      
        audio.play().catch(() => {});
    };

    setTimeout(tryPlay, 1000);

    window.addEventListener("click", () => {
        tryPlay();
    }, { once: true });
});

const welcomeScreen = document.getElementById("welcome-screen");
const audio = document.getElementById("bg-music");

welcomeScreen.addEventListener("click", () => {
    // Reproducir música
    audio.muted = false;
    audio.volume = 0.5;
    audio.play().catch(() => {});

    // Ocultar pantalla de bienvenida
    welcomeScreen.classList.add("hidden");
});
