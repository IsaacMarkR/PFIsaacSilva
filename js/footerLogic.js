const footer = document.querySelector('.footer-faded');

function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight; // Altura de la ventana del navegador
    const pageHeight = document.body.clientHeight; // Altura total de la página
    const triggerPosition = pageHeight - windowHeight; // Scroll hasta el final de la página
    const opacity = Math.min(scrollPosition / triggerPosition, 1); // Opacidad 0 al principio y 1 al final
    footer.style.opacity = opacity.toString();
}

document.addEventListener('scroll', handleScroll);