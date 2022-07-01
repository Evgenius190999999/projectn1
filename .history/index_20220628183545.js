document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        const rotateFunc = () => {
            for (let i = 0; i <= 360; i++) {
                const message = i
                setInterval(() => { item.style.transform = `rotate(${message}deg)` }, i * 100)
            }
        }
        rotateFunc()
    })
})