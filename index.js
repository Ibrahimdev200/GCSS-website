function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "navbar-lists") {
        x.className += " responsive";
    } else {
        x.className = "navbar-lists";
    }
}

const scrollLinks = document.querySelectorAll('.navbar-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
            const targetElement = document.getElementById(targetId.substring(1));
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            } else {
                console.error(`Element with id '${targetId.substring(1)}' not found.`);
            }
        } else {
            console.error('No href attribute found.');
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const imageWrappers = document.querySelectorAll(".main-image-wrapper");
    let currentIndex = Math.floor(Math.random() * imageWrappers.length);
    imageWrappers[currentIndex].classList.add("active");

    let randomInterval = 5000; // 5 seconds
    let carouselInterval = setInterval(showNextImage, randomInterval);

    function showNextImage() {
        imageWrappers[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % imageWrappers.length;
        imageWrappers[currentIndex].classList.add("active");
    }

    document.querySelector(".carousel-next-btn").addEventListener("click", function() {
        clearInterval(carouselInterval); // Stop the auto-slideshow
        showNextImage(); // Show the next image immediately
        carouselInterval = setInterval(showNextImage, randomInterval); // Restart the auto-slideshow
    });
});
