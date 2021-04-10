const homeRack = document.querySelector('.homeRack');
const cart = document.querySelector('#cart');
const addedText = document.querySelector('#addedText')
const added = document.querySelector('#added')
const checkOut = document.querySelector('.checkOutBtn')
const cake = document.querySelector('.cake');
const cartItems = document.querySelector('#cartItems');


const addToCart = document.querySelectorAll('.addToCart');
for(let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', function () {
        added.style.display = "block";
        addedText.style.display = "block";
    })
}

const cancelBtn = document.querySelector('#cancelBtn');
cancelBtn.addEventListener('click', cartVal)
function cartVal() {
    added.remove();
    addedText.remove()
}

const contShopping = document.querySelector('.continueBtn')
contShopping.addEventListener('click', shopVal)
function shopVal() {
    added.remove();
    addedText.remove()
}
