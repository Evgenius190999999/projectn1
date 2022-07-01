document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset + document.documentElement.clientHeight > 0) {
            header.classList.add('visible')
        } else if (window.pageYOffset === 0) {
            console.log(window.pageYOffset)
            header.classList.remove('visible')
        }
    })
})