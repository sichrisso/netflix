const navbar = document.querySelector(".navbar");
const detail = document.querySelector(".body2");
const movie = document.querySelector(".good");
const closing = document.querySelector(".close");
const maindiv = document.querySelector(".body1");
const propagate = document.querySelector(".detailPage");
const nxtButtons = [...document.getElementsByClassName("nxtBtn")];
const preButtons = [...document.getElementsByClassName("preBtn")];
const MovieScrolls = [...document.getElementsByClassName("ImageContainer")];
const Searchbar = document.querySelector(".search");
const Setting = document.querySelector(".setting");
const SearchText = document.querySelector(".searchText");
const SearchField = document.querySelector(".searchField");
const detailBackground = document.querySelector("#detail_img");
const detailInformation = document.querySelector(".details");

window.onscroll = function () {
  let top = window.scrollY;
  if (top > 0) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};

// movie.addEventListener("click", function () {
//   detail.classList.add("active");
//   maindiv.classList.add("active");
// });

function movieDetail(title, overview, image) {
  let DetailInfo = "";

  DetailInfo = `
  <div id="detail_img"  style="background-image: linear-gradient(
    to bottom,
    transparent 80%,
    rgb(34, 34, 34) 100%
  ),url('https://image.tmdb.org/t/p/original/${image}')"></div>
  <img class="close" src="images/close.svg" alt="exit" />
  <h1 id="detail_title">${title}</h1>
  <p>${overview}</p>
  `;

  detailInformation.innerHTML = DetailInfo;
  detail.classList.add("active");
  maindiv.classList.add("active");
}

closing.addEventListener("click", function () {
  detail.classList.remove("active");
  maindiv.classList.remove("active");
});

detail.addEventListener("click", function () {
  detail.classList.remove("active");
  maindiv.classList.remove("active");
});

propagate.addEventListener("click", function (e) {
  e.stopPropagation();
});

// let index = 0;
// for (const nxtButton of nxtButtons) {
//   const MovieScroll = MovieScrolls[index];
//   function righty() {
//     console.log("first");
//     MovieScroll.scrollLeft += 700;
//   }
//   index++;
// }

// index = 0;
// for (const preButton of preButtons) {
//   const MovieScroll = MovieScrolls[index];
//   preButton.addEventListener("click", function () {
//     MovieScroll.scrollLeft -= 700;
//   });
//   index++;
// }

/* Search Bar */

Searchbar.addEventListener("click", function () {
  Searchbar.classList.add("active");
  Setting.classList.add("active");
  SearchText.classList.add("active");
});

Searchbar.addEventListener("dblclick", function () {
  Searchbar.classList.remove("active");
  Setting.classList.remove("active");
  SearchText.classList.remove("active");
});

// SearchField.addEventListener(
//     "keypress",
//     (event) => {
//       var name = event.key;
//       var code = event.code;
//       if (name === "Enter") {
//         const search_term = SearchField.value;
//       //   return search_term;
//         console.log(search_term)
//       }
//     },
//     false
//   );
