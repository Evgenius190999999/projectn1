document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        const rotateFunc = () => {
            for (let i = 0; i <= 180; i++) {
                setTimeout(() => {
                    console.log(i);
                }, 100);
            }
        }
        item.style.transform = `rotate(${rotateFunc}deg)`;
    })
})