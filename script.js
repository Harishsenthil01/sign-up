// document.addEventListener('DOMContentLoaded', (event) => {
//     // Check if there are values in local storage and populate the form fields
//     const storedUsername = localStorage.getItem('username');
//     const storedEmail = localStorage.getItem('email');
//     const storedPassword = localStorage.getItem('password');

//     if (storedUsername) {
//         username.value = storedUsername;
//     }
//     if (storedEmail) {
//         email.value = storedEmail;
//     }
//     if (storedPassword) {
//         password.value = storedPassword;
//         cpassword.value = storedPassword;
//     }
// });

const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const signup = document.querySelector('#signup');
const login = document.querySelector('#login')

// login.addEventListener('click',()=>{
//    validateInputs();

//  });
email.addEventListener('input', () => {
    const emailVal = email.value.trim();
    if (emailVal === '') {
        setError(email, 'Email is required')
    }
    else if (!validateEmail(emailVal)) {
        setError(email, 'please enter the valid email')
    }
    else {
        setSuccess(email)
    }
})
password.addEventListener('input', () => {
    const passwordVal = password.value.trim();
    if(passwordVal == ''){
        setError(password,'password is required')
    }
    else if (passwordVal === 'password') {
        setError(password, 'password should not be password')
    }
    else if (!validatePassword(passwordVal)) {
        setError(password, 'Password must be at least 8 characters long, contain at least one uppercase letter, one special character, and one number');
    }
    else if (passwordVal.length < 8) {
        setError(password, 'password must have atleast 8 characters')
    }
    else {
        setSuccess(password)
    }
})



signup.addEventListener('click', () => {
    if (validateInputs()) {
        // If inputs are valid, store them in local storage
        localStorage.setItem('username', username.value.trim());
        localStorage.setItem('email', email.value.trim());
        localStorage.setItem('password', password.value.trim());
        alert('Sign-up successful! Your information has been saved.');
    }
});

// const emailVal = email.value.trim();


function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let isValid = true;

    if (usernameVal === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordVal.toLowerCase() === 'password') {
        setError(password, 'Password should not be "password"');
        isValid = false;
    } else if (!validatePassword(passwordVal)) {
        setError(password, 'Password must be at least 8 characters long, contain at least one uppercase letter, one special character, and one number');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (cpasswordVal === '') {
        setError(cpassword, 'Confirm password is required');
        isValid = false;
    } else if (cpasswordVal !== passwordVal) {
        setError(cpassword, 'Passwords do not match');
        isValid = false;
    } else {
        setSuccess(cpassword);
    }

    return isValid;
}


function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validatePassword = (password) => {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
};
var xyz = validateInputs
