document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        item.style.transfrom = 'rotate(180deg)';
    })
})