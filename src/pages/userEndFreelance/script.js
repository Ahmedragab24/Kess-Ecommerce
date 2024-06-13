document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('mainForm');
    
    const name_ar = document.getElementById('name_ar');
    const name_en = document.getElementById('name_en');
    const Certificate_no = document.getElementById('Certificate_no');
    const contact_no = document.getElementById('contact_no');
    const professionality = document.getElementById('professionality');
    const country = document.getElementById('country');
    const city = document.getElementById('city');
    const Certificate_photo = document.getElementById('Certificate_photo');
    const logo = document.getElementById('logo');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const signUpButton = document.getElementById('signUpButton');
    const successModal = document.getElementById('successModal');

    form.addEventListener('submit', function (e) {
        // e.preventDefault();
        // if (checkInputs()) {
        //     showModal();
        // }
        checkInputs();
    });
    signUpButton.addEventListener('click', function (e) {
        //e.preventDefault(); // Prevent the default form submission behavior
        // if (checkInputs()) {
        //     showModal();
        // }
        checkInputs();
    });

    name_ar.addEventListener('input', () => {
        validateField(name_ar, name_ar.value.trim() !== '', 'Store name cannot be blank');
    });

    name_en.addEventListener('input', () => {
        validateField(name_en, name_en.value.trim() !== '', 'commercial Activity cannot be blank');
    });

    Certificate_no.addEventListener('input', () => {
        validateField(Certificate_no, Certificate_no.value.trim() !== '', 'certificate No cannot be blank');
    });

    country.addEventListener('input', () => {
        validateField(country, professionality.value.trim() !== '', 'country cannot be blank');
    });

    city.addEventListener('input', () => {
        validateField(city, city.value.trim() !== '', 'city cannot be blank');
    });
    
    professionality.addEventListener('input', () => {
        validateField(professionality, professionality.value.trim() !== '', 'professionality cannot be blank');
    });
    
    email.addEventListener('input', () => {
        validateField(email, isEmail(email.value.trim()), 'Not a valid email');
    });
    contact_no.addEventListener('input', () => {
        validateField(contact_no, isPhone(contact_no.value.trim()), 'Not a valid contact number');
    });

    password.addEventListener('input', () => {
        validateField(password, password.value.trim().length >= 8, 'Password must be at least 8 characters');
    });

    Certificate_photo.addEventListener('input', () => {
        validateField(Certificate_photo, isFileValid(Certificate_photo.value.trim()), 'The extention must be "png|jpg|jpeg"');
    });

    logo.addEventListener('input', () => {
        validateField(logo, isFileValid(logo.value.trim()), 'The extention must be "png|jpg|jpeg"');
    });

    function checkInputs() {
        let isValid = true;
        validateField(name_ar, name_ar.value.trim() !== '', 'Arabic name cannot be blank');
        validateField(name_en, name_en.value.trim() !== '', 'English name cannot be blank');
        validateField(Certificate_no, Certificate_no.value.trim() !== '', 'certificate No cannot be blank');
        validateField(country, country.value.trim() !== '', 'country cannot be blank');
        validateField(city, city.value.trim() !== '', 'city cannot be blank');
        validateField(professionality, professionality.value.trim() !== '', 'professionality cannot be blank');
        validateField(contact_no, isPhone(contact_no.value.trim()), 'Not a valid phone number');
        validateField(email, isEmail(email.value.trim()), 'Not a valid email');
        validateField(password, password.value.trim().length >= 8, 'Password must be at least 8 characters');
        validateField(Certificate_photo, isFileValid(Certificate_photo.value.trim()), 'The extention must be "png|jpg|jpeg"');
        validateField(logo, isFileValid(logo.value.trim()), 'The extention must be "png|jpg|jpeg"');
    
        document.querySelectorAll('.form-control-input').forEach((control) => {
            if (control.classList.contains('error')) {
                isValid = false;
            }
        });
    
        return isValid;
    }

    function isEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    }

    function isPhone(phone) {
        return /^\+?(\d.*){3,}$/.test(phone);
    }

    function isHttpLink(link) {
        //return /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_]+$/.test(link);
        return /^(https?:\/\/)?[\w\d.-]+\.[\w\d.-]+(?:\/[\w\d.-]*)*(?:\?.*)?$/.test(link);
    }

    function isFileValid(fileName) {
        const allowedExtensions = /\.(png|jpg|jpeg)$/i;
        return allowedExtensions.test(fileName);
    }

    function validateField(input, condition, errorMessage) {
        if (condition) {
            setSuccess(input);
        } else {
            setError(input, errorMessage);
        }
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control-input error';
        icon.className = 'icon fas fa-times-circle';
        input.placeholder = message;
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control-input success';
        icon.className = 'icon fas fa-check-circle';
    }

    function showModal() {
        const modal = document.getElementById('successModal');
        modal.style.display = 'block';

        const closeBtn = document.querySelector('.close-button');
        closeBtn.onclick = function () {
            modal.style.display = 'none';
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }

});