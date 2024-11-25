// Selección del logo y el footer
const logo = document.querySelector('.logo');
const footer = document.querySelector('footer');

// Función para animar el logo con una rotación extendida
function animateLogo() {
    logo.style.transform = "scale(1.2) rotate(720deg)"; // Aumenta el tamaño y rota más de 360 grados
    setTimeout(() => {
        logo.style.transform = "scale(1) rotate(0deg)"; // Restablece el tamaño y la rotación
    }, 600); // Duración de la animación
}

// Detecta si el dispositivo es táctil para definir el evento de interacción
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Asigna eventos según el tipo de dispositivo
if (isTouchDevice) {
    logo.addEventListener('touchstart', animateLogo); // Táctil: toca para animar
} else {
    logo.addEventListener('mouseover', animateLogo); // Mouse: pasa para animar
}

// Variables para manejar el estado del scroll
let lastScrollPosition = 0;

// Función para manejar el scroll y ocultar/mostrar el footer
function handleScroll() {
    const currentScrollPosition = window.scrollY; // Obtiene la posición actual del scroll

    if (currentScrollPosition > lastScrollPosition) {
        // Si el usuario hace scroll hacia abajo, oculta el footer
        footer.classList.add('hidden');
    } else {
        // Si el usuario hace scroll hacia arriba, muestra el footer
        footer.classList.remove('hidden');
    }

    // Actualiza la posición previa del scroll
    lastScrollPosition = currentScrollPosition;
}

// Escucha el evento de scroll en la ventana
window.addEventListener('scroll', handleScroll);
