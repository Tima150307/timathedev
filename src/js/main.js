import Typewriter from 'typewriter-effect/dist/core';

// Wartet, bis die HTML-Seite geladen ist
document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Funktion, um den aktiven Nav-Link zu setzen ---
    const currentPage = window.location.pathname.split('/').pop(); // Holt z.B. "about.html"
    const navLinks = document.querySelectorAll("header nav a");

    navLinks.forEach((link) => {
        const linkHref = link.getAttribute("href").split('#')[0]; // Holt z.B. "about.html"

        if (currentPage === linkHref || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add("active");
        }
    });


    // --- 2. Typing-Effekt ---
    const typingElement = document.getElementById('typing-text');

    if (typingElement) {
        new Typewriter(typingElement, {
            strings: [
                'Auszubildender.',
                'Web-Entwickler.',
                'Problemlöser.',
                'Techjunky.'
            ],
            autoStart: true,
            loop: true,
            delay: 75,
        });
    }


    // --- 3. 2-Klick-Lösung für itch.io Games ---
    document.querySelectorAll('.load-game-btn').forEach(button => {

        button.addEventListener('click', (event) => {
            event.preventDefault();

            const placeholder = button.closest('.itch-embed-placeholder');
            const iframeSrc = placeholder.getAttribute('data-src');

            if (iframeSrc) {
                const iframe = document.createElement('iframe');
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('src', iframeSrc);
                iframe.setAttribute('width', '100%');
                iframe.setAttribute('height', '480');

                placeholder.parentNode.replaceChild(iframe, placeholder);
            }
        });
    });

});