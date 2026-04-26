const slideshow = document.querySelectorAll('.slideshow-container');
const slideDistance = window.screen.width / 1.5;

slideshow.forEach((slide) => {
    let slideAmount = 0;
    let containerMotion = slide.parentElement.getAttribute('data-slide-motion');
    const prevBtn = slide.parentElement.querySelector('#prevBtn');
    const nextBtn = slide.parentElement.querySelector('#nextBtn');

    if (containerMotion == "slide") {
        if (prevBtn) {
            prevBtn.addEventListener('click', function(){
                if(slideAmount <= 0){
                    slide.scrollLeft = slide.children.length * slideDistance;
                    slideAmount = slide.children.length - 1;
                } else {
                    slide.scrollLeft -= slideDistance;
                    slideAmount--;
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function(){
                if (slideAmount >= slide.children.length - 1) {
                    slide.scrollLeft = 0; 
                    slideAmount = 0;
                } else {
                    slide.scrollLeft += slideDistance;
                    slideAmount++;
                }
            });
        }

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

const nameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const cnfPasswordError = document.getElementById('confirm-password-error');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(email)) {
        if(emailError.classList.contains('hidden') == false){
            emailError.classList.add('hidden');
        }
        return true;
    } else {
        emailError.textContent = 'Please enter a valid email address';
        emailError.classList.remove('hidden');
        return false;
    }
}

function validatePassword(password) {
    const pwd = password;
    const rePwd = cnfpassword.value;
    if (pwd.length < 8) { 
        passwordError.textContent = 'Password must be at least 8 characters long';
         passwordError.classList.remove('hidden'); return false; }
    else if (!/[A-Z]/.test(pwd)) { 
        passwordError.textContent = 'Password must contain at least one uppercase letter'; 
        passwordError.classList.remove('hidden'); return false; 
    }
    else if (!/[a-z]/.test(pwd)) { 
        passwordError.textContent = 'Password must contain at least one lowercase letter'; 
        passwordError.classList.remove('hidden'); return false; 
    }
    else if (!/[0-9]/.test(pwd)) { 
        passwordError.textContent = 'Password must contain at least one digit'; 
        passwordError.classList.remove('hidden'); return false; 
    }
    else if (!/[@$!%*?&]/.test(pwd)) { 
        passwordError.textContent = 'Password must contain at least one special character'; 
        passwordError.classList.remove('hidden'); return false; 
    }
    else if (pwd !== rePwd) { 
        cnfPasswordError.textContent = 'Passwords do not match'; 
        cnfPasswordError.classList.remove('hidden'); return false; 
    }
    else {
        if(passwordError.classList.contains('hidden') == false){
            passwordError.classList.add('hidden');
        }
        return true;
    }
}

function validateUsername(name) {
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required';
        nameError.classList.remove('hidden');
        return false;
    } else if (name.value.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long';
        nameError.classList.remove('hidden');
        return false;
    } else if (name.value.length > 20) {
        nameError.textContent = 'Name must be at most 20 characters long';
        nameError.classList.remove('hidden');
        return false;
    } else{
        if(nameError.classList.contains('hidden') == false){
            nameError.classList.add('hidden');
        }
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