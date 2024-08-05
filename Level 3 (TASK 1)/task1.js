document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modalImage");
    var closeBtn = document.getElementsByClassName("close")[0];

    var thumbnails = document.getElementsByClassName("thumbnail");
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].onclick = function() {
            modal.style.display = "block";
            modalImage.src = this.src;
        }
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Slideshow functionality
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var slides = document.getElementsByClassName("slides");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
});