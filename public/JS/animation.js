/*const devisBtn = document.querySelector('.header-button');
devisBtn.addEventListener('mouseenter', () => {
    devisBtn.classList.add('stop-animation');
});
devisBtn.addEventListener('mouseleave', () => {
    devisBtn.classList.remove('stop-animation');
});*/






// ANIMATION PROJETS    
    const observerProjets = new IntersectionObserver(entries => {
    entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observerProjets.unobserve(entry.target); 
            }
        });
        }, {
            threshold: 0.2
        });

    // Corrected selector
    document.querySelectorAll('.projets-animation').forEach(section => {
        observerProjets.observe(section);
    });




// ANIMATION ETAPES PAR ETAPES
const observerEtapes = new IntersectionObserver(entries => {
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
    document.querySelectorAll('.etapes-item').forEach(section => {
        observerEtapes.observe(section);
    });





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

        document.querySelectorAll('.pricing').forEach(section => {
            observerTarifs.observe(section);
    });



// ANIMATION CONTACT
const observerContact = new IntersectionObserver(entries => {
    entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observerContact.unobserve(entry.target); // Arrête d'observer l'élément une fois qu'il est visible
            }
        });
        }, {
            threshold: 0.2
        });

        // Sélectionne chaque élément à observer
        document.querySelectorAll('.contact').forEach(section => {
            observerContact.observe(section);
    });