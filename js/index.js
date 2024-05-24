import co from '../components/checkout.js';
import Footer from '../components/footer.js';
co

document.getElementById('footer').innerHTML = Footer();
document.querySelector('.checkouts').innerHTML =co();



let BuyNowButtons = document.getElementsByClassName("buyNowBtn");

Array.from(BuyNowButtons).forEach(button => {
    button.addEventListener("click", () => {
        // window.location.href = "thanksforReach.html";
        document.querySelector(".checkouts").style.display = "block";
    });
});
let closeCheckOut = document.querySelector(".cancel-checkout")

closeCheckOut.addEventListener("click", () => {
    document.querySelector(".checkouts").style.display = "none";
});