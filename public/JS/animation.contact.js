// ANIMATION CONTACT
const observerContact = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerEtapes.unobserve(entry.target); // Arrête d'observer l'élément une fois qu'il est visible
        }
    });
}, {
    threshold: 0.2
});

// Sélectionne chaque élément à observer
document.querySelectorAll('.section-contact').forEach(section => {
    observerEtapes.observe(section);
});