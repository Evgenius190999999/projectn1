document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        item.style.transform = `rotate(${hourDegree}deg)`;
    })
})