
// ANIMATION TARIFS  
   const observerTarifs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerTarifs.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.pricing.section').forEach(section => {
    observerTarifs.observe(section);
});



        // EN SAVOIR PLUS TARIFS

document.querySelector('.show-more').addEventListener('click', function(e) {
    e.preventDefault();
    var ul = this.previousElementSibling;
    ul.classList.toggle('expanded');
    this.textContent = ul.classList.contains('expanded') ? 'Montrer moins' : 'En savoir plus';
});

