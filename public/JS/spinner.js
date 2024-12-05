document.addEventListener("DOMContentLoaded", function() {
    // Délai avant d'afficher la page (ici 2 secondes)
    setTimeout(function() {
        // Masquer le spinner
        document.getElementById('spinner').style.display = 'none';
        
        // Faire apparaître le contenu de la page avec un effet fade
        document.getElementById('content').classList.add('show-content');
    }, 300); // 2000ms = 2 secondes
});



// Sélectionne toutes les images qui doivent être cliquées pour ouvrir la modal
const images = document.querySelectorAll('.section-projets img');

// Sélectionne l'élément image à l'intérieur de la modal
const modalImage = document.getElementById('modalImage');

// Boucle sur chaque image et ajoute un écouteur d'événement 'click'
images.forEach(image => {
  image.addEventListener('click', function() {
    // Récupère le chemin 'src' de l'image cliquée
    const imgSrc = this.getAttribute('src');
    
    // Mets à jour le 'src' de l'image dans la modal avec celui de l'image cliquée
    modalImage.setAttribute('src', imgSrc);
  });
});




                // CAROUSEL MANUELLE

$(document).ready(function () {
  $("#news-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    navigation: true,
    navigationText: ["", ""],
    pagination: true,
    autoPlay: true
  });
});
