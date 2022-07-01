document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset + document.documentElement.clientHeight > 0) {
            console.log(window.pageYOffset)
            header.classList.add('visible')
        } else if (window.pageYOffset + document.documentElement.clientHeight == 80) {
            console.log(window.pageYOffset, document.documentElement.clientHeight)
            header.classList.remove('visible')
        }
    })
})