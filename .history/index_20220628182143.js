document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        item.style.transform = `rotate(${for (let i = 0; i <= 360; i++)}deg)`;
    })
})