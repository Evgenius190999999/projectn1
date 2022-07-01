document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        const rotateFunc = () => {
            for (let i = 0; i <= 1080; i++) {
                const message = i
                setTimeout(() => { item.style.transform = `rotate(${message}deg)` }, i * 10)
            }
        }
        rotateFunc()
    })
})