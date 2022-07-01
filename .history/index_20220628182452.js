document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        const rotateFunc = () => {
            for (let i = 0; i <= 360; i++) {
                return i;
            }
        }
        item.style.transform = `rotate(${setTimeout(rotateFunc, 1000)}deg)`;
    })
})