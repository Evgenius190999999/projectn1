document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        const rotateFunc = () => {
            for (let i = 0; i <= 1000; i++) {
                const message = i
                setTimeout(() => { item.style.transform = `rotate(${message}deg)` }, i * 50)
            }
        }
        rotateFunc()
    })
})