// Modal logic
var modal = document.getElementById("myModal");
var carouselItems = document.getElementsByClassName("carousel-item");
var currentSlide = 0;

// Show the modal
function showModal() {
    modal.style.display = "block";
    showSlide(currentSlide);
}

// Close the modal
var closeModalBtn = document.getElementsByClassName("close")[0];
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Change the current slide
function changeSlide(n) {
    currentSlide += n;
    if (currentSlide >= carouselItems.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = carouselItems.length - 1;
    }
    showSlide(currentSlide);
}

// Display the current slide
function showSlide(n) {
    for (var i = 0; i < carouselItems.length; i++) {
        carouselItems[i].style.transform = "translateX(" + (-n * 100) + "%)";
    }
}

// Trigger modal on click of a project
document.querySelectorAll('.bg-img-portfolio div').forEach(function (item) {
    item.addEventListener('click', showModal);
});
