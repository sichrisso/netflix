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

function movieDetail() {
  detail.classList.add("active");
  maindiv.classList.add("active");
  // console.log("clickedsss")
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

let index = 0;
for (const nxtButton of nxtButtons) {
  const MovieScroll = MovieScrolls[index];
  function righty() {
    console.log("first")
    MovieScroll.scrollLeft += 700;
  };
  index++;
}

//   nxtButton.addEventListener("click", function () {
//     MovieScroll.scrollLeft += 700;
//   });

index = 0;
for (const preButton of preButtons) {
  const MovieScroll = MovieScrolls[index];
  preButton.addEventListener("click", function () {
    MovieScroll.scrollLeft -= 700;
  });
  index++;
}

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
