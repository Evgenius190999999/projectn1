document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        const rotateFunc = () => {
            for (let i = 0; i <= 180; i++) {
                return i;
            }
        }
        item.style.transform = `rotate(${setInterval(rotateFunc, 100)}deg)`;
    })
})