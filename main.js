const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const login = document.querySelector('#login')

login.addEventListener('click', () => {
    let xyz = validateInputs()
console.log(xyz)
console.log(email.value)
const storedEmail = localStorage.setItem('email', email.value.trim());
const storedPassword = localStorage.setItem('password', password.value.trim());
 console.log(xyz === true && email.value !=='' && password.value!=='')
    if(xyz === true){
        
        window.location.href = '/sign-up/dashboard.html'
        
    }
    
    // else{
    //     alert('fguiohgfghj')
    // }

});


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
console.log(localStorage.getItem('email'))
function validateInputs() {
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        
    let isValid = true;

    if (emailVal === '') {
        setError(email, 'Email is required')
        isValid = false;
    }
    else if (!validateEmail(emailVal)) {
        setError(email, 'please enter the valid email')
        isValid = false;
    }
    else {
        setSuccess(email)
    }
    if (passwordVal === '') {
        setError(password, 'password is required')
        isValid = false;
    }
    else if (passwordVal === 'password') {
        setError(password, 'password should not be password')
        isValid = false;
    }
    else if (!validatePassword(passwordVal)) {
        setError(password, 'Password must be at least 8 characters long, contain at least one uppercase letter, one special character, and one number');
        isValid = false;
    }
    else if (passwordVal.length < 8) {
        setError(password, 'password must have atleast 8 characters')
        isValid = false;
    }
    else {
        setSuccess(password)
    }
    
      if (storedEmail === emailVal && storedPassword === passwordVal) {
          isValid =true;
      }
     
     else if (storedEmail !== emailVal) {
          isValid = false;
     }
     else if (storedPassword !== passwordVal) {
         isValid = false;
    }
    return isValid;

}
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('remove')
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const validatePassword = (password) => {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    // return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,3}$/
}
