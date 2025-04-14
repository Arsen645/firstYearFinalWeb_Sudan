const navEl = document.querySelector('.nav');

window.addEventListener('scroll', ()=> {
    if (window.scrollY > 50) {
        navEl.classList.add('nav-scroll')
    }
});