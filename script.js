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
const cnfpassword = document.getElementById('confirm-password');
const submitBtn = document.getElementById('formbtn');
const form = document.querySelector('form');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(email)) {
        return true;
    } else {
        alert('Invalid email address');
        return false;
    }
}

function validatePassword(password) {
    const pwd = password;
    const rePwd = cnfpassword.value;
    if (pwd.length < 8) { alert('Password must be at least 8 characters long'); return false; }
    else if (!/[A-Z]/.test(pwd)) { alert('Password must contain at least one uppercase letter'); return false; }
    else if (!/[a-z]/.test(pwd)) { alert('Password must contain at least one lowercase letter'); return false; }
    else if (!/[0-9]/.test(pwd)) { alert('Password must contain at least one digit'); return false; }
    else if (!/[@$!%*?&]/.test(pwd)) { alert('Password must contain at least one special character'); return false; }
    else if (pwd !== rePwd) { alert('Passwords do not match'); return false; }
    else return true;
}

function validateUsername(name) {
    if (name.value.trim() === '') {
        alert('name is required');
        return false;
    } else if (name.value.length < 3) {
        alert('name must be at least 3 characters long');
        return false;
    } else if (name.value.length > 20) {
        alert('name must be at most 20 characters long');
        return false;
    } else{
        return true;
    }
}

function validateForm() {
    if (validateUsername(username) && validateEmail(email.value) && validatePassword(password.value)) {
        alert('Form submitted successfully!');
        return true;
    }
    else alert('Form submission failed. Please check your inputs and try again.');
}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if(validateForm()) {form.reset();};
});