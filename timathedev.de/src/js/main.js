// Wartet, bis die HTML-Seite geladen ist
document.addEventListener("DOMContentLoaded", () => {

    // Funktion, um HTML-Komponenten zu laden
    const loadComponent = (id, url) => {
        fetch(url)
            .then((response) => response.text())
            .then((data) => {
                // Findet das Element und füllt es mit dem HTML
                const element = document.getElementById(id);
                if (element) {
                    element.innerHTML = data;
                }
            })
            .then(() => {
                // Nach dem Laden des Headers, führen wir das Active-Skript aus
                if (id === 'header-placeholder') {
                    setActiveNavLink();
                }
            })
            .catch((error) => console.error(`Error loading component ${url}:`, error));
    };

    // Funktion, um den aktiven Nav-Link zu setzen
    const setActiveNavLink = () => {
        const currentPage = window.location.pathname;
        const navLinks = document.querySelectorAll("header nav a");

        navLinks.forEach((link) => {
            const linkHref = link.getAttribute("href");

            // Genaue Prüfung für die Startseite
            if (currentPage === '/' || currentPage === '/index.html') {
                if (linkHref === '/') {
                    link.classList.add("active");
                }
            }
            // Prüfung für alle anderen Seiten
            else if (linkHref !== "/" && currentPage.includes(linkHref)) {
                link.classList.add("active");
            }
        });
    };

    // Lade Header und Footer in die Platzhalter
    loadComponent("header-placeholder", "/components/header.html");
    loadComponent("footer-placeholder", "/components/footer.html");

});