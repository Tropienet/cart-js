const cartIconButton = document.querySelector(".cart-icon-button");
let isHidden = 1;

function changeCartVisibility(cart) {
    if(isHidden){
        cart.style.visibility = "hidden";
        isHidden=0
        cartIconButton.classList.remove("active")
    }else {
        cart.style.visibility = "visible";
        isHidden=1
        cartIconButton.classList.add("active")
    }
}

function addEventListenerToButton(button) {
    const cartContainer = document.querySelector(".cart-container");

    button.addEventListener("click", () => {
        changeCartVisibility(cartContainer);
    })
}

addEventListenerToButton(cartIconButton);