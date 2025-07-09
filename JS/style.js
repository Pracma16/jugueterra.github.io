// Obtener elementos del DOM
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Al hacer clic en el botón hamburguesa
if (hamburger) {
  hamburger.addEventListener('click', () => {
    // Alterna la visibilidad del menú
    menu.classList.toggle('show');
    
    // Alterna la animación del botón hamburguesa a X
    hamburger.classList.toggle('active');
  });
}

//Slider categorias

const track = document.getElementById("categoriasTrack");
const prevBtn = document.getElementById("slider-prev");
const nextBtn = document.getElementById("slider-next");

// Scroll manual
prevBtn.addEventListener("click", () => {
  track.scrollBy({ left: -200, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  track.scrollBy({ left: 200, behavior: "smooth" });
});

// Autoplay solo en mobile
let autoplay = () => {
  if (window.innerWidth < 1024) {
    setInterval(() => {
      if (track.scrollLeft + track.offsetWidth >= track.scrollWidth - 5) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: 200, behavior: "smooth" });
      }
    }, 3500);
  }
};

autoplay();
