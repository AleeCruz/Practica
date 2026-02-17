const track = document.getElementById('track');
const slides = Array.from(track.children);
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dotsContainer = document.getElementById('dotsContainer');

let index = 0;

// 1. Crear los puntos automáticamente según el nº de imágenes
slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateUI() {
    // Mover el carrusel
    track.style.transform = `translateX(-${index * 100}%)`;
    
    // Actualizar puntos
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function goToSlide(targetIndex) {
    index = targetIndex;
    updateUI();
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length; // Si llega al final, vuelve a 0
    updateUI();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length; // Si retrocede del inicio, va al final
    updateUI();
});

// Extra: Auto-play cada 5 segundos
setInterval(() => {
    nextBtn.click();
}, 5000);



document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
});