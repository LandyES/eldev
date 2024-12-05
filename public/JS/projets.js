/*document.getElementById('webDevBtn').addEventListener('click', function() {
    document.getElementById('webDevSection').style.display = 'grid';
    document.getElementById('designSection').style.display = 'none';
});

document.getElementById('designBtn').addEventListener('click', function() {
    document.getElementById('webDevSection').style.display = 'none';
    document.getElementById('designSection').style.display = 'grid';
});*/

            // PROJETS SPA


document.addEventListener('DOMContentLoaded', function() {
    const webDevBtn = document.getElementById('webDevBtn');
    const webDevSection = document.getElementById('webDevSection');

    const designBtn = document.getElementById('designBtn');   
    const designSection = document.getElementById('designSection');

    const devResponsiveSection = document.getElementById('devResponsiveSection');

    webDevBtn.addEventListener('click', () => {
        webDevBtn.classList.add('active');
        webDevSection.classList.remove('hidden');

        devResponsiveSection.classList.remove('hidden');

        designBtn.classList.remove('active');
        designSection.classList.add('hidden'); 
    });
    designBtn.addEventListener('click', () => {
        webDevBtn.classList.remove('active');
        webDevSection.classList.add('hidden');

        devResponsiveSection.classList.add('hidden');

        designBtn.classList.add('active');
        designSection.classList.remove('hidden');
    });
    


    /*function showSection(sectionToShow, buttonToHighlight) {
        webDevSection.style.display = 'none';
        designSection.style.display = 'none';
        webDevBtn.classList.remove('active');
        designBtn.classList.remove('active');

        sectionToShow.style.display = 'grid';
        buttonToHighlight.classList.add('active');
    }

    webDevBtn.addEventListener('click', function() {
        showSection(webDevSection, webDevBtn);
    });

    designBtn.addEventListener('click', function() {
        showSection(designSection, designBtn);
    });

    // Initial display
    showSection(webDevSection, webDevBtn);*/
});



            // PRJETS CAROUSEL

/*document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel-image');
    const modalImage = document.getElementById('modalImage');

    carouselImages.forEach(image => {
        image.addEventListener('click', function() {
            modalImage.src = this.src;
            const myModal = new bootstrap.Modal(document.getElementById('imageModal'));
            myModal.show();
        });
    });
});*/


            // PROJET BTN
/*document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let offset = 0;
    const imageWidth = document.querySelector('.carousel-image').offsetWidth;
    const totalImages = document.querySelectorAll('.carousel-image').length / 2; // Total d'images avant duplication
    
    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${offset * imageWidth}px)`;
    }
    
    nextBtn.addEventListener('click', function() {
        if (offset < totalImages - 1) {
            offset++;
        } else {
            offset = 0; // Revenir au début après la dernière image
        }
        updateCarousel();
    });
    
    prevBtn.addEventListener('click', function() {
        if (offset > 0) {
            offset--;
        } else {
            offset = totalImages - 1; // Revenir à la fin avant le début
        }
        updateCarousel();
    });
});*/

document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let offset = 0; // Gérer la position actuelle de l'image
    const totalImages = document.querySelectorAll('.carousel-item').length;
    const imageWidth = document.querySelector('.carousel-item').offsetWidth;

    // Fonction pour mettre à jour la position du carrousel
    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${offset * (imageWidth + 10)}px)`; // Le +10 pour la marge droite
    }

    // Bouton suivant
    nextBtn.addEventListener('click', function() {
        if (offset < totalImages - 1) {
            offset++;
        } else {
            offset = 0; // Revenir à la première image après la dernière
        }
        updateCarousel();
    });

    // Bouton précédent
    prevBtn.addEventListener('click', function() {
        if (offset > 0) {
            offset--;
        } else {
            offset = totalImages - 1; // Aller à la dernière image avant la première
        }
        updateCarousel();
    });

    // Gestion du clic sur les images pour ouvrir dans le modal
    const carouselImages = document.querySelectorAll('.carousel-image');
    const modalImage = document.getElementById('modalImage');

    carouselImages.forEach(image => {
        image.addEventListener('click', function() {
            modalImage.src = this.src;
            const myModal = new bootstrap.Modal(document.getElementById('imageModal'));
            myModal.show();
        });
    });
});

                /* BOUTTON PROJETS */

const site1Button = document.getElementById('site-1-btn');
const site1Section = document.getElementById('site-1-section');

const site2Button = document.getElementById('site-2-btn');
const site2Section = document.getElementById('site-2-section');

const site3Button = document.getElementById('site-3-btn');
const site3Section = document.getElementById('site-3-section');

const site4Button = document.getElementById('site-4-btn');
const site4Section = document.getElementById('site-4-section');


site1Button.addEventListener('click', () => {
    site1Button.classList.add('active');
    site1Section.classList.remove('hidden');

    site2Button.classList.remove('active');
    site2Section.classList.add('hidden'); 

    site3Button.classList.remove('active');
    site3Section.classList.add('hidden');

    site4Button.classList.remove('active');
    site4Section.classList.add('hidden'); 
});

site2Button.addEventListener('click', () => {
    site1Button.classList.remove('active');
    site1Section.classList.add('hidden');

    site2Button.classList.add('active');
    site2Section.classList.remove('hidden'); 

    site3Button.classList.remove('active');
    site3Section.classList.add('hidden');

    site4Button.classList.remove('active');
    site4Section.classList.add('hidden'); 
});

site3Button.addEventListener('click', () => {
    site1Button.classList.remove('active');
    site1Section.classList.add('hidden');

    site2Button.classList.remove('active');
    site2Section.classList.add('hidden'); 

    site3Button.classList.add('active');
    site3Section.classList.remove('hidden');

    site4Button.classList.remove('active');
    site4Section.classList.add('hidden'); 
});

site4Button.addEventListener('click', () => {
    site1Button.classList.remove('active');
    site1Section.classList.add('hidden');

    site2Button.classList.remove('active');
    site2Section.classList.add('hidden'); 

    site3Button.classList.remove('active');
    site3Section.classList.add('hidden');

    site4Button.classList.add('active');
    site4Section.classList.remove('hidden'); 
});


            /* BTN PROJETS GRAPHIQUES */
const logosButton = document.getElementById('btn-logos-graphiques');
const logosSection = document.getElementById('section-logos-graphiques');

const visitesButton = document.getElementById('btn-visites-graphiques');
const visitesSection = document.getElementById('section-visites-graphiques');

const flyerButton = document.getElementById('btn-flyer-graphiques');
const flyerSection = document.getElementById('section-flyer-graphiques');

logosButton.addEventListener('click', () => {
    logosButton.classList.add('active');
    logosSection.classList.remove('hidden');

    visitesButton.classList.remove('active');
    visitesSection.classList.add('hidden'); 

    flyerButton.classList.remove('active');
    flyerSection.classList.add('hidden');
});

visitesButton.addEventListener('click', () => {
    logosButton.classList.remove('active');
    logosSection.classList.add('hidden');

    visitesButton.classList.add('active');
    visitesSection.classList.remove('hidden'); 

    flyerButton.classList.remove('active');
    flyerSection.classList.add('hidden');
});

flyerButton.addEventListener('click', () => {
    logosButton.classList.remove('active');
    logosSection.classList.add('hidden');

    visitesButton.classList.remove('active');
    visitesSection.classList.add('hidden'); 

    flyerButton.classList.add('active');
    flyerSection.classList.remove('hidden');
});


            /* PORTFOLIO 3D */
/*let currentAngle = 0;
const carousel = document.getElementById("portfolio-3d");

// Fonction pour tourner le carrousel
  function rotateCarousel(direction) {
    currentAngle += direction * 90;
    carousel.style.transform = `rotateY(${currentAngle}deg)`;
  }

// Variables pour capturer le glissement tactile
  let startX = 0;
  let endX = 0;

  // Gestion des événements tactiles
  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", () => {
    if (startX - endX > 50) {
      rotateCarousel(1); // Vers la gauche
    } else if (endX - startX < 50) {
      rotateCarousel(-1); // Vers la droite
    }
    startX = endX = 0; // Réinitialiser
  })*/






                // CAROUSEL SLIDE

const carousel = document.getElementById("carousel_slide");
let position = 1; // Position initiale (slide 1 active)
const totalItems = 4; // Nombre total d'éléments
let startX = 0; // Position de départ du toucher
let isDragging = false; // État de glissement

// Fonction pour changer la position active
function updatePosition(newPosition) {
  position = newPosition;

  // Boucle si on dépasse les limites
  //if (position < 1) {
    //position = totalItems;
  //} else if (position > totalItems) {
    //position = 4;
  //}
  if (position > totalItems) {
    position = 4;
}

  // Met à jour la variable CSS
  carousel.style.setProperty("--position", position);
}

// Commence le suivi du glissement
function startDrag(event) {
  isDragging = true;
  startX = event.touches ? event.touches[0].clientX : event.clientX; // Position initiale
  carousel.style.transition = "none";
}

// Suit le déplacement
function dragCarousel(event) {
  if (!isDragging) return;

  const currentX = event.touches ? event.touches[0].clientX : event.clientX;
  const deltaX = currentX - startX;

  // Déplacement en tps réelle
    //track.style.transform = `translateX(calc(-1 * var(--position) * 100% + ${deltaX}px))`;


  // Si le mouvement est significatif, change la position
  if (deltaX > 50) {
    updatePosition(position - 1); // Glissement à droite
    isDragging = false; // Stop le glissement
  } else if (deltaX < -50) {
    updatePosition(position + 1); // Glissement à gauche
    isDragging = false; // Stop le glissement
  }
}

// Termine le suivi du glissement
function stopDrag() {
  isDragging = false;
}

// Écouteurs pour les événements tactiles
carousel.addEventListener("touchstart", startDrag);
carousel.addEventListener("touchmove", dragCarousel);
carousel.addEventListener("touchend", stopDrag);

// Écouteurs pour la souris (optionnel, pour desktop)
carousel.addEventListener("mousedown", startDrag);
carousel.addEventListener("mousemove", dragCarousel);
carousel.addEventListener("mouseup", stopDrag);




                    // ANIMATION SWIPE 


document.addEventListener("DOMContentLoaded", () => {
  const swipeIndicator = document.getElementById("swipe-indicator");
  const carouselSection = document.getElementById("container_carousel_slide");
  let userHasInteracted = false;

  // Fonction pour détecter si la section est visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !userHasInteracted) {
        swipeIndicator.classList.remove("hidden");
      }
    });
  });

  observer.observe(carouselSection);

  // Fonction pour cacher le GIF avec une transition fluide
  const hideIndicator = () => {
    if (!userHasInteracted) {
      userHasInteracted = true;

      // Ajouter la classe pour lancer la transition
      swipeIndicator.classList.add("hidden");

      // Supprimer le GIF du DOM après la durée de la transition (0.8s)
      setTimeout(() => {
        swipeIndicator.style.display = "none";
      }, 3000); // Assurez-vous que cette durée correspond à celle définie dans le CSS
    }
  };

  // Écouteurs pour détecter clic ou swipe
  const carousel = document.getElementById("carousel_slide");

  carousel.addEventListener("click", hideIndicator);

  carousel.addEventListener("touchstart", hideIndicator);
});




