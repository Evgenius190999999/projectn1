document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        item.style.trasnform = rotate('90deg');
    })
})