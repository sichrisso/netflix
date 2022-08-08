const navbar = document.querySelector('.navbar');
const play = document.getElementById('playbtn');
const detail = document.querySelector('.detailPage');
const movie =document.querySelector('.good');
const close = document.querySelector('.close');

window.onscroll = function () {
    let top = window.scrollY;
    if(top > 0){
        navbar = navbar.classList.add('active')
    }else {
        navbar = navbar.classList.remove('active')
    }
}


movie.addEventListener("click", function() {
    detail.classList.add('active')
})

close.addEventListener("click", function() {
    detail.classList.remove('active')
})
