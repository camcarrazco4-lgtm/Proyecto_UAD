// ============================================================
// WEBRING FUNCIONAL
// "anterior" / "siguiente" ciclan por sitios reales relacionados
// (índices de Neocities que existen de verdad, no inventados).
// "al azar" ya NO se maneja aquí: es un <a> directo en el HTML que
// apunta a https://randomsite.neocities.org/, un redirector hecho
// por otro usuario de Neocities que sí manda a un sitio real al
// azar de TODO Neocities (no una lista curada por nosotros).
// ============================================================
const webringSites = [
  { name: "Weird Website Lovers Webring", url: "https://weirdwebsitelovers.neocities.org/" },
  { name: "Neocities · sitios etiquetados 'surreal'", url: "https://neocities.org/browse?tag=surreal" },
  { name: "Neocities · webrings activos", url: "https://neocities.org/browse?tag=webrings" },
];

let webringIndex = 0;

function actualizarWebringTexto() {
  const label = document.getElementById("webring-current");
  if (label) {
    label.textContent = `nodo 04 · viendo: ${webringSites[webringIndex].name}`;
  }
}

function irASitio(offset) {
  webringIndex = (webringIndex + offset + webringSites.length) % webringSites.length;
  actualizarWebringTexto();
  window.open(webringSites[webringIndex].url, "_blank", "noopener");
}

document.getElementById("webring-prev")?.addEventListener("click", () => irASitio(-1));
document.getElementById("webring-next")?.addEventListener("click", () => irASitio(1));

// ============================================================
// LIGHTBOX DE LA GALERÍA
// ============================================================
// ============================================================
// LIGHTBOX DE LA GALERÍA
// ============================================================
const lightbox = document.getElementById("lightbox");
const lightboxShape = document.getElementById("lightbox-shape");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");

document.querySelectorAll(".art-shape").forEach((shape) => {
  shape.addEventListener("click", () => {
    const style = window.getComputedStyle(shape);
    const bgImage = style.backgroundImage;

    // Todas las imágenes ahora llevan la clase fill por defecto
    lightboxShape.className = "lightbox-shape lightbox-shape-fill";
    
    lightboxShape.style.backgroundImage = bgImage;
    lightboxCaption.textContent = shape.dataset.caption || "";
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden"; // bloquea el scroll de atrás
  });
});

function cerrarLightbox() {
  lightbox.classList.remove("is-open");
  lightboxShape.style.backgroundImage = "";
  document.body.style.overflow = ""; // devuelve el scroll normal
}

lightboxClose?.addEventListener("click", cerrarLightbox);
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) cerrarLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarLightbox();
});

// ============================================================
// VIDEO: al reproducir, se pausa la música de fondo.
// ============================================================
const videoEl = document.getElementById("video-el");
const bgAudio = document.getElementById("bg-audio");

function intentarReproducirMusica() {
  if (!bgAudio) return;
  bgAudio.play().catch(() => {
    // Si autoplay está bloqueado, se intentará en la primera interacción.
  });
}

if (bgAudio) {
  intentarReproducirMusica();

  const activarEnPrimeraInteraccion = () => {
    intentarReproducirMusica();
    window.removeEventListener("pointerdown", activarEnPrimeraInteraccion);
    window.removeEventListener("keydown", activarEnPrimeraInteraccion);
    window.removeEventListener("touchstart", activarEnPrimeraInteraccion);
  };

  window.addEventListener("pointerdown", activarEnPrimeraInteraccion, { once: true });
  window.addEventListener("keydown", activarEnPrimeraInteraccion, { once: true });
  window.addEventListener("touchstart", activarEnPrimeraInteraccion, { once: true });
}

videoEl?.addEventListener("loadedmetadata", () => {
  videoEl.currentTime = 1;
});

videoEl?.addEventListener("play", () => {
  bgAudio?.pause();
});

function reanudarMusicaSiCorresponde() {
  if (!bgAudio) return;
  if (videoEl && !videoEl.paused && !videoEl.ended) return;

  bgAudio.play().catch(() => {
    // Algunos navegadores bloquean autoplay sin interacción.
  });
}

videoEl?.addEventListener("pause", reanudarMusicaSiCorresponde);
videoEl?.addEventListener("ended", reanudarMusicaSiCorresponde);

const bgAudio = document.getElementById("bg-audio");
const audioPrompt = document.getElementById("audio-prompt");
const btnActivarAudio = document.getElementById("btn-activar-audio");

btnActivarAudio?.addEventListener("click", () => {
  if (bgAudio) {
    bgAudio.play().then(() => {
      // Ocultado por fuerza bruta
      if (audioPrompt) {
        audioPrompt.style.display = "none";
      }
    }).catch((err) => {
      console.log("Error al reproducir audio:", err);
    });
  }
});
