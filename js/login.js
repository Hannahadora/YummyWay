// const form = document.getElementsByTagName('form');
const loginForm = document.querySelector("#loginForm");
const user = document.querySelector('#username');
const password = document.querySelector('#password');
const remain = document.getElementsByName('remain');
const loginError = document.querySelector('#loginError');
const loginBtn = document.querySelector('#loginBtn');

const passRegEx =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;;

    loginForm.addEventListener('submit', valForm);

    function valForm() {

        if (user.value === '' || password.value === '') {
            loginError.innerText = 'Invalid login details';
        }
     
       else{
           alert(`Hello ${user.value}, welcome to YummyWay`)
       }

       location.href = 'index.html';
    }







    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
        });
