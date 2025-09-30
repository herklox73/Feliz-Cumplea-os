// Variables globales
let audio;

// Inicializar audio
function initAudio() {
  audio = new Audio("never.mp3");
  audio.loop = true; // La música se repetirá
}

// Función para mostrar el modal
function showModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("show");
  playMusic();
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("show");
  stopMusic();
}

// Función para reproducir música
function playMusic() {
  if (audio) {
    audio.play().catch((error) => {
      console.log("Error al reproducir el audio:", error);
    });
  }
}

// Función para detener la música
function stopMusic() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

// Animación del mensaje
function animateMessage() {
  const letters = document.querySelectorAll(".birthday-letter");
  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.style.opacity = "1";
      letter.style.transform = "translateY(0)";
    }, index * 300);
  });
}

// Event Listeners cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  initAudio();

  // Event listener para el botón de inicio
  const startButton = document.querySelector(".start-button");
  if (startButton) {
    startButton.addEventListener("click", showModal);
  }

  // Event listener para el botón de cerrar
  const closeButton = document.querySelector(".close-modal");
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  // Event listeners para el modal
  const modal = document.querySelector(".modal");
  if (modal) {
    // Listener para cerrar al hacer click fuera
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Listener para animar el mensaje cuando se muestre
    modal.addEventListener("transitionend", (e) => {
      if (e.propertyName === "opacity" && modal.classList.contains("show")) {
        animateMessage();
      }
    });
  }
});
