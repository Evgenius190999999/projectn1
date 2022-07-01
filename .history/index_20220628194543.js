document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        const rotateFunc = () => {
            for (let i = 0; i <= 10000; i++) {
                if (i > 5000) {
                    setTimeout(() => { item.style.transform = `rotate(${i}deg)` }, i * 5)
                } else {
                    setTimeout(() => { item.style.transform = `rotate(${-i}deg)` }, i * 5)
                }

            }
        }
    })
})