document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        const rotateFunc = () => {
            for (let i = 0; i <= 360; i++) {
                setTimeout(() => { amount.innerHTML = message }, i * 10)
            }
        }
        item.style.transform = `rotate(${rotateFunc}deg)`;
    })
})