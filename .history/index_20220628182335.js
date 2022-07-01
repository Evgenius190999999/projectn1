document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        setTimeout(() => rotateFunc = () => {
            for (let i = 0; i <= 360; i++) {
                return i;
            }
        }, 1000)
        item.style.transform = `rotate(${rotateFunc()}deg)`;
    })
})