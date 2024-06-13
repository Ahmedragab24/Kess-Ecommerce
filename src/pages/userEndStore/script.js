document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('mainForm');
    const storeName = document.getElementById('Store_name');
    const realStoreName = document.getElementById('Real_store_name');
    const loginName = document.getElementById('login_name');
    const certificateNo = document.getElementById('Certificate_No');
    const phoneNo = document.getElementById('Phone_No');
    const commercialActivity = document.getElementById('Commercial_Activity');
    const contactNo = document.getElementById('Contact_no');
    const email = document.getElementById('Email');
    const storeLink = document.getElementById('Store_link');
    const photo = document.getElementById('Photo');
    const instagramLink = document.getElementById('Instagram_Link');
    const storeLocation = document.getElementById('Store_location');
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

    storeName.addEventListener('input', () => {
        validateField(storeName, storeName.value.trim() !== '', 'Store name cannot be blank');
    });

    commercialActivity.addEventListener('input', () => {
        validateField(commercialActivity, commercialActivity.value.trim() !== '', 'commercial Activity cannot be blank');
    });

    loginName.addEventListener('input', () => {
        validateField(loginName, loginName.value.trim() !== '', 'login name cannot be blank');
    });

    storeLocation.addEventListener('input', () => {
        validateField(storeLocation, storeLocation.value.trim() !== '', 'commercial Activity cannot be blank');
    });

    certificateNo.addEventListener('input', () => {
        validateField(certificateNo, certificateNo.value.trim() !== '', 'certificate No cannot be blank');
    });

    realStoreName.addEventListener('input', () => {
        validateField(realStoreName, realStoreName.value.trim() !== '', 'Real store name cannot be blank');
    });

    email.addEventListener('input', () => {
        validateField(email, isEmail(email.value.trim()), 'Not a valid email');
    });

    storeLink.addEventListener('input', () => {
        validateField(storeLink, isHttpLink(storeLink.value.trim()), 'Not a valid Link');
    });

    instagramLink.addEventListener('input', () => {
        validateField(instagramLink, isHttpLink(instagramLink.value.trim()), 'Not a valid Link');
    });

    phoneNo.addEventListener('input', () => {
        validateField(phoneNo, isPhone(phoneNo.value.trim()), 'Not a valid phone number');
    });

    contactNo.addEventListener('input', () => {
        validateField(contactNo, isPhone(contactNo.value.trim()), 'Not a valid phone number');
    });

    password.addEventListener('input', () => {
        validateField(password, password.value.trim().length >= 8, 'Password must be at least 8 characters');
    });

    photo.addEventListener('input', () => {
        validateField(photo, isFileValid(photo.value.trim()), 'The extention must be "png|jpg|jpeg"');
    });

    function checkInputs() {
        let isValid = true;
        validateField(storeName, storeName.value.trim() !== '', 'Store name cannot be blank');
        validateField(realStoreName, realStoreName.value.trim() !== '', 'Real store name cannot be blank');
        validateField(loginName, loginName.value.trim() !== '', 'login name cannot be blank');
        validateField(certificateNo, certificateNo.value.trim() !== '', 'certificate No cannot be blank');
        validateField(phoneNo, isPhone(phoneNo.value.trim()), 'Not a valid phone number');
        validateField(commercialActivity, commercialActivity.value.trim() !== '', 'commercial Activity cannot be blank');
        validateField(contactNo, isPhone(contactNo.value.trim()), 'Not a valid phone number');
        validateField(email, isEmail(email.value.trim()), 'Not a valid email');
        validateField(storeLink, isHttpLink(storeLink.value.trim()), 'Not a valid Link');
        validateField(instagramLink, isHttpLink(instagramLink.value.trim()), 'Not a valid Link');
        validateField(storeLocation, storeLocation.value.trim() !== '', 'commercial Activity cannot be blank');
        validateField(password, password.value.trim().length >= 8, 'Password must be at least 8 characters');
        validateField(photo, isFileValid(photo.value.trim()), 'The extention must be "png|jpg|jpeg"');
    
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