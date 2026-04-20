const slideshow = document.querySelectorAll('[data-slide-container]');
const slidedistance = window.screen.width / 1.5;

slideshow.forEach((slide) => {
    let containerMotion = slide.parentElement.attributes['data-slide-container'].value;

    if (containerMotion == "slide") {
      setInterval(function () {
        container.scrollLeft += slideDistance;
      }, 5000);
    }
});