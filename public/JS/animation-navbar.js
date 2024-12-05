
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Vérifie si le défilement est supérieur à 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Sélectionne tous les liens dans l'offcanvas
document.querySelectorAll('.offcanvas-body a').forEach(link => {
    link.addEventListener('click', () => {
        const offcanvasElement = document.querySelector('#offcanvasRight');
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
        offcanvasInstance.hide();  // Ferme l'offcanvas après un clic
    });
});
