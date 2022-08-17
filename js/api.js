import { BASE_URL, API_KEY, IMAGE_URL } from "./constants.js";

// Background movie view API

const movieInfo = document.querySelector("#title");

async function getNowPlayingMovie() {
  try {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    );
    let { results } = await response.json();
    let output = [];
    let MovieInformation = "";
    let randomNumber = Math.floor(Math.random() * 20);
    // console.log(randomNumber);
    if (response.status === 200) {
      results.forEach((movie) => {
        output.push({
          title: movie.title,
          overview: movie.overview,
          background: movie.backdrop_path,
        });
      });
    }

    MovieInformation += ` 
    <h1>${output[randomNumber].title}</h1>
    <p>${output[randomNumber].overview}</p>
  `;
    document.body.style.backgroundImage = `linear-gradient(
        to bottom,
        transparent 0%,
        rgb(26, 25, 25) 100%
      ),url('${IMAGE_URL}/${output[randomNumber].background}')`;
    movieInfo.innerHTML = MovieInformation;
    // console.log(output[randomNumber].background);
  } catch (error) {
    console.log("error");
  }
}

getNowPlayingMovie();


// List of movies by thier Genre 

const movieListView = document.querySelector(".movie_lists");
let moviehtml = "";

fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    data.genres.forEach((genre) => {
      // console.log(genre.name)
      fetchMoviesListByGeners(genre.id, genre.name);
    });
  });

const fetchMoviesListByGeners = (generId, genreName) => {
  fetch(`${BASE_URL}/genre/${generId}/movies?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      appendHtml(genreName, data.results);
    })
    .catch((error) => console.log(error));
};

const appendHtml = (genreName, data) => {
  moviehtml += `<div class="movie">`;
  moviehtml += `<p>${genreName}</p>`;
  moviehtml += `<img class="preBtn" src="images/pre-btn.svg"/>`;
  moviehtml += `<img class="nxtBtn"  src="images/nxt-btn.svg"/>`;
  moviehtml += `<div class="ImageContainer">`;
  data.forEach((movie, i) => {
    moviehtml += `<img class="good" src ="${IMAGE_URL}/${movie.poster_path}" onclick= "movieDetail('${movie.title}', '${movie.overview}', '${movie.poster_path}')"/>`;

    if (i == data.length - 1) {
      setTimeout(() => {
        setupScrolling();
      }, 100);
    }
  });
  moviehtml += `</div>`;
  moviehtml += `</div>`;
  // console.log(moviehtml)
  movieListView.innerHTML = moviehtml;
};


// Search Movies API

const SearchField = document.querySelector(".searchField");

SearchField.addEventListener(
  "keypress",
  async (event) => {
    var name = event.key;
    var code = event.code;
    if (name === "Enter") {
      const search_term = SearchField.value;
    //   console.log(search_term);
      let response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search_term}`
      );
      let { results } = await response.json();
      //   console.log(results)
      let searchResults = "";
      let searchbody = document.querySelector('main');
      const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
      searchResults += `<div class="searchExplore">`;
      searchResults += `<div class="searchInfo"><p id="explore">Explore titles related to:</p><p>${uppercaseWords(search_term)}</p></div>`;
      searchResults +=  `<div class="searchGrid">`
      results.forEach((search) => {
            // console.log(search)
            searchResults += `<img src ="${IMAGE_URL}/${search.poster_path}" />`;
        });
        searchResults += `</div>`
        searchResults += ` </div>`
        // console.log(searchResults)
        searchbody.innerHTML = searchResults;
      // console.log(results)
    }
  },
  false
);

