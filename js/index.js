const navbar = document.querySelector('.navbar');

window.onscroll = function () {
    let top = window.scrollY;
    if(top > 0){
        navbar = navbar.classList.add('active')
    }else {
        navbar = navbar.classList.remove('active')
    }
}