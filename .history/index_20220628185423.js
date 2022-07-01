document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        const rotateFunc = () => {
            for (let i = 0; i <= 100000; i++) {
                // const message = i
                setTimeout(() => { item.style.transform = `rotate(${i}deg)` }, i * 20)
            }
        }
        rotateFunc()
    })
})