const logo = document.querySelector('.logo');

// Función para animar el logo rotando 360 grados
function animateLogo() {
    logo.style.transform = "scale(1.2) rotate(360deg)";
    setTimeout(() => {
        logo.style.transform = "scale(1) rotate(0deg)";
    }, 600);
}

// Detecta si el dispositivo es táctil
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Si el dispositivo es táctil, usa "touchstart", de lo contrario, usa "mouseover"
if (isTouchDevice) {
    logo.addEventListener('touchstart', animateLogo);
} else {
    logo.addEventListener('mouseover', animateLogo);
}

let lastScrollPosition = 0;
const footer = document.querySelector('footer');

// Escucha el evento de scroll
window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    // Si desplazamos hacia abajo, oculta el footer
    if (currentScrollPosition > lastScrollPosition) {
        footer.classList.add('hidden');
    } 
    // Si desplazamos hacia arriba, muestra el footer
    else {
        footer.classList.remove('hidden');
    }

    // Actualiza la posición del scroll
    lastScrollPosition = currentScrollPosition;
});
