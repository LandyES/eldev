// ANIMATION SERVICES    
    const observerServices = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerServices.unobserve(entry.target); 
        }
    });
    }, {
        threshold: 0.2
    });

// Corrected selector
document.querySelectorAll('.section-services').forEach(section => {
    observerServices.observe(section);
});


