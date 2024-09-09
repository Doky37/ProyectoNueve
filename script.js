Console.log("Hola este es mi portafolio")

let currentIndex = 0;

const images = document.querySelectorAll('.carrusel-images img');
const totalImages = images.length;

function showSlide(index) {
    const offset = -index * 100;
    document.querySelector('.carrusel-images').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showSlide(currentIndex);
}

// Opcional: Automatizar el cambio de imágenes
setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos
