const slideshow = document.querySelectorAll('.slideshow-container');
const slideDistance = window.screen.width / 1.5;

slideshow.forEach((slide) => {
    let containerMotion = slide.parentElement.getAttribute('data-slide-motion');

    if (containerMotion == "slide") {
      setInterval(function () {
        slide.scrollLeft += slideDistance;
      }, 5000);
    }
});

const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const submitBtn = document.getElementById('formbtn');

