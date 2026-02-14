// 1. Configuración de Lottie
var animation = lottie.loadAnimation({
  container: document.getElementById('lottie-hero'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json' // Tu archivo JSON de Lottie
});

// 2. Micro-interacción: Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // El punto sigue al mouse instantáneamente
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // El círculo externo tiene un "lag" suave (GSAP)
    gsap.to(cursorOutline, {
        x: posX,
        y: posY,
        duration: 0.15,
        ease: "power2.out"
    });
});

// 3. Efecto Magnético en Enlaces (Micro Interaction)
const hoverTriggers = document.querySelectorAll('.hover-trigger');

hoverTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
        gsap.to(cursorOutline, { scale: 2.5, opacity: 0.5, duration: 0.2 });
        gsap.to(cursorDot, { scale: 0, duration: 0.2 }); // El punto desaparece
    });
    trigger.addEventListener('mouseleave', () => {
        gsap.to(cursorOutline, { scale: 1, opacity: 1, duration: 0.2 });
        gsap.to(cursorDot, { scale: 1, duration: 0.2 });
    });
});

// 4. Reveal Text al Cargar
gsap.from(".reveal-text", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
});