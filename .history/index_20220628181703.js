document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        item.setAttribute('rotate', 'transform: rotate(45deg)');
    })
})