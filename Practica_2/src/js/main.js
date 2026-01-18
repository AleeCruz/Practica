document.addEventListener('DOMContentLoaded', () => {
    // ==================== Lógica del Carrusel ====================
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = Array.from(carouselTrack.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const navDotsContainer = document.querySelector('.carousel-nav-dots');

    let slideWidth = slides[0].getBoundingClientRect().width;
    let slideIndex = 0;

    // Coloca los slides uno al lado del otro
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    // Crea los puntos de navegación
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        dot.dataset.index = index;
        navDotsContainer.appendChild(dot);
    });
    const navDots = Array.from(navDotsContainer.children);

    const updateDots = (currentIndex) => {
        navDots.forEach(dot => dot.classList.remove('active'));
        navDots[currentIndex].classList.add('active');
    };

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('active-slide');
        targetSlide.classList.add('active-slide');
    };

    // Botón Siguiente
    nextButton.addEventListener('click', () => {
        const currentSlide = carouselTrack.querySelector('.active-slide') || slides[0];
        slideIndex = (slideIndex + 1) % slides.length;
        const targetSlide = slides[slideIndex];
        
        moveToSlide(carouselTrack, currentSlide, targetSlide);
        updateDots(slideIndex);
    });

    // Botón Anterior
    prevButton.addEventListener('click', () => {
        const currentSlide = carouselTrack.querySelector('.active-slide') || slides[0];
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        const targetSlide = slides[slideIndex];

        moveToSlide(carouselTrack, currentSlide, targetSlide);
        updateDots(slideIndex);
    });

    // Navegación por puntos
    navDotsContainer.addEventListener('click', e => {
        const targetDot = e.target.closest('.carousel-dot');
        if (!targetDot) return;

        const currentSlide = carouselTrack.querySelector('.active-slide') || slides[0];
        slideIndex = parseInt(targetDot.dataset.index);
        const targetSlide = slides[slideIndex];

        moveToSlide(carouselTrack, currentSlide, targetSlide);
        updateDots(slideIndex);
    });

    // Inicializar el carrusel
    slides[0].classList.add('active-slide');
    updateDots(0);

    // Ajustar slides en redimensionado (para que funcione en móvil)
    window.addEventListener('resize', () => {
        slideWidth = slides[0].getBoundingClientRect().width;
        slides.forEach(setSlidePosition);
        carouselTrack.style.transform = 'translateX(-' + slides[slideIndex].style.left + ')';
    });

    // Autoplay (opcional)
    setInterval(() => {
        nextButton.click();
    }, 5000); // Cambia de slide cada 5 segundos


    // ==================== Lógica del Menú Hamburguesa ====================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic fuera (opcional)
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    // Cerrar menú al redimensionar si está abierto (para pasar de móvil a desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});