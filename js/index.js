const navbar = document.querySelector(".navbar");
const detail = document.querySelector(".body2");
const movie = document.querySelector(".good");
const closing = document.querySelector(".cancel");
const maindiv = document.querySelector(".body1");
const detailPage = document.querySelector(".detailPage");
const nxtButtons = [...document.getElementsByClassName("nxtBtn")];
const preButtons = [...document.getElementsByClassName("preBtn")];
const MovieScrolls = [...document.getElementsByClassName("ImageContainer")];
const Searchbar = document.querySelector(".search");
const Setting = document.querySelector(".setting");
const SearchText = document.querySelector(".searchText");
const SearchField = document.querySelector(".searchField");
const detailOverview = document.querySelector("#DetailOverview");
const detailInformation = document.querySelector(".details");
const detailTopContent = document.querySelector(".top_content")


// Top NavBar on scroll background color
window.onscroll = function () {
  let top = window.scrollY;
  if (top > 0) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};

//  Pass data to detail page
function movieDetail(title, overview, image) {
  let DetailInfo = "";
  DetailInfo = `<div class="details">
  <img class="cancel" src="images/close.svg" alt="exit" onclick= "cancel()" />
  <h1 id="detail_title">${title}</h1>
  <p>${overview}</p>
</div>`;
detailOverview.textContent = `${overview}`;
detailTopContent.style.backgroundImage = `linear-gradient(
    to bottom,
    transparent 0%,
    rgb(34, 34, 34) 100%
  ),url('https://image.tmdb.org/t/p/original/${image}')`;
  document.querySelector("#dynamicCollection").textContent = `${title} Collections`
  document.querySelector("#aboutMovie").textContent = `About ${title}`
  detailInformation.innerHTML = DetailInfo;
  detail.classList.add("active");
  maindiv.classList.add("active");
}

// Detail page closing
function cancel() {
  detail.classList.remove("active");
  maindiv.classList.remove("active");
}

detail.addEventListener("click", function () {
  detail.classList.remove("active");
  maindiv.classList.remove("active");
});

detailPage.addEventListener("click", function (e) {
  e.stopPropagation();
});

/* Search Bar */
Searchbar.addEventListener("click", function () {
  console.log("clicked");
  SearchField.focus();
  Searchbar.classList.add("active");
  SearchText.classList.add("active");
});

Searchbar.addEventListener("dblclick", function () {
  Searchbar.classList.remove("active");
  SearchText.classList.remove("active");
});
