const slideshow = document.querySelectorAll('.slideshow-container');
const slideDistance = window.screen.width / 1.5;

slideshow.forEach((slide) => {
    let slideAmount = 0;
    let containerMotion = slide.parentElement.getAttribute('data-slide-motion');

    if (containerMotion == "slide") {
      setInterval(function () {
        
        if (slideAmount >= slide.children.length - 1) {
          slide.scrollLeft = 0; 
          slideAmount = 0;
        } else {
          slide.scrollLeft += slideDistance;
          slideAmount++;
        }
      }, 5000);
    }
});

const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const submitBtn = document.getElementById('formbtn');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(email)) {
        return true;
    } else {
        return false;
    }
}
function validateForm(){
    
}
