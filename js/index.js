const navbar = document.querySelector('.navbar');
const play = document.getElementById('playbtn');
const ju = document.querySelector('#C13');
const detail = document.querySelector('.detailPage');
const movie =document.querySelector('.good');

window.onscroll = function () {
    let top = window.scrollY;
    if(top > 0){
        navbar = navbar.classList.add('active')
    }else {
        navbar = navbar.classList.remove('active')
    }
}


ju.addEventListener("onmouseenter", function() {
    ju.innerHTML
    play.style.display = "block";
})

movie.addEventListener("click", function() {
    detail.classList.add('active')
})
