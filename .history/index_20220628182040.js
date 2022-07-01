document.addEventListener('DOMContentLoaded', () => {
    const hr = date.getHours();
    const cart = document.querySelectorAll('.cart');
    cart.forEach(item => {

        const hourDegree = ((hr / 12) * 360) + 90;
        item.style.transform = `rotate(${hourDegree}deg)`;
    })
})