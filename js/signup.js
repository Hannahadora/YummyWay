const signupForm = document.querySelector("#signupForm");
const signupError = document.querySelector("#signupError");
const signupBtn = document.querySelector("#signupBtn");
const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const agree = document.querySelector('#agree');

password.addEventListener('blur', validatePassword)
    function validatePassword(e) {
        e.preventDefault() 
        if (password.value.length < 8) {
            signupError.innerText = 'Password too short'  
            console.log('hello') 
        } 
    }

// confirmPassword.addEventListener('blur', validateConfirmPassword)
//     function validateConfirmPassword(e) {
//         e.preventDefault() 
//         if (confirmPassword.value !== password.value) {
//             signupError.innerText = 'Password does not match'   
//         } 
//     }

 console.log(signupError)
// signupForm.addEventListener('submit', validateSignupForm) 

//     function validateSignupForm(e) {
    
//         e.preventDefault() 
       
//         location.href = "index.html"
//     }
        
        setTimeout(function() {
            signupError.remove();
        }, 2000);
    
    

    

 
    
const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
        });