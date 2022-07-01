document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset + document.documentElement.clientHeight > 10) {
            console.log(window.pageYOffset)
            header.classList.add('visible')
        }
        if (window.pageYOffset + document.documentElement.clientHeight === 0) {
            console.log(document.documentElement.clientHeight)
            header.classList.remove('visible')
        }
    })
})