// const form = document.getElementsByTagName('form');
const bigForm = document.querySelector("#formVal");
const user = document.querySelector('#userDetail');
const pass = document.querySelector('#passDetail');
const remain = document.getElementsByName('remain');
const loginError = document.querySelector('#loginError');
const loginBtn = document.getElementsByClassName('loginBtn');

const passRegEx = /^[a-zA-Z0-9]{8, 16}$/

bigForm.addEventListener('submit', valForm);

    function valForm(e) {
         if (user.value === '') {
            loginError.innerText = 'Please Input Username'
        } if (pass.value === '') {
            loginError.innerText = 'Please Input Password'
        } if (pass.value !== passRegEx ) {
            loginError.innerText = 'Password must be above 8 and below 16 with an uppercase, lowercase and symbol'
        } else {
            windows.location.href = 'account.html'
         } if (user.value === '' && pass.value === '') {
            loginError.innerText = 'Please input Details'
        }
        

       
        e.preventDefault();
    }
