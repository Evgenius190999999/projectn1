document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset + document.documentElement.clientHeight > 70) {
            header.classList.add('visible')
        }
        if (window.pageYOffset === 0) {
            header.classList.remove('visible')
        }
    })
})