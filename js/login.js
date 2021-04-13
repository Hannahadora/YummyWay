const form = document.querySelector('form');
const userDetail = document.getElementsByName('userD');
const passDetail = document.getElementsByName('passD');
const remain = document.getElementsByName('remain');
const loginError = document.getElementsByClassName('loginError');
const loginBtn = document.getElementsByClassName('loginBtn');


function valForm(e) {

    if (userDetail.value === "" ) {
        loginError.innerText = 'please input username/Email'
    } else {
        window.location = "dashboard.html"
    }
}
