document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {
        const hr = date.getHours();
        const hourDegree = ((hr / 12) * 360) + 90;
        item.style.transform = `rotate(${hourDegree}deg)`;
    })
})