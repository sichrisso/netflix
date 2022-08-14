const searchbar = document.querySelector('.searchs');

searchbar.addEventListener("click", function() {
    searchbar.classList.add('active');
    // searchbar.classList.remove('active');
})

searchbar.addEventListener("dblclick", function() {
    searchbar.classList.remove('active')
})