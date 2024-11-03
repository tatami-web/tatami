function animateLogo() {
    const logo = document.querySelector('.logo');
    logo.style.transform = "scale(1.2) rotate(360deg)";
    setTimeout(() => {
        logo.style.transform = "scale(1) rotate(0deg)";
    }, 600);
}
